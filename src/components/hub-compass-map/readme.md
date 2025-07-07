# hub-compass-map



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                                                                               | Type               | Default              |
| ------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------------------- |
| `basemap`           | `basemap`            | Basemap string Options: https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html#basemap                            | `string`           | `"gray-vector"`      |
| `center`            | --                   | Optional [longitude, latitude] map center                                                                                                 | `[number, number]` | `[0,0]`              |
| `datasetIds`        | --                   | Optional array of datasets to add to map                                                                                                  | `string[]`         | `[]`                 |
| `features`          | --                   | Optional features to display on the map See https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/   | `any[]`            | `null`               |
| `mapId`             | `map-id`             | Optional Map id to display                                                                                                                | `string`           | `null`               |
| `serviceAreaBreaks` | --                   | Service area distances in kilomenters Default to 1,5,10 minute based on 4.54km/hr speed                                                   | `number[]`         | `[0.07, 0.37, 0.75]` |
| `serviceAreaPoint`  | `service-area-point` | Optional location to calculate service center. Changing this will update the point                                                        | `any`              | `null`               |
| `session`           | `session`            | OAuth2 session information https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#registerToken | `any`              | `null`               |
| `showBasemaps`      | `show-basemaps`      | Option to show basemap selection                                                                                                          | `boolean`          | `false`              |
| `showLayers`        | `show-layers`        | Option to show layers                                                                                                                     | `boolean`          | `false`              |
| `showLegend`        | `show-legend`        | Option to show legend                                                                                                                     | `boolean`          | `true`               |
| `showSearch`        | `show-search`        | Option to show search input                                                                                                               | `boolean`          | `true`               |
| `showServiceAreas`  | `show-service-areas` | Option to show service areas on map click                                                                                                 | `boolean`          | `false`              |
| `showTable`         | `show-table`         | Option to show data table                                                                                                                 | `boolean`          | `true`               |
| `travelMode`        | `travel-mode`        | Optional travel mode: walking, etc.  TODO fix travel mode type and values                                                                 | `any`              | `null`               |
| `zoom`              | `zoom`               | Optional map zoom level                                                                                                                   | `number`           | `10`                 |


## Events

| Event                  | Description                                                                 | Type               |
| ---------------------- | --------------------------------------------------------------------------- | ------------------ |
| `mapSaved`             |                                                                             | `CustomEvent<any>` |
| `mapViewExtentChanged` | Event emitted when the map view's extent changes due to panning or zooming. | `CustomEvent<any>` |


## Methods

### `addDatasetToMap(datasetId: any) => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `filterTables(geometry: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `saveMap(title?: string, snippet?: string) => Promise<{ id: string; url: string; }>`



#### Returns

Type: `Promise<{ id: string; url: string; }>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
