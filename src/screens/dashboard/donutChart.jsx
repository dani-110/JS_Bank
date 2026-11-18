// import { colors } from '@mui/material';
// import React from 'react';
// import Chart from 'react-apexcharts';

// const DonutChart = ({ data }) => {
//   console.log(data)
//   const total = data.reduce((sum, item) => sum + Number(item.merchantcount), 0);

//   const dataWithPercentage = data.map(item => ({
//     ...item,
//     percentage: total > 0 ? `${((Number(item.merchantcount) / total) * 100).toFixed(2)}%` : "0.00%"
//   }));
//   console.log(dataWithPercentage)
//   const donut = {
//     options: {
//       labels: data?.map(e => e.productname),
//       legend: {
//         position: 'bottom',
//         show: false
//       },
//       dataLabels: {
//         enabled: false, // Disable percentage display
//       },
//       // colors:['#E8C547']
//     },
//     series: data?.map(e => parseInt(e.merchantcount)),
//   }
//   console.log(donut)
//   return (
//     <Chart
//       options={donut.options}
//       series={donut.series}
//       type="donut"
//       width="90%"
//       height="100%"
//     />
//   );
// };

// export default DonutChart;




import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DonutChart = ({ data }) => {
  const theme = useTheme();

  const total = data?.reduce((sum, item) => sum + Number(item.merchantcount), 0) || 0;

  const dataWithPercentage = data?.map(item => ({
    ...item,
    percentage: total > 0 ? ((Number(item.merchantcount) / total) * 100).toFixed(1) : "0.0"
  })) || [];

  const donut = {
    options: {
      labels: data?.map(e => e.productname),
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: 'Merchants',
                fontSize: '14px',
                color: theme.palette.textColor || '#666',
                formatter: () => total, 
              }
            }
          }
        }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val} Merchants`
        }
      }
    },
    series: data?.map(e => parseInt(e.merchantcount)) || [],
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%', p: 2 }}>
    
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <Chart
          options={donut.options}
          series={donut.series}
          type="donut"
          width="100%"
          height="250"
        />
      </Box>

      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 1.5,  pr: 1 }}>
        {dataWithPercentage.map((item, index) => {
          const colors = donut.options.colors || ['#7e57c2', '#26a69a', '#ffa726', '#ef5350', '#42a5f5', '#ab47bc', '#8d6e63', '#78909c'];
          const dotColor = colors[index % colors.length];

          return (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflow: 'hidden' }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: dotColor, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontSize: '12px', color: theme.palette.textColor, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={item.productname}>
                  {item.productname}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexShrink: 0, fontWeight: 500 }}>
                <Typography variant="body2" sx={{ fontSize: '12px', minWidth: '30px', textAlign: 'right', color: theme.palette.textColor }}>
                  {item.merchantcount}
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

export default DonutChart;