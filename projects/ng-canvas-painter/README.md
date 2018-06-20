ng-canvas-painter
=================

Angular 6+ component to paint on a canvas on desktop or touch devices

## Dependencies
* [Angular](https://angular.io) (tested with 6.0.0)

## Installation

After installing the above dependencies, install `ng-canvas-painter` via:

```shell
npm install --save ng-canvas-painter
```

## Usage
* Add `NgCanvasPainterModule` in your `app.module.ts`

```js
import {NgCanvasPainterModule} from 'ng-canvas-painter';

@NgModule({
    ...
    imports: [NgCanvasPainterModule]
})
export class AppModule {
...
}
```

* Add the `ng-canvas-painter` tag to your template

```html
<ng-canvas-painter #painter color="#00FF00" lineWidth="5" (paintStart)="onPaintStart()" (paintEnd)="onPaintEnd()"
                (undoLength)="onUndoLengthChanged($event)" (redoLength)="onRedoLengthChanged($event)"
                (isEmpty)="onIsEmptyChanged($event)"></canvas-painter>
```

### Options

```js
{
  clipBounds: { x: 0, y: 0, width: 0, height: 0 }  // Set a region that can be drawn on
  canvasWidth: 600, // px
  canvasHeight: 600, // px
  color: '#000',
  lineWidth: 10, // px
  cacheSize: 10 // boolean or a number of versions to keep in memory
}
```

## Credits
`ng-canvas-painter` is an open-source project.

Special thanks to [pwambach](https://github.com/pwambach/angular-canvas-painter) and their work with the AngularJS directive.

Special thanks to [shivs25](https://github.com/shivs25/angular4-canvas-painter) and their work work with the Angular 4 directive.

## License
MIT

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, please create an issue.

[Github](https://github.com/AndersTornkvist/ng-canvas-painter)
