import { Table, TableHead, TableRow, TableCell, TableBody, Box, Typography, CircularProgress, Button, Grid, IconButton, Tooltip, Collapse } from '@mui/material';
import { useTheme } from '@emotion/react';
import './table.scss'
import TablePaginationComp from './tablePagination';
import { MdExpandMore, MdOutlineExpandLess, MdOutlineVerifiedUser } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { downloadExcel } from '../../utils/Utils';

import excelExport from '../../assests/excel_export.png'
import ResponseCode from '../responseCode/responseCode';
import RiskValue from '../riskValue/riskValue';
import SAFStatus from '../safStatus/safStatus';
import ProcessingStatus from '../processingStatus/processingStatus';
import Status from '../status/status';
import MerchantType from '../merchanttype/merchanttype';
import LinkSAFStatus from '../linkSAFStatus/linkSAFStatus';
import Logo from '../logo/logo';
import PepFlag from '../linkSAFStatus/linkSAFStatus';
import React, { useEffect, useState } from 'react';
import HistoricComment from '../historicComment/historicComment';
import NatureValue from '../natureValue/safStatus';
import SelectedRows from '../selectedRows/selectedRows';
import SelectedHeader from '../selectedRows/selectedHeader';
import OnboardingStatus from '../onboardingStatus/onboardingStatus';
import LinkSAFStatusTransaction from '../linkSAFStatusTransaction/linkSAFStatusTransaction';
import moment from 'moment';
import OpenDCLOgProcessing from '../openDCLOgProcessing/openDCLOgProcessing';
import Importstatus from '../importstatus/importstatus';
import ButtonContainer from '../buttonContainer';

