
var tt;

// var styles = document.getElementsByClassName("d3-tooltip").style("border");
// console.log(styles);

var d3Tip = { 

    // defaults
    tipClass: "d3-tooltip",
    offsetX: 10,
    offsetY: 10,

    //functions
    create: function (s) { 

        var t = d3.select("body").append("div").attr("class", d3Tip.tipClass)
            .style("position", "absolute")
            .style("top", 0)
            .style("left", 0)

        if(typeof s === 'undefined' || s === true) { 
            t.style("border","solid 1px #eee") 
                .style("background","#fff")
                .style("padding","5px 10px")
                .style("font-size","80%") 
                .style("font-family","Arial, Helvetica, sans-serif")
                .style("display","none")
                .style("pointer-events", "none")
        }

        tt = d3.select("." + this.tipClass); return this;
    },
    // anchor: function (position) { 
    //     console.log(position); return this;

    // },
    hide: function () { 
        tt.style("display", "none"); return this;
    },
    show: function () { 
        tt.style("display", "block").style("top", d3.event.y + "px").style("left", d3.event.x + "px"); return this;
    },
    position: function () { 
        tt.style("top", d3.event.y + d3Tip.offsetY + "px").style("left", d3.event.x + d3Tip.offsetX + "px");
    },
    offset: function (o) { 
        d3Tip.offsetX = o[0],
        d3Tip.offsetY = o[1];
        return this;
    },
    html: function (t) { 
        tt.html(t); return this;
    },
    style: function (style, value) { 
        tt.style(style, value); return this;
    }

}



