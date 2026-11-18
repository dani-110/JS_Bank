// import { colors } from '@mui/material';
// import React from 'react';
// import Chart from 'react-apexcharts';

// const PieChart = ({ data }) => {
//   console.log(data)
//   const pieChart = {
//     options: {
//       labels: data?.map(e => e.productname || ''),
//       legend: {
//         position: "bottom",
//         show: false
//       },
//       dataLabels: {
//         enabled: false,
//         formatter: (val, opts) => opts.w.globals.labels[opts.seriesIndex],
//         style: {
//           fontSize: "14px",
//         },
//       },
//       // colors:['rgb(55, 167, 252)','rgb(54, 134, 235)','rgb(98, 172, 228)']
//     },
//     series: data?.map(e => parseInt(e.consumercount)),
//   };
//   console.log(pieChart)
//   return (
//     <Chart
//       options={pieChart.options}
//       series={pieChart.series}
//       type="pie"
//       width="90%"
//       height="100%"
//     />
//   );
// };

// export default PieChart;


import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PieChart = ({ data }) => {
  const theme = useTheme();

  const total = data?.reduce((sum, item) => sum + Number(item.consumercount), 0) || 0;

  const dataWithPercentage = data?.map(item => ({
    ...item,
    percentage: total > 0 ? ((Number(item.consumercount) / total) * 100).toFixed(1) : "0.0"
  })) || [];

  const pieChart = {
    options: {
      labels: data?.map(e => e.productname || ''),
      legend: {
        show: false, 
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val} Consumers`
        }
      }
    },
    series: data?.map(e => parseInt(e.consumercount)) || [],
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%', p: 2 }}>
      
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <Chart
          options={pieChart.options}
          series={pieChart.series}
          type="pie"
          width="100%"
          height="250"
        />
      </Box>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 1.5, maxHeight: '250px', overflowY: 'auto', pr: 1 }}>
        {dataWithPercentage.map((item, index) => {
          const colors = ['#7e57c2', '#26a69a', '#ffa726', '#ef5350', '#42a5f5', '#ab47bc', '#8d6e63', '#78909c'];
          const dotColor = colors[index % colors.length];

          return (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
              {/* Dot and Product Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflow: 'hidden' }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: dotColor, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontSize: '12px', color: theme.palette.textColor, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={item.productname}>
                  {item.productname}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexShrink: 0, fontWeight: 500 }}>
                <Typography variant="body2" sx={{ fontSize: '12px', minWidth: '30px', textAlign: 'right', color: theme.palette.textColor }}>
                  {item.consumercount}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px', minWidth: '45px', textAlign: 'right', color: 'text.secondary' }}>
                  {item.percentage}%
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PieChart;