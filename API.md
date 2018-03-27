# d3-tooltip API

## Getting started

**d3-tooltip** makes it easy to add simple tooltips to D3.js visualisations. To use, download the tip.js file in this repository and include that in your files with a scrpt tag: 

```
<script src="tip.js"></script>
```

You need to include this after you've pulled in the D3.js library. 

## Create a tooltip

To create a basic tooltip: 

```
var tip = d3Tip.create();
```

This is a very basic tooltip (it literally says "tooltip" in the tooltip). 

You can customise the tooltip by adding attributes to tooltip when you create it. For example, you can change the background color of the tooltip: 

```
var tip = d3Tip.create().style("background", "crimson");
```

The `.style()` method takes any standard CSS in the form (STYLE-PROPERTY, STYLE-VALUE)

Another example: 

```
var tip = d3Tip.create().style("border-width", "5px");
```

This would add a 5px border to the tooltip. 

## Styling tooltips

In its basic form **d3-tooltip** includes a default style for tooltips. It's a simple, clean style that will work for most projects. And this default style can be customised using the `.style()` method. 

But if you would prefer to create your own styles then you can disable the default styles and create your own styles using standard CSS. 

To disable the built-in styles for tooltips, create the tooltip with the 'false' attribute: 

```
var tip = d3Tip.create(false); 
```

To style the tooltip, include a CSS rule/s for `.d3-tooltip` like this: 

```
.d3-tooltip { 
  background: #000; 
  color: #fff; 
  border-radius: 5px;
  }
```
