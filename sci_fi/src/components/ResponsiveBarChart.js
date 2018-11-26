import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { ResponsiveBar } from '@nivo/bar'


const theme = {
    axis: {
        textColor: '#eee',
        fontSize: '14px',
        tickColor: '#eee',
    },
    grid: {
        stroke: '#888',
        strokeWidth: 1
    },
};

class ResponsiveBarChart extends Component {

  render() {

    return (
      <div style={{height: '100%'}}>
          <ResponsiveBar
              theme={theme}
              data={[
                  {
                      "country": "AD",
                      "hot dog": 65,
                      "hot dogColor": "hsl(24, 70%, 50%)",
                      "burger": 73,
                      "burgerColor": "hsl(48, 70%, 50%)",
                      "sandwich": 164,
                      "sandwichColor": "hsl(82, 70%, 50%)",
                      "kebab": 143,
                      "kebabColor": "hsl(185, 70%, 50%)",
                      "fries": 26,
                      "friesColor": "hsl(204, 70%, 50%)",
                      "donut": 19,
                      "donutColor": "hsl(105, 70%, 50%)"
                  },
                  {
                      "country": "AE",
                      "hot dog": 64,
                      "hot dogColor": "hsl(38, 70%, 50%)",
                      "burger": 120,
                      "burgerColor": "hsl(53, 70%, 50%)",
                      "sandwich": 199,
                      "sandwichColor": "hsl(36, 70%, 50%)",
                      "kebab": 105,
                      "kebabColor": "hsl(108, 70%, 50%)",
                      "fries": 40,
                      "friesColor": "hsl(207, 70%, 50%)",
                      "donut": 9,
                      "donutColor": "hsl(86, 70%, 50%)"
                  },
                  {
                      "country": "AF",
                      "hot dog": 187,
                      "hot dogColor": "hsl(94, 70%, 50%)",
                      "burger": 155,
                      "burgerColor": "hsl(241, 70%, 50%)",
                      "sandwich": 120,
                      "sandwichColor": "hsl(158, 70%, 50%)",
                      "kebab": 120,
                      "kebabColor": "hsl(345, 70%, 50%)",
                      "fries": 116,
                      "friesColor": "hsl(18, 70%, 50%)",
                      "donut": 195,
                      "donutColor": "hsl(3, 70%, 50%)"
                  },
                  {
                      "country": "AG",
                      "hot dog": 87,
                      "hot dogColor": "hsl(213, 70%, 50%)",
                      "burger": 67,
                      "burgerColor": "hsl(351, 70%, 50%)",
                      "sandwich": 129,
                      "sandwichColor": "hsl(350, 70%, 50%)",
                      "kebab": 134,
                      "kebabColor": "hsl(355, 70%, 50%)",
                      "fries": 29,
                      "friesColor": "hsl(139, 70%, 50%)",
                      "donut": 114,
                      "donutColor": "hsl(44, 70%, 50%)"
                  },
                  {
                      "country": "AI",
                      "hot dog": 65,
                      "hot dogColor": "hsl(74, 70%, 50%)",
                      "burger": 28,
                      "burgerColor": "hsl(357, 70%, 50%)",
                      "sandwich": 27,
                      "sandwichColor": "hsl(186, 70%, 50%)",
                      "kebab": 8,
                      "kebabColor": "hsl(111, 70%, 50%)",
                      "fries": 42,
                      "friesColor": "hsl(76, 70%, 50%)",
                      "donut": 58,
                      "donutColor": "hsl(185, 70%, 50%)"
                  },
                  {
                      "country": "AL",
                      "hot dog": 193,
                      "hot dogColor": "hsl(118, 70%, 50%)",
                      "burger": 23,
                      "burgerColor": "hsl(317, 70%, 50%)",
                      "sandwich": 142,
                      "sandwichColor": "hsl(350, 70%, 50%)",
                      "kebab": 133,
                      "kebabColor": "hsl(243, 70%, 50%)",
                      "fries": 151,
                      "friesColor": "hsl(237, 70%, 50%)",
                      "donut": 166,
                      "donutColor": "hsl(57, 70%, 50%)"
                  },
                  {
                      "country": "AM",
                      "hot dog": 132,
                      "hot dogColor": "hsl(70, 70%, 50%)",
                      "burger": 118,
                      "burgerColor": "hsl(235, 70%, 50%)",
                      "sandwich": 134,
                      "sandwichColor": "hsl(259, 70%, 50%)",
                      "kebab": 78,
                      "kebabColor": "hsl(39, 70%, 50%)",
                      "fries": 107,
                      "friesColor": "hsl(14, 70%, 50%)",
                      "donut": 140,
                      "donutColor": "hsl(61, 70%, 50%)"
                  }
              ]}
              keys={[
                  "hot dog",
                  "burger",
                  "sandwich",
                  "kebab",
                  "fries",
                  "donut"
              ]}
              indexBy="country"
              margin={{
                  "top": 50,
                  "right": 130,
                  "bottom": 20,
                  "left": 60
              }}
              padding={0.3}
              colors="nivo"
              colorBy="id"
              defs={[
                  {
                      "id": "dots",
                      "type": "patternDots",
                      "background": "inherit",
                      "color": "#38bcb2",
                      "size": 4,
                      "padding": 1,
                      "stagger": true
                  },
                  {
                      "id": "lines",
                      "type": "patternLines",
                      "background": "inherit",
                      "color": "#eed312",
                      "rotation": -45,
                      "lineWidth": 6,
                      "spacing": 10
                  }
              ]}
              fill={[
                  {
                      "match": {
                          "id": "fries"
                      },
                      "id": "dots"
                  },
                  {
                      "match": {
                          "id": "sandwich"
                      },
                      "id": "lines"
                  }
              ]}
              borderColor="#eee"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  "textColor": '#eee',
                  "fontSize": '14px',
                  "tickColor": '#eee',
                  "tickSize": 5,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "legend": "country",
                  "legendPosition": "start",
                  "legendOffset": 32
              }}
              axisLeft={{
                  "color": '#eee',
                  "tickSize": 5,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "legend": "food",
                  "legendPosition": "start",
                  "legendOffset": -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="#eee"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                  {
                      "textColor": '#eee',
                      "dataFrom": "keys",
                      "anchor": "bottom-right",
                      "direction": "column",
                      "justify": false,
                      "translateX": 120,
                      "translateY": 0,
                      "itemsSpacing": 2,
                      "itemWidth": 100,
                      "itemHeight": 20,
                      "itemDirection": "left-to-right",
                      "itemOpacity": 0.85,
                      "symbolSize": 20,
                      "effects": [
                          {
                              "on": "hover",
                              "style": {
                                  "itemOpacity": 1
                              }
                          }
                      ]
                  }
              ]}
          />
      </div>
    );
  }
}

export default ResponsiveBarChart;
