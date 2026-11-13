import { colors } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ data }) => {
  const donut = {
    options: {
        labels: data?.map(e => e.productname),
        legend: {
            position: 'bottom',
            show: false
        },
        dataLabels: {
            enabled: false, // Disable percentage display
        },
        // colors:['#E8C547']
    },
    series: data?.map(e => parseInt(e.merchantcount)),
}
  return (
    <Chart
      options={donut.options}
      series={donut.series}
      type="donut"
      width="90%"
      height="100%"
    />
  );
};

export default DonutChart;

