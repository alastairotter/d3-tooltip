# d3-tooltip

d3-tooltip is small script (not yet a module, or a plugin) to make adding tooltips to D3 visualisations easy. 

## Usage

Download and include tips.js in your file (after you've loaded D3): 

```
<script src="tips.js"></script>
```

Create a tooltip: 

```
var tip = d3Tip.create()
```

This creates a tooltip with a set of default values. 

Create your elements and add tooltip actions based on mouse/pointer events: 

```
.on("mouseover", tip.show)
.on("mouseout", tip.hide)
```

This produces a basic tooltip which can then be customised. 

For details on the various options to customise tooltips, take a look at the [API documentation](https://github.com/alastairotter/d3-tooltip/blob/master/API.md). 
