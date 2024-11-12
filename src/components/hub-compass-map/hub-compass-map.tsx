import { Component, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
// import esriConfig from "@arcgis/core/config.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters.js";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";
import * as serviceArea from "@arcgis/core/rest/serviceArea.js";
import * as networkService from "@arcgis/core/rest/networkService.js";
// import TravelMode from "@arcgis/core/rest/support/TravelMode.js";
import Search from "@arcgis/core/widgets/Search";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import Expand from "@arcgis/core/widgets/Expand";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import * as projection from "@arcgis/core/geometry/projection.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";

// import PortalItem from "@arcgis/core/portal/PortalItem";
// import reactiveUtils from "@arcgis/core/reactiveUtils";

import IdentityManager from "@arcgis/core/identity/IdentityManager";

@Component({
  tag: 'hub-compass-map',
  styleUrl: 'hub-compass-map.css',
  shadow: false,
})
export class HubCompassMap {
  
  /**
   * Optional Map id to display
   */
  @Prop() mapId: string = null;

  /**
   * Optional features to display on the map
   * See https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/
   */
  @Prop() features: any[] = null;

  @Watch('features')
  public async addFeatures(newFeatures) {
    if (newFeatures) {

      // Now build feature layer and add to map
      const featureLayer = await new FeatureLayer({
        title: newFeatures.title,
        source: newFeatures.source,
        fields: newFeatures.fields,
        objectIdField: newFeatures.objectIdField,
        geometryType: newFeatures.geometryType,
        // spatialReference: newFeatures.spatialReference,
        // renderer: newFeatures.renderer || null
      });

      this.webMap.add(featureLayer);
    }
  }
  /**
   * Optional [longitude, latitude] map center
   */
  @Prop() center: [number, number] = [0,0];
  
  /**
   * Optional map zoom level
   */
  @Prop() zoom: number = 10;

  /**
   * Optional array of datasets to add to map
   */
  @Prop() datasetIds: string[] = [];

  /** 
   * Option to show legend
   */
  @Prop() showLegend: boolean = true;

  /**
   * Option to show data table
   */
  @Prop() showTable: boolean = true;

  /** 
   * Option to show layers
   */
  @Prop() showLayers: boolean = false;

  /** 
   * Option to show search input
   */
  @Prop() showSearch: boolean = true;

  /** 
   * Option to show basemap selection
   */
  @Prop() showBasemaps: boolean = false;

  /**
   * Option to show service areas on map click
   */
  @Prop() showServiceAreas: boolean = false;

  /**
   * Service area distances in kilomenters
   * Default to 1,5,10 minute based on 4.54km/hr speed
   */
  @Prop() serviceAreaBreaks: number[] = [0.07, 0.37, 0.75];

  /**
   * Optional travel mode: walking, etc.
   *  TODO fix travel mode type and values
   */
  @Prop({mutable: true, reflect: true}) travelMode: any = null;

  /**
   * Optional location to calculate service center.
   * Changing this will update the point
   */
  @Prop({mutable: true, reflect: true}) serviceAreaPoint = null;

  /**
   * OAuth2 session information
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#registerToken
   */
  @Prop() session = null;

  /**
   * Basemap string
   * Options: https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html#basemap
   */
  @Prop() basemap: string = "arcgis-topographic";

  /**
   * If map has already been saved, update it.
   */
  @State() _item = null;
  
  @Watch('serviceAreaPoint')
  updateServiceArea(newServicePoint) {
    this.createServiceAreas(newServicePoint);
  }

  /**
   * Manage datasets with their nav and view elements
   */
  @State() datasetEls: any = {}
  /**
   * TODO: only add new datasets, likely by diffing with old list
   */
  @Watch('datasetIds')
  async updateDatasets(newDatasetIds, oldDatasetIds) {
    console.debug("hub-compass-map: updateDatasets", {newDatasetIds, oldDatasetIds})
    newDatasetIds.forEach(async (datasetId) => {

      // Don't add duplicate layers
      if(oldDatasetIds.includes(datasetId)) {
        console.debug("hub-compass-map: updateDatasets duplicate", {datasetId})
        return;
      }
      console.debug("hub-compass-map: updateDatasets adding", {datasetId})
      this.addDatasetToMap(datasetId)
    });
  }

  @Watch('center')
  async updateCenter(newCenter) {
    this.mapView.goTo({
      center: newCenter,
      zoom: this.zoom
    });
    const graphic = this.createGraphic(this.mapView.center);
    this.mapView.graphics.addMany([graphic], 0);
  }
  @Watch('zoom')
  async updateZoom(newZoom) {
    this.mapView.goTo({
      center: this.center,
      zoom: newZoom
    });
  }

  /**
   * Event emitted when the map view's extent changes due to panning or zooming.
   * 
   * @event mapViewExtentChanged
   * @type {CustomEvent<{ extent: __esri.Extent, center: __esri.Point, zoom: number }>}
   * @property {__esri.Extent} extent - The new extent of the map view.
   * @property {__esri.Point} center - The new center point of the map view.
   * @property {number} zoom - The new zoom level of the map view.
   */
  @Event() mapViewExtentChanged: EventEmitter;
  
  
  @Event() mapSaved: EventEmitter;
  @Method()
  public async saveMap(title:string = "New webmap", snippet:string = "Created by Hub AI assistant") {
    if(this._item === null) {
      this._item = {
        title: title,
        snippet: snippet,
        tags: ["hub-radar-map"]
      };
    }
    console.debug("hub-compass-map: saveMap() start", {item: this._item})
    const updateResult = await this.webMap.updateFrom(this.mapView)
    const saveResult = await this.webMap.saveAs(this._item);
  
    const result = {id: saveResult.id, url: saveResult.url};
    console.debug("hub-compass-map: saveMap() complete", {result, updateResult, saveResult})
    this._item.id = saveResult.id;
    this.mapSaved.emit(
      {
        item: this._item
      }
    )
    return result;
  }



  @Method()
  public async addDatasetToMap(datasetId) {

    const datasetLayer = await new FeatureLayer({
      portalItem: {
        id: datasetId
      }
    });

    datasetLayer.popupEnabled = true;

    this.webMap.add(datasetLayer);
    this.datasetEls[datasetId] ||= {}
    this.datasetEls[datasetId].layer = datasetLayer;

  }

  /**
   * Check for session token info
   */
  componentWillLoad() {
    if(!!this.session) {
      IdentityManager.registerToken(this.session);
    }
  } 

  /**
   * Render tables after the elements are there
   */
  async componentDidRender() {
    console.debug("hub-compass-map: componentDidRender", this.datasetEls)
    if(this.showTable) {
      Object.keys(this.datasetEls).forEach((datasetId) => {
        if(!this.datasetEls[datasetId].table) {
          this.addTable(datasetId, this.datasetEls[datasetId].layer)
        }
      })
    }

  }


  mapEl: HTMLDivElement;
  tableEl: HTMLDivElement;
  webMap: WebMap;
  mapView: MapView;
  serviceAreaUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/ServiceAreas/NAServer/ServiceArea_World";
  componentDidLoad() {
    // esriConfig.apiKey = "AAPK42ebee6b2e134974bffd492cdf7f365dXxAPfRSdf05kJ3AtuEevSfJqUEZ34Vhy2UfrxPtSXrQAfwL04Zij-GfOEQU9OD_9";

    this.webMap = new WebMap({
      basemap: this.basemap // Basemap layer service
    });
    this.mapView = new MapView({
      map: this.webMap,
      center: this.center, // Longitude, latitude
      zoom: this.zoom, // Zoom level
      container: this.mapEl // Div element
    });
    
    this.mapView.popup.dockOptions = {
        // Disables the dock button from the popup
        buttonEnabled: false,
        // Ignore the default sizes that trigger responsive docking
        breakpoint: true
      };
    this.mapView.popup.defaultPopupTemplateEnabled = true;
    this.mapView.popup.dockEnabled = true;
    
    

    // Search
    if(this.showSearch) {
      const searchWidget = new Search({
        view: this.mapView
      });

      // Add the search widget to the top right corner of the view
      this.mapView.ui.add(searchWidget, {
        position: "top-right"
      });
    }    

    if(this.showLegend) {
      const legend = new Legend({
        view: this.mapView,
        layerInfos:[]
      });

      // Add widget to the bottom right corner of the view
      this.mapView.ui.add(new Expand({
        content: legend,
        view: this.mapView,
        expanded: true,
        group: "top-right"
      }), "bottom-right");      
    }
    // LayerList
    if(this.showLayers) {
      const layerList = new LayerList({
        view: this.mapView
      });

      // Add widget to the top right corner of the view
      this.mapView.ui.add(
        new Expand({
          content: layerList,
          view: this.mapView,
          group: "top-right"
        }),
        {position: "top-right"});
    }
    if(this.showBasemaps) {
      this.mapView.ui.add([
        new Expand({
            content: new BasemapGallery({
              view: this.mapView
            }),
            view: this.mapView,
            expandIcon: "basemap",
            group: "top-right"
          })
      ], {position: "top-right"});
    }

    this.mapView.when(() => {
      // this.mapView.ui.components = (["compass", "zoom", "search"]);

      // this.createServiceAreas(this.mapView.center);
      const graphic = this.createGraphic(this.mapView.center);
      this.mapView.graphics.addMany([graphic], 0);

    });

    this.mapView.on("click", (event) => {
      if(this.showServiceAreas) {
        this.createServiceAreas(event.mapPoint);
      }
    });
    this.mapView.watch("extent", () => {
      let outSpatialReference = new SpatialReference({
        wkid: 4326 
      });
      const extent = projection.project(this.mapView.extent, outSpatialReference);
      const center = projection.project(this.mapView.center, outSpatialReference);
      const zoom = this.mapView.zoom;
      this.mapViewExtentChanged.emit({ extent, center, zoom });
    });

    // reactiveUtils.when(
    //   () => this.mapView.stationary === true,
    //   () => {
    //     // Get the new extent of view/map whenever map is updated.
    //     if (this.mapView.extent) {
    //       // Filter out and show only the visible features in the feature table.
    //       this.filterTables(this.mapView.extent);
    //     }
    //   },
    //   {
    //     initial: true
    //   }
    // );
    
    if(!!this.datasetIds && this.datasetIds.length > 0) {
      this.datasetIds.forEach((datasetId) => {
        this.addDatasetToMap(datasetId);
      })
    }
  }

  @Method()
  public async filterTables(geometry) {
    Object.keys(this.datasetEls).forEach((datasetId) => {
      const featureTable = this.datasetEls[datasetId].table;
      featureTable.filterGeometry = geometry;
    })    
  }
  private async addTable(datasetId, featureLayer) {
    console.debug("addTable: ", {datasetId, featureLayer, datasetEls: this.datasetEls})

    const table = new FeatureTable({
      view: this.mapView,
      layer: featureLayer,
      visibleElements: {
        // Autocast to VisibleElements
        menuItems: {
          clearSelection: true,
          refreshData: true,
          toggleColumns: true,
          selectedRecordsShowAllToggle: true,
          zoomToSelection: true
        }
      },
      container: this.datasetEls[datasetId].view
    });

    this.datasetEls[datasetId].table = table;
  }

  private createServiceAreas(point) {
    // Remove any existing graphics
    this.mapView.graphics.removeAll();
    const locationGraphic = this.createGraphic(point);
    this.findServiceArea(locationGraphic);
  }
  // Create the location graphic
  private createGraphic(geometry) {
    let markerSymbol = {
      type: "simple-marker",
      color: "white",
      size: 8
    }
    // Create a and add the point
    const graphic = new Graphic({
      geometry,
      symbol: markerSymbol
    });
    this.mapView.graphics.add(graphic);
    return graphic;
  }

  async findServiceArea(locationFeature) {
    if (!this.travelMode) {
      const networkDescription = await networkService.fetchServiceDescription(this.serviceAreaUrl);
      console.debug("networkDescription.supportedTravelModes", {modes: networkDescription.supportedTravelModes})
      this.travelMode = networkDescription.supportedTravelModes.find(
        (travelMode) => travelMode.name === "Walking Distance"
      );
    }
    console.debug('travelMode', this.travelMode)
    const serviceAreaParameters = new ServiceAreaParameters({
      facilities: new FeatureSet({
        features: [locationFeature]
      }),
      defaultBreaks: this.serviceAreaBreaks, // km
      travelMode: this.travelMode,
      travelDirection: "to-facility",
      outSpatialReference: this.mapView.spatialReference,
      trimOuterPolygon: true
    });
    const { serviceAreaPolygons } = await serviceArea.solve(this.serviceAreaUrl, serviceAreaParameters);
    
    console.debug("hub-compass-map: findServiceArea", {geom: serviceAreaPolygons.features[0]})
    this.filterTables(serviceAreaPolygons.features[0].geometry);
    
    this.addServiceAreas(serviceAreaPolygons);
  }

  addServiceAreas(serviceAreaPolygons) {
    const graphics = serviceAreaPolygons.features.map((g)=>{
      g.symbol = {
        type: "simple-fill",
        color: `rgba(${Math.floor(Math.random() * 200)}, 0, 0, 0.25)`
      }
      return g
    })
    this.mapView.graphics.addMany(graphics, 0);
  }
  render() {
    
    return (
      <Host>
        <slot></slot>
        <div id="mapWrapper">
          <div 
            ref={(el) => this.mapEl = el as HTMLDivElement}
            id="mapDiv">
          </div>
          <div
            ref={(el) => this.tableEl = el}
            id="tableDiv"
          >
            {this.showTable ? this.renderTables(this.datasetIds) : ''}
          </div>
        </div>
        
      </Host>
    );
  }

  tableTabsEl: HTMLDivElement; 
  tableTabsNavEl: HTMLDivElement;
  renderTables(datasetIds: string[]) {
    return(
        <calcite-tabs  ref={(el) => {this.tableTabsEl = el}}>
          <calcite-tab-nav slot="title-group" ref={(el) => {this.tableTabsNavEl = el}}>
          {datasetIds.map((dataset) => {
            return this.renderTableNav(dataset)
          })}
          </calcite-tab-nav>
          {datasetIds.map((dataset) => {
            return this.renderTableView(dataset)
          })}
      </calcite-tabs>
    )
  }

  renderTableNav(datasetId:string) {
    this.datasetEls[datasetId] ||= {};
    console.debug("renderTableNav: ", {datasetId, datasetEls: this.datasetEls})

    const output = <calcite-tab-title selected ref={(el) => {this.datasetEls[datasetId].nav = el}}>Table</calcite-tab-title>
    return output
  }
  renderTableView(datasetId:string) {
    console.debug("renderTableView: ", {datasetId, datasetEls: this.datasetEls})
    const output =<calcite-tab><div  class="table" ref={(el) => {this.datasetEls[datasetId].view = el}}></div></calcite-tab>;
    return output
  }
}


