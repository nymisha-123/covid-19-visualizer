
import { Component } from "@angular/core";

const mapData = [{"id":"001" },{"id":"002"},{"id":"003"},{"id":"004","value":143},{"id":"005"},{"id":"007","value":911},{"id":"009","value":292},{"id":"011","value":530},{"id":"013","value":2515},{"id":"015","value":728},{"id":"017","value":1974},{"id":"019","value":848},{"id":"021","value":3278},{"id":"023","value":4463},{"id":"025","value":1198},{"id":"027","value":378},{"id":"029","value":2610},{"id":"031","value":1200},{"id":"033","value":3820},{"id":"035","value":940}];

const colorrange = {
"minvalue": "0",
"startlabel": "Low",
"endlabel": "High",
"code": "e44a00",
"gradient": "1",
"color": [{"maxvalue": "2500", "code": "f8bd19"}, {"maxvalue": "5000", "code": "6baa01"}]
};

@Component({
selector: "app-root",
templateUrl: "./app.component.html"

})

export class AppComponent {
  title = 'Covid-19 Visualizer';
dataSource: Object;
constructor() {
this.dataSource = {
"chart": {
"animation": "0",
"showbevel": "0",
"usehovercolor": "1",
"showlegend": "1",
"legendposition": "BOTTOM",
"legendborderalpha": "0",
"legendbordercolor": "ffffff",
"legendallowdrag": "0",
"legendshadow": "0",
"caption": "Covid-19 live updates",
"connectorcolor": "000000",
"fillalpha": "80",
"hovercolor": "CCCCCC",
"theme": "fusion"
},
"colorrange": colorrange,
"data": mapData

    } // end of this.dataSource

} // end of constructor
} // end of class AppComponent