const TableContainer = (props) => {
  const { tableHeader, action: Action, extraColumnFeilds, extraColumn: ExtraColumn, extraColumnParams, addtionalRow: AddRow, data, verifyParam, isLoading, actionText, count, pageNumber, recordCount, highlight, fetchList,tableDescription, setSelectedRows, selectAllRow, groupBy, tableHeading, addButton } = props;
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState([]);


  const [pagination, setPagination] = useState({ page: 0, rowsPerPage: 10 });
  const filteredData = data?.map((item, index) => {
    const newObj = {
      'S. No.': (pagination.page * pagination.rowsPerPage) + index + 1,
    };

    verifyParam?.forEach((key, i) => {
      newObj[tableHeader[i]] = item[key] || '';
    });

    return newObj;
  });

  useEffect(() => {
    if (groupBy) {
      const groups = {};
      data.forEach(item => {
        const date = moment(item[groupBy]);

        let label = date.format("DD MMM YYYY");

        if (date.isSame(moment(), 'day')) {
          label = "Today";
        } else if (date.isSame(moment().subtract(1, 'day'), 'day')) {
          label = "Yesterday";
        }

        if (!groups[label]) {
          groups[label] = [];
        }

        groups[label].push(item);
      });
      setExpanded(Object.keys(groups))
    }
  }, [data])


  // const groupDataByDate = (data, key) => {
  //   const groups = {};

  //   data.forEach(item => {
  //     const date = moment(item[key]);

  //     let label = date.format("DD MMM YYYY");

  //     if (date.isSame(moment(), 'day')) {
  //       label = "Today";
  //     } else if (date.isSame(moment().subtract(1, 'day'), 'day')) {
  //       label = "Yesterday";
  //     }

  //     if (!groups[label]) {
  //       groups[label] = [];
  //     }

  //     groups[label].push(item);
  //   });

  //   return groups;
  // };


  const groupDataByDate = (data, key) => {
    const groups = {};

    // 🔹 Step 1: sort latest first
    const sortedData = [...data].sort((a, b) => {
      return moment(b[key]).valueOf() - moment(a[key]).valueOf();
    });

    // 🔹 Step 2: grouping
    sortedData.forEach(item => {
      const date = moment(item[key]);

      let label = date.format("DD MMM YYYY");

      if (date.isSame(moment(), 'day')) {
        label = "Today";
      } else if (date.isSame(moment().subtract(1, 'day'), 'day')) {
        label = "Yesterday";
      }

      if (!groups[label]) {
        groups[label] = [];
      }

      groups[label].push(item);
    });

    return groups;
  };

  let globalIndex = pagination.page * pagination.rowsPerPage;

  const handleToggle = (group) => {
    console.log(expanded)
    setExpanded(prev =>
      prev?.includes(group) && prev.length > 0
        ? prev.filter(item => item !== group) // close
        : [...prev, group] // open
    );
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0px' }}>
        <Box>
          <Typography variant="h4" >{tableHeading}</Typography>
          <Typography variant="body2" >{`${data.length == 0 ? 0 : pagination.page === 0
            ? data.length
            : (pagination.page * pagination.rowsPerPage) + data.length} of ${count} record . ${tableDescription||''}`}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <ButtonContainer {...(!addButton ? { isSingle: true } : {})}>
            <Button size="medium" variant="outlined" color="secondary" sx={{ margin: '0px 0px 10px', background: '#fff' }} onClick={() => downloadExcel(filteredData)}>Export CSV</Button>
            {addButton}
          </ButtonContainer>
        </Box>
      </Box >
      <Box sx={{ flex: 1, overflowX: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.12)', background: 'rgb(255, 255, 255)' }}>
        <Box className='mainTableContainer'>

          <Table size="small">
            {groupBy ? <Box className='tableHeader' sx={{ display: 'flex', padding: '10px 0px' }}>
              {/* <TableRow  > */}
              <Box align='center' className='tableCell' sx={{ width: '50px', }}>S.NO</Box>
              {
                tableHeader.map((e, i) => (
                  <Box key={i} align='center' className='tableCell' sx={{ width: '200px' }}>{e == 'Selected' ?
                    <SelectedHeader selectAllRow={selectAllRow} />
                    : e}</Box>
                ))
              }
              {
                extraColumnFeilds && extraColumnFeilds.map((e, i) => (
                  <Box align='center' className='tableCell' sx={{ width: '200px' }}>{e}</Box>
                ))
              }
              {
                Action && <Box align='center' className='tableCell' sx={{ width: 1, whiteSpace:'nowrap',px:1}}>
                  {actionText ? actionText : "Action"}
                </Box>
              }
              {/* </TableRow> */}
            </Box> :

              <TableHead className='tableHeader' sx={{ background: theme.palette.lightBaseColor }}>
                <TableRow  >
                  <TableCell align='center' className='tableCell' >S.NO</TableCell>
                  {
                    tableHeader.map((e, i) => (
                      <TableCell key={i} align='center' className='tableCell' sx={{ minWidth: '100px' }}>{e == 'Selected' ?
                        <SelectedHeader selectAllRow={selectAllRow} />
                        : e}</TableCell>
                    ))
                  }
                  {
                    extraColumnFeilds && extraColumnFeilds.map((e, i) => (
                      <TableCell align='center' className='tableCell' sx={{ minWidth: '200px' }}>{e}</TableCell>
                    ))
                  }
                  {
                    Action && <TableCell align='center' className='tableCell' sx={{ minWidth: '100px' }}>
                      {actionText ? actionText : "Action"}
                    </TableCell>
                  }
                </TableRow>
              </TableHead>
            }

            {verifyParam && <TableBody>
              {AddRow && <AddRow />}
              {groupBy ? (
                Object.entries(groupDataByDate(data, groupBy)).map(([group, items]) => (
                  <React.Fragment key={group}>

                    {/* Group Header Row */}
                    <Box onClick={() => handleToggle(group)}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '99%', background: ' #faf9f7', alignItems: 'center', padding: '0px 10px', margin: '10px 0px', borderBottom: '1px solid #e0e0e0', }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'left', color: '#000 !important', }}>
                          {group}
                        </Typography>
                        {
                          expanded?.includes(group) ? <MdOutlineExpandLess size={25} color={'#000'} />
                            : <MdExpandMore size={25} color={'#000'} />}
                      </Box>
                    </Box>
                    <Box sx={{ padding: 0, }}>
                      <Collapse
                        in={expanded?.includes(group)}
                        timeout="auto"
                        unmountOnExit
                      >
                        {items.map((item, index) => {
                          globalIndex += 1;
                          return (

                            <Box
                              key={globalIndex}
                              sx={{
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer",
                                "&:hover": {
                                  boxShadow: `0px 2px 12px ${theme.palette.shadowColor}`,
                                },
                                display: 'flex',
                                borderBottom: '1px solid #e0e0e0',
                                alignItems: 'center'
                              }}
                            >
                              <Box align="center" sx={{ width: '50px' }}>
                                <Typography variant='body1' sx={{ color: '#6f6e6e' }}> {globalIndex}</Typography>
                              </Box>

                              {verifyParam?.map((v, i) => (
                                <Box align="center" key={i} sx={{ width: '200px' }}>
                                  {v == 'respcodeValue' ? <ResponseCode value={item[v]} /> :
                                    v == 'selectedValue' ? <SelectedRows value={item} setSelectedRows={setSelectedRows} /> :
                                      v == 'riskvalue' ? <RiskValue value={item[v]} /> :
                                        v == 'safstatusValue' ? <SAFStatus value={item[v]} /> :
                                          v == 'naturevalue' || v == 'entryValue' ? <NatureValue value={item[v]} /> :
                                            v == 'processingstatus' || v == 'connectionstatus' ? <ProcessingStatus value={item[v]} /> :
                                              v == 'openDCProcessingstatus' ? <OpenDCLOgProcessing value={item[v]} /> :
                                                v == 'statusValue' || v == 'status' ? <Status value={item[v]} /> :
                                                  v == 'statusOnboardingValue' ? <OnboardingStatus value={item[v]} /> :
                                                    v == 'merchanttypevalue' ? <MerchantType value={item[v]} /> :
                                                      v == 'safstatus' ? <LinkSAFStatus value={item[v]} /> :
                                                        v == 'safstatusTransaction' ? <LinkSAFStatusTransaction value={item[v]} /> :
                                                          v == 'pepflagValue' ? <PepFlag value={item[v]} /> :
                                                            v == 'logo' ? <Logo value={item[v]} /> :
                                                              v == 'historicComments' ? <HistoricComment value={item[v]} /> :
                                                                <>
                                                                  {
                                                                    item[v] == 'Yes' || (v == 'appcoolenableValue' && item['appcoolenableValue'] == 'True') || (v == 'isBioVerifiedStatuscrm' && item['isBioVerifiedStatuscrm'] == 'True') || (v == 'isBioVerifiedStatus' && item['isBioVerifiedStatus'] == 'True') || (v == 'ispartnervalue' && item['ispartnervalue'] == 'True') || (v == 'issignatoryvalue' && item['issignatoryvalue'] == 'True') || (v == 'ismanualadjusted' && item['ismanualadjusted'] == 1) ?

                                                                      <MdOutlineVerifiedUser size={30} color='rgb(19, 222, 185)' /> :
                                                                      item[v] == 'No' || (v == 'appcoolenableValue' && item['appcoolenableValue'] == 'False') || (v == 'isBioVerifiedStatuscrm' && item['isBioVerifiedStatuscrm'] == 'False') || (v == 'isBioVerifiedStatus' && item['isBioVerifiedStatus'] == 'False') || (v == 'ispartnervalue' && item['ispartnervalue'] == 'False') || (v == 'issignatoryvalue' && item['issignatoryvalue'] == 'False') || (v == 'ismanualadjusted' && item['ismanualadjusted'] == 0) ?
                                                                        <IoCloseCircleOutline size={30} color='red' /> :
                                                                        v != 'aptextvalue' ? <Tooltip title={item[v]} >
                                                                          <Typography variant='body1' sx={{
                                                                            background: highlight?.find(val => val.value == item[v])?.color,
                                                                            color: highlight?.find(val => val.value == item[v])?.textColor,
                                                                            color: item?.issensitivelogging == 1 ? '#f14f4f' : '#6f6e6e',
                                                                            display: '-webkit-box',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            WebkitLineClamp: 2,
                                                                            WebkitBoxOrient: 'vertical',
                                                                            whiteSpace: 'normal',
                                                                          }}>{item[v]}</Typography>
                                                                        </Tooltip>
                                                                          : <Typography variant='body1' sx={{
                                                                            background: highlight?.find(val => val.value == item[v])?.color,
                                                                            color: highlight?.find(val => val.value == item[v])?.textColor,
                                                                            color: item?.issensitivelogging == 1 ? '#f14f4f' : '#6f6e6e',
                                                                            display: '-webkit-box',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            WebkitLineClamp: 2,
                                                                            WebkitBoxOrient: 'vertical',
                                                                            whiteSpace: 'normal',
                                                                          }}>{item[v]}</Typography>
                                                                  }
                                                                </>}
                                </Box>
                              ))}
                              {
                                extraColumnParams &&
                                extraColumnParams.map((v, index) => (
                                  <Box align="center" sx={{ whiteSpace: 'nowrap', width: '200px' }}>
                                    {ExtraColumn(extraColumnParams.length == 1 ? item : item[v])}
                                  </Box>
                                ))
                              }
                              {
                                Action && <Box align="center" sx={{ whiteSpace: 'nowrap', width: 1, px: 1 }}>
                                  <Action id={item} fetchList={fetchList} />
                                </Box>
                              }
                            </Box>
                          )
                        })}
                      </Collapse>
                    </Box>
                  </React.Fragment>
                ))
              ) : (
                data?.map((item, index) => (
                  // <TableRow key={index}>
                  <TableRow sx={{
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer", // Makes it feel interactive like Gmail
                    "&:hover": {
                      boxShadow: `0px 2px 12px ${theme.palette.shadowColor} `,
                      // transform: "scale(1.02)",
                    },
                  }} >
                    <TableCell align="center">
                      <Typography variant='body1' sx={{ color: '#6f6e6e', }}>
                        {(pagination.page * pagination.rowsPerPage) + index + 1}
                      </Typography>
                    </TableCell>
                    {
                      verifyParam?.map((v, i) => (
                        <TableCell align="center">
                          {v == 'respcodeValue' ? <ResponseCode value={item[v]} /> :
                            v == 'selectedValue' ? <SelectedRows value={item} setSelectedRows={setSelectedRows} /> :
                              v == 'riskvalue' ? <RiskValue value={item[v]} /> :
                                v == 'safstatusValue' ? <SAFStatus value={item[v]} /> :
                                  v == 'importstatusValue' ? <Importstatus value={item[v]} /> :
                                    v == 'naturevalue' || v == 'entryValue' ? <NatureValue value={item[v]} /> :
                                      v == 'processingstatus' || v == 'connectionstatus' ? <ProcessingStatus value={item[v]} /> :
                                        v == 'openDCProcessingstatus' ? <OpenDCLOgProcessing value={item[v]} /> :
                                          v == 'statusValue' || v == 'status' ? <Status value={item[v]} /> :
                                            v == 'statusOnboardingValue' || v == 'status' ? <OnboardingStatus value={item[v]} /> :
                                              v == 'merchanttypevalue' ? <MerchantType value={item[v]} /> :
                                                v == 'safstatus' ? <LinkSAFStatus value={item[v]} /> :
                                                  v == 'safstatusTransaction' ? <LinkSAFStatusTransaction value={item[v]} /> :
                                                    v == 'pepflagValue' ? <PepFlag value={item[v]} /> :
                                                      v == 'logo' ? <Logo value={item[v]} /> :
                                                        v == 'historicComments' ? <HistoricComment value={item[v]} /> :
                                                          <>
                                                            {
                                                              item[v] == 'Yes' || (v == 'appcoolenableValue' && item['appcoolenableValue'] == 'True') || (v == 'isBioVerifiedStatuscrm' && item['isBioVerifiedStatuscrm'] == 'True') || (v == 'isBioVerifiedStatus' && item['isBioVerifiedStatus'] == 'True') || (v == 'ispartnervalue' && item['ispartnervalue'] == 'True') || (v == 'issignatoryvalue' && item['issignatoryvalue'] == 'True') || (v == 'ismanualadjusted' && item['ismanualadjusted'] == 1) || (v == 'globalmdr' && item['globalmdr'] == 1) || (v == 'ismainbranch' && item['ismainbranch'] == 1) || (v == 'applytaxontranamountflag' && item['applytaxontranamountflag'] == 'Yes') || (v == 'applytaxonmdrflag' && item['applytaxonmdrflag'] == 'Yes') || (v == 'israastsqrpayallow' && item['israastsqrpayallow'] == 1) || (v == 'israastenabledValue' && item['israastenabledValue'] == 1) ?
                                                                // <FcCheckmark size={30} /> :
                                                                <MdOutlineVerifiedUser size={30} color='rgb(19, 222, 185)' /> :
                                                                item[v] == 'No' || (v == 'appcoolenableValue' && item['appcoolenableValue'] == 'False') || (v == 'isBioVerifiedStatuscrm' && item['isBioVerifiedStatuscrm'] == 'False') || (v == 'isBioVerifiedStatus' && item['isBioVerifiedStatus'] == 'False') || (v == 'ispartnervalue' && item['ispartnervalue'] == 'False') || (v == 'issignatoryvalue' && item['issignatoryvalue'] == 'False') || (v == 'ismanualadjusted' && item['ismanualadjusted'] == 0) || (v == 'globalmdr' && item['globalmdr'] == 0) || (v == 'ismainbranch' && item['ismainbranch'] == 0) || (v == 'applytaxontranamountflag' && item['applytaxontranamountflag'] == 'No') || (v == 'applytaxonmdrflag' && item['applytaxonmdrflag'] == 'No') || (v == 'israastsqrpayallow' && item['israastsqrpayallow'] == 0) || (v == 'israastenabledValue' && item['israastenabledValue'] == 0) ?
                                                                  <IoCloseCircleOutline size={30} color='red' /> :
                                                                  v != 'aptextvalue' ? <Tooltip title={item[v]} >
                                                                    <Typography variant='body1' sx={{
                                                                      background: highlight?.find(val => val.value == item[v])?.color,
                                                                      color: highlight?.find(val => val.value == item[v])?.textColor,
                                                                      color: item?.issensitivelogging == 1 ? '#f14f4f' : '#6f6e6e',
                                                                      display: '-webkit-box',
                                                                      overflow: 'hidden',
                                                                      textOverflow: 'ellipsis',
                                                                      WebkitLineClamp: 2,
                                                                      WebkitBoxOrient: 'vertical',
                                                                      whiteSpace: 'normal',
                                                                    }}>{item[v]}</Typography>
                                                                  </Tooltip>
                                                                    : <Typography variant='body1' sx={{
                                                                      background: highlight?.find(val => val.value == item[v])?.color,
                                                                      color: highlight?.find(val => val.value == item[v])?.textColor,
                                                                      color: item?.issensitivelogging == 1 ? '#f14f4f' : '#6f6e6e',
                                                                      display: '-webkit-box',
                                                                      overflow: 'hidden',
                                                                      textOverflow: 'ellipsis',
                                                                      WebkitLineClamp: 2,
                                                                      WebkitBoxOrient: 'vertical',
                                                                      whiteSpace: 'normal',
                                                                    }}>{item[v]}</Typography>
                                                            }
                                                          </>}
                        </TableCell>
                      )
                      )
                    }
                    {
                      extraColumnParams &&
                      extraColumnParams.map((v, index) => (
                        <TableCell align="center" sx={{ whiteSpace: 'nowrap' }}>
                          {ExtraColumn(extraColumnParams.length == 1 ? item : item[v])}
                        </TableCell>
                      ))
                    }
                    {
                      Action && <TableCell align="center" sx={{ whiteSpace: 'nowrap', minWidth: '100px' }}>
                        <Action id={item} fetchList={fetchList} />
                      </TableCell>
                    }
                  </TableRow>
                  // </TableRow>
                ))
              )}
            </TableBody>}

          </Table>
          {
            isLoading &&
            <Box className='tableLoadingContainer'>
              <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
            </Box>
          }
        </Box>

      </Box>
      {
        count > 0 &&
        <Grid container spacing={0} sx={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.12)', borderTop: '0px', background: 'rgb(255, 255, 255)' }}>
          <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Tooltip title={'Export'}>
              <IconButton onClick={() => downloadExcel(filteredData)} sx={{ width: '100px', margin: '0px auto' }}>
                <img src={excelExport} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                <Typography variant='body1' sx={{ marginLeft: '10px' }}>Export</Typography>
              </IconButton>
            </Tooltip> */}
          </Grid>
          <Grid item xs={11} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <TablePaginationComp count={count} pageNumber={pageNumber} recordCount={recordCount} fetchList={fetchList} onPaginationChange={setPagination} />
          </Grid>
        </Grid>
      }
    </>
  );
}

export default TableContainer;