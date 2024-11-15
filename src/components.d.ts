/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HubCompassMap {
        "addDatasetToMap": (datasetId: any) => Promise<boolean>;
        /**
          * Basemap string Options: https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html#basemap
         */
        "basemap": string;
        /**
          * Optional [longitude, latitude] map center
         */
        "center": [number, number];
        /**
          * Optional array of datasets to add to map
         */
        "datasetIds": string[];
        /**
          * Optional features to display on the map See https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/
         */
        "features": any[];
        "filterTables": (geometry: any) => Promise<void>;
        /**
          * Optional Map id to display
         */
        "mapId": string;
        "saveMap": (title?: string, snippet?: string) => Promise<{ id: string; url: string; }>;
        /**
          * Service area distances in kilomenters Default to 1,5,10 minute based on 4.54km/hr speed
         */
        "serviceAreaBreaks": number[];
        /**
          * Optional location to calculate service center. Changing this will update the point
         */
        "serviceAreaPoint": any;
        /**
          * OAuth2 session information https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#registerToken
         */
        "session": any;
        /**
          * Option to show basemap selection
         */
        "showBasemaps": boolean;
        /**
          * Option to show layers
         */
        "showLayers": boolean;
        /**
          * Option to show legend
         */
        "showLegend": boolean;
        /**
          * Option to show search input
         */
        "showSearch": boolean;
        /**
          * Option to show service areas on map click
         */
        "showServiceAreas": boolean;
        /**
          * Option to show data table
         */
        "showTable": boolean;
        /**
          * Optional travel mode: walking, etc.  TODO fix travel mode type and values
         */
        "travelMode": any;
        /**
          * Optional map zoom level
         */
        "zoom": number;
    }
}
export interface HubCompassMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHubCompassMapElement;
}
declare global {
    interface HTMLHubCompassMapElement extends Components.HubCompassMap, HTMLStencilElement {
    }
    var HTMLHubCompassMapElement: {
        prototype: HTMLHubCompassMapElement;
        new (): HTMLHubCompassMapElement;
    };
    interface HTMLElementTagNameMap {
        "hub-compass-map": HTMLHubCompassMapElement;
    }
}
declare namespace LocalJSX {
    interface HubCompassMap {
        /**
          * Basemap string Options: https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html#basemap
         */
        "basemap"?: string;
        /**
          * Optional [longitude, latitude] map center
         */
        "center"?: [number, number];
        /**
          * Optional array of datasets to add to map
         */
        "datasetIds"?: string[];
        /**
          * Optional features to display on the map See https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/
         */
        "features"?: any[];
        /**
          * Optional Map id to display
         */
        "mapId"?: string;
        "onMapSaved"?: (event: HubCompassMapCustomEvent<any>) => void;
        /**
          * Event emitted when the map view's extent changes due to panning or zooming.
          * @event mapViewExtentChanged
          * @type {CustomEvent<{ extent: __esri.Extent, center: __esri.Point, zoom: number }>}
          * @property {__esri.Extent} extent - The new extent of the map view.
          * @property {__esri.Point} center - The new center point of the map view.
          * @property {number} zoom - The new zoom level of the map view.
         */
        "onMapViewExtentChanged"?: (event: HubCompassMapCustomEvent<any>) => void;
        /**
          * Service area distances in kilomenters Default to 1,5,10 minute based on 4.54km/hr speed
         */
        "serviceAreaBreaks"?: number[];
        /**
          * Optional location to calculate service center. Changing this will update the point
         */
        "serviceAreaPoint"?: any;
        /**
          * OAuth2 session information https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#registerToken
         */
        "session"?: any;
        /**
          * Option to show basemap selection
         */
        "showBasemaps"?: boolean;
        /**
          * Option to show layers
         */
        "showLayers"?: boolean;
        /**
          * Option to show legend
         */
        "showLegend"?: boolean;
        /**
          * Option to show search input
         */
        "showSearch"?: boolean;
        /**
          * Option to show service areas on map click
         */
        "showServiceAreas"?: boolean;
        /**
          * Option to show data table
         */
        "showTable"?: boolean;
        /**
          * Optional travel mode: walking, etc.  TODO fix travel mode type and values
         */
        "travelMode"?: any;
        /**
          * Optional map zoom level
         */
        "zoom"?: number;
    }
    interface IntrinsicElements {
        "hub-compass-map": HubCompassMap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hub-compass-map": LocalJSX.HubCompassMap & JSXBase.HTMLAttributes<HTMLHubCompassMapElement>;
        }
    }
}
