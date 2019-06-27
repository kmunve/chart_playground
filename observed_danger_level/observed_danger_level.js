// ZC.LICENSE = ["b55b025e438fa8a98e32482b5f768ff5"];
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
        "text": "Observed Danger Level"
    },
    "plot": {
        "values": [
            [1, 0, 2], // dato-tidspunkt, plassering=0, størrelse=ANTALL_OBS
            [2, 0, 1],
            [3, 0, 0],
            [4, 0, 1],
            [5, 0, 3],
            [6, 0, 2],
            [7, 0, 4],
        ],
        "value-box": {
            "text": "%node-size-value observasjon(er)",
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
        "values": "1:7:1",
        "guide": {
            "visible": false
        }
    },
    "scale-y": {
        "visible": false
    },
    "series": [{
        "data-v": [0, 0, 0, 0, 0, 0, 0],
        "data-pie": "1-liten",
        "marker": {
            "background-color": "green"
        }
    }, {
        "data-v": [2, 0, 0, 0, 1, 0, 0],
        "data-pie": "2-moderat",
        "marker": {
            "background-color": "yellow"
        }
    }, {
        "data-v": [0, 1, 0, 1, 2, 2, 2],
        "data-pie": "3-betydelig",
        "marker": {
            "background-color": "orange"
        },
    }, {
        "data-v": [0, 0, 0, 0, 0, 0, 2],
        "data-pie": "4-stor",
        "marker": {
            "background-color": "red"
        },
    }, {
        "data-v": [0, 0, 0, 0, 0, 0, 0],
        "data-pie": "5-meget stor",
        "marker": {
            "background-color": "black"
        },
    }]
};

zingchart.render({
    id: 'chart_div',
    data: chartConfig,
    height: 400,
    width: "100%"
});