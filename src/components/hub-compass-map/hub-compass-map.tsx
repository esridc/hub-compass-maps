import { Component, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import esriConfig from "@arcgis/core/config.js";
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
// import PortalItem from "@arcgis/core/portal/PortalItem";

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
  @Prop() showLayers: boolean = true;

  /** 
   * Option to show search input
   */
  @Prop() showSearch: boolean = true;

  /** 
   * Option to show basemap selection
   */
  @Prop() showBasemaps: boolean = true;

  /**
   * Option to show service areas on map click
   */
  @Prop() showServiceAreas: boolean = true;

  /**
   * Service area distances (time?)
   */
  @Prop() serviceAreaBreaks: number[] = [1];

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
  }
  @Watch('zoom')
  async updateZoom(newZoom) {
    this.mapView.goTo({
      center: this.center,
      zoom: newZoom
    });
  }

  @Method()
  public async saveMap() {
    console.debug("hub-compass-map: saveMap()")
    const portalMap = new WebMap({
      basemap: "topo-vector"
    });
    console.debug("hub-compass-map: saveMap(): portalMap", {portalMap})
    // const portal = new Portal({
    //   authMode: "immediate"
    // });
    // portal.load().then(() => {
    // let item = new PortalItem({
    //   title: "Empty WebMap",
    //   tags: ["compass-map"],
    //   type: "Web Map"
    // });
    
    const item = {
      title: "New Webmap",
      tags: ["compass-map"]
    };
    const updateResult = await portalMap.updateFrom(this.mapView)
    const saveResult = await portalMap.saveAs(item);
      
    // });    
    console.debug("hub-compass-map: saveMap() complete", {portalMap, updateResult, saveResult})
    
  }

  @Method()
  public async addDatasetToMap(datasetId) {

    const datasetLayer = await new FeatureLayer({
      portalItem: {
        id: datasetId
      }
    });

    this.webMap.add(datasetLayer);
    this.datasetEls[datasetId] ||= {}
    this.datasetEls[datasetId].layer = datasetLayer;

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
  webMap: Map;
  mapView: MapView;
  serviceAreaUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/ServiceAreas/NAServer/ServiceArea_World";
  componentDidLoad() {
    esriConfig.apiKey = "AAPK42ebee6b2e134974bffd492cdf7f365dXxAPfRSdf05kJ3AtuEevSfJqUEZ34Vhy2UfrxPtSXrQAfwL04Zij-GfOEQU9OD_9";

    this.webMap = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });
    this.mapView = new MapView({
      map: this.webMap,
      center: this.center, // Longitude, latitude
      zoom: this.zoom, // Zoom level
      container: this.mapEl // Div element
    });
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
    
    if(!!this.datasetIds && this.datasetIds.length > 0) {
      this.datasetIds.forEach((datasetId) => {
        this.addDatasetToMap(datasetId);
      })
    }
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
    this.addServiceAreas(serviceAreaPolygons);
  }

  addServiceAreas(serviceAreaPolygons) {
    const graphics = serviceAreaPolygons.features.map((g)=>{
      g.symbol = {
        type: "simple-fill",
        color: "rgba(255, 0, 0, 0.25)"
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


