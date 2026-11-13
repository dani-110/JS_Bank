import { colors } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  console.log(data)
  const pieChart = {
    options: {
      labels: data?.map(e => e.productname || ''),
      legend: {
        position: "bottom",
        show: false
      },
      dataLabels: {
        enabled: false,
        formatter: (val, opts) => opts.w.globals.labels[opts.seriesIndex],
        style: {
          fontSize: "14px",
        },
      },
      // colors:['rgb(55, 167, 252)','rgb(54, 134, 235)','rgb(98, 172, 228)']
    },
    series: data?.map(e => parseInt(e.consumercount)),
  };
  return (
    <Chart
      options={pieChart.options}
      series={pieChart.series}
      type="pie"
      width="90%"
      height="100%"
    />
  );
};

export default PieChart;

