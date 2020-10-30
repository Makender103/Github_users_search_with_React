import React from "react";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, Column2D, FusionTheme);


const ChartComponent =({data})=>{

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
   
        theme: "fusion",
        decimals: 0,
        pieradius: '35%',
      },
      // Chart Data
      data,
    }
  };
  
    return (<ReactFC {...chartConfigs} />)
  }

export default ChartComponent