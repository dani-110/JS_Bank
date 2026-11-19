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
      dataLabels: {
        enabled: false,
      },
      grid: {
        padding: {
          bottom: 0,
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
            fontSize: '9px',
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -9,
          style: {
            colors: theme.palette.textColor,
          }
        }
      },
      colors: [theme.palette.darkBaseColor],
      tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
        y: {
          formatter: function (val) {
            return `${val} Transactions`; // Hover karne par value ke sath text bhi dikhayega
          }
        }
      },
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
      height="320"
    />
  );
};

export default BarChart;

