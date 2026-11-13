
import { useTheme } from '@emotion/react';
import moment from 'moment';
import React from 'react';
import Chart from 'react-apexcharts';

const DynamicStackedBarChart = ({ data }) => {
  const theme = useTheme()
  const categories = Array.from(new Set(data.map((item) => moment(item.requestday).format('YYYY-MM-DD'))));
  const serviceTypes = Array.from(new Set(data.map((item) => item.servicetype)));
  const series = serviceTypes.map((serviceType) => ({
    name: serviceType,
    data: categories.map(
      (date) =>
        data.find(
          (item) => moment(item.requestday).format('YYYY-MM-DD') == date && item.servicetype === serviceType
        )?.requestcount || 0
    ),
  }));

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        tools: {
          download: false,
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
      },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: theme.palette.textColor,
        }
      }
    },
    yaxis: {
      title: {
        // text: 'Count',
      },
      labels: {
        style: {
          colors: theme.palette.textColor,
        }
      }
    },
    legend: {
      position: 'top',
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  return (

    <Chart options={options} series={series} type="bar" width="100%"
      height="90%" />
  );
};

export default DynamicStackedBarChart;

