ZC.LICENSE = ["b55b025e438fa8a98e32482b5f768ff5"];
var chartConfig = {
    "type": "bubble-pie",
    "legend": {
        "item": {
            "text": "%data-pie"
        },
        "align": "center",
        "vertical-align": "bottom"
    },
    "title": {
        "text": "Corporate Survey"
    },
    "subtitle": {
        "text": "Public Perception"
    },
    "plot": {
        "values": [
            [2011, 2003, 2003],
            [2012, 2543, 2543],
            [2013, 3521, 3521],
            [2014, 2804, 2804],
            [2015, 4205, 4205],
        ],
        "value-box": {
            "text": "%node-size-value total responses",
            "placement": "bottom",
            "font-color": "black",
            "font-weight": "normal"
        },
        "data-bubble": ["2011", "2012", "2013", "2014", "2015"],
        "tooltip": {
            "text": "%data-pv% %data-pie"
        }
    },
    "scale-x": {
        "values": "2011:2015:1"
    },
    "scale-y": {},
    "series": [{
        "data-v": [603, 789, 1800, 1502, 2105],
        "data-pie": "Positive",
        "marker": {
            "background-color": "#5dc911"
        }
    }, {
        "data-v": [1200, 1600, 1421, 1200, 1900],
        "data-pie": "Negative",
        "marker": {
            "background-color": "#e32143"
        }
    }, {
        "data-v": [200, 154, 300, 102, 200],
        "data-pie": "Neutral",
        "marker": {
            "background-color": "#bfbfbf"
        }
    }]
};

zingchart.render({
    id: 'chart_div',
    data: chartConfig,
    height: 500,
    width: "100%"
});