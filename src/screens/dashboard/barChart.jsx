import { useTheme } from '@emotion/react';
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
  const theme = useTheme()
  const transactionMISCustomListState = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
          tools: {
            download: false,
          }
        },
      },
      grid: {
        padding: {
          bottom: 0, // neeche ka space aur kam karega
          left: 0,
          right: 0,
          top: 0,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
        },
      },
      xaxis: {
        categories: data?.map(e => e.requestday),
        labels: {
          style: {
            colors: theme.palette.textColor,
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: theme.palette.textColor, 
          }
        }
      },
      colors: ["rgb(165, 136, 220)"],
    },
    series: [
      {
        name: "Transaction Count",
        data: data?.map(e => e.requestcount)
      }
    ]
  };
  return (
    <Chart
      options={transactionMISCustomListState.options}
      series={transactionMISCustomListState.series}
      type="bar"
      width="100%"
      height="90%"
    />
  );
};

export default BarChart;

