import React, { useState, useRef } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import keenuLogo from '../../assests/keenuLogo.png';
import html2pdf from "html2pdf.js";
import { LuGlobe, LuMail, LuSmartphone } from "react-icons/lu";
import './crmDownloadEStatement.scss';
import { useDispatch } from "react-redux";
import { getconsumerstatement } from "../../store/actions/digitalIdentity";
import moment from "moment";
import { formatPrice } from "../../utils/Utils";

const CrmDownloadEStatement = (props) => {
    const { data, dates, handleSubmit, setOpen } = props;
    const pdfRef = useRef();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [statementNatureCustomList, setStatementNatureCustomList] = useState([]);
    const [statementBalanceCustomList, setStatementBalanceCustomList] = useState([]);

    const firstPageItemsCount = 12;
    const subsequentPageItemsCount = 16;

    const firstPageItems = dataList?.slice(0, firstPageItemsCount) || [];
    const remainingItems = dataList?.slice(firstPageItemsCount) || [];

    const subsequentPages = [];
    for (let i = 0; i < remainingItems.length; i += subsequentPageItemsCount) {
        subsequentPages.push(remainingItems.slice(i, i + subsequentPageItemsCount));
    }

    const downloadPDF = async () => {
        setIsLoading(true);
        const obj = {
            "cid": data?.cid,
            "transactiondatefrom": moment(dates?.dateFrom).format('YYYYMMDD'),
            "transactiondateto": moment(dates?.dateTo).format('YYYYMMDD'),
            "audittrace": "CRM|Consumer|Consumer Statement|Generate"
        };

        dispatch(getconsumerstatement(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                const statementItems = res.payload?.statementCustomList || [];
                setDataList(statementItems);
                setStatementNatureCustomList(res.payload?.statementNatureCustomList || [])
                setStatementBalanceCustomList(res.payload?.statementBalanceCustomList || [])

                setTimeout(() => {
                    setIsLoading(false);
                    setOpen(false)

                    if (!pdfRef.current) return;

                    html2pdf().set({
                        margin: 0,
                        filename: `${data?.fullname || 'statement'}_${data?.mobileno || 'report'}.pdf`,
                        image: { type: "jpeg", quality: 0.98 },
                        html2canvas: { scale: 2, backgroundColor: "#ffffff", useCORS: true },
                        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
                        pagebreak: { mode: ['css', 'legacy'] }
                    }).from(pdfRef.current).save();
                }, 1000);
            } else {
                setIsLoading(false);
            }
        }).catch((err) => {
            console.error('Error fetching statement:', err);
            setIsLoading(false);
        });
    };

    const renderHeader = () => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', marginBottom: '10px' }}>
            <Box sx={{ flex: 2 }}>
                <img src={keenuLogo} style={{ width: '38mm', height: 'auto', objectFit: 'contain', display: 'block' }} alt="Logo" />
            </Box>
            <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography variant="h3" sx={{ fontSize: '18px' }}>Account Statement</Typography>
                <Typography variant="h6" sx={{ fontSize: '11px', color: '#555', marginTop: '2px' }}>{`${moment(dates?.dateFrom).format('DD/MM/YYYY')} - ${moment(dates?.dateTo).format('DD/MM/YYYY')}`}</Typography>
            </Box>
        </Box>
    );

    const renderFooter = () => (
        <Box sx={{ width: '100%', borderTop: '1px solid #eee', paddingTop: '8px', marginTop: '20px' }}>
            <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '7.5pt', color: '#555' }}>
                Keenu is the payment brand of Wemsol Private Limited registered in Pakistan (https://www.keenu.pk).<br />
                It is regulated by the State Bank of Pakistan under the Regulations for Electronic Money Institution.
            </Typography>
            <Box sx={{ display: 'flex', marginTop: '4px', justifyContent: 'space-around' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LuSmartphone size='12px' color="rgb(94, 53, 177)" />
                    <Typography sx={{ fontSize: '7.5pt' }}>(021) 111-153-368</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LuGlobe size='12px' color="rgb(94, 53, 177)" />
                    <Typography sx={{ fontSize: '7.5pt' }}>www.keenu.pk</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LuMail size='12px' color="rgb(94, 53, 177)" />
                    <Typography sx={{ fontSize: '7.5pt' }}>help@keenu.pk</Typography>
                </Box>
            </Box>
        </Box>
    );

    const renderTableHeader = () => (
        <Box sx={{ display: 'flex', gap: '10px', padding: '5px 0', alignItems: 'center', borderTop: '1px solid #c4c1c1', borderBottom: '1px solid #c4c1c1' }}>
            <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 'bold', fontSize: '8.5pt', textAlign: 'left' }}>DATE</Typography></Box>
            <Box sx={{ flex: 2 }}><Typography sx={{ fontWeight: 'bold', fontSize: '8.5pt', textAlign: 'left' }}>DESCRIPTION</Typography></Box>
            <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 'bold', fontSize: '8.5pt', textAlign: 'left' }}>AMOUNT</Typography></Box>
            <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 'bold', fontSize: '8.5pt', textAlign: 'left' }}>BALANCE</Typography></Box>
        </Box>
    );


    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleSubmit(downloadPDF)} disabled={isLoading}>
                    {isLoading && <CircularProgress size={20} sx={{ marginRight: 1, color: "#747171" }} />}
                    Download E-Statement</Button>
            </Box>
            <div style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden', zIndex: -9999 }}>
                <Box ref={pdfRef}
                    sx={{
                        background: '#fff',
                        width: '210mm',
                    }}>

                    <Box sx={{
                        width: '210mm',
                        height: '296mm',
                        padding: '10mm 10mm 8mm 10mm',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <Box>
                            {renderHeader()}

                            {/* User Details & Balances */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '9.5pt', textAlign: 'left' }}>{data?.fullname}</Typography>
                                    <Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{data?.emailid}</Typography>
                                    <Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{data?.address}</Typography>
                                </Box>
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px', background: '#f9f9f9', padding: '6px', borderRadius: '4px' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>Account Balance:</Typography>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>{formatPrice(statementBalanceCustomList?.[0]?.closingbalance || '0')}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>-Money Out:</Typography>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>{formatPrice(statementNatureCustomList?.find(val => val?.nature == 1)?.amount || '0')}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>+Money In:</Typography>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>{formatPrice(statementNatureCustomList?.find(val => val?.nature == 2)?.amount || '0')}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>Opening Balance:</Typography>
                                        <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>{formatPrice(statementBalanceCustomList?.[0]?.openingbalance || '0')}</Typography>
                                    </Box>
                                    {/* <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>Account Balance: {formatPrice(statementBalanceCustomList?.[0]?.closingbalance || '0')}</Typography>
                                    <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>-Money Out: {formatPrice(statementNatureCustomList?.find(val => val?.nature == 1)?.amount || '0')}</Typography>
                                    <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>+Money In: {formatPrice(statementNatureCustomList?.find(val => val?.nature == 2)?.amount || '0')}</Typography>
                                    <Typography sx={{ fontSize: '8pt', textAlign: 'left' }}>Opening Balance: {formatPrice(statementBalanceCustomList?.[0]?.openingbalance || '0')}</Typography> */}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '10px' }}>
                                <Typography sx={{ fontSize: '8.5pt', textAlign: 'left', marginTop: '2px' }}>{`Mobile number: ${data?.mobileno}`}</Typography>
                                <Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{`IBAN: ${data?.walletiban}`}</Typography>
                                <Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>Currency: PKR</Typography>
                            </Box>

                            {renderTableHeader()}

                            {firstPageItems.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', gap: '10px', padding: '4px 0', alignItems: 'flex-start', borderBottom: '1px solid #f0f0f0' }}>
                                    <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{item.requestdatetime}</Typography></Box>
                                    <Box sx={{ flex: 2 }}>
                                        <Typography sx={{ fontSize: '8.5pt', textAlign: 'left', whiteSpace: 'pre-line', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                                            {item?.requestdesp || ''}
                                        </Typography>
                                        <Typography sx={{ fontSize: '8.5pt', textAlign: 'left', whiteSpace: 'pre-line', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                                            {item?.subdesp || ''}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: '8.5pt', textAlign: 'left', color: item?.nature == 1 ? '#d32f2f' : '' }}>{`${item?.nature == 1 ? '-' : ''}${item?.transactionamount}`}</Typography></Box>
                                    <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{formatPrice(item?.updatedbalance || '0')}</Typography></Box>
                                </Box>
                            ))}
                        </Box>

                        {renderFooter()}
                    </Box>

                    {subsequentPages.map((pageItems, pageIndex) => {
                        const isLast = pageIndex === subsequentPages.length - 1;
                        return (
                            <Box key={pageIndex} sx={{
                                width: '210mm',
                                height: '296mm',
                                padding: '10mm 10mm 8mm 10mm',
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                pageBreakAfter: isLast ? 'auto' : 'always',
                            }}>
                                <Box>
                                    {renderHeader()}
                                    {renderTableHeader()}

                                    {pageItems.map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', gap: '10px', padding: '4px 0', alignItems: 'flex-start', borderBottom: '1px solid #f0f0f0' }}>
                                            <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{item.requestdatetime}</Typography></Box>
                                            <Box sx={{ flex: 2 }}>
                                                <Typography variant="body1" sx={{ textAlign: 'left', whiteSpace: 'pre-line', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                                                    {item?.requestdesp || ''}
                                                </Typography>
                                                <Typography variant="body2" sx={{ textAlign: 'left', whiteSpace: 'pre-line', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                                                    {item?.subdesp || ''}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: '8.5pt', textAlign: 'left', color: item.nature == 1 ? '#d32f2f' : '' }}>{`${item.nature == 1 ? '-' : ''}${item.transactionamount}`}</Typography></Box>
                                            <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: '8.5pt', textAlign: 'left' }}>{formatPrice(item?.updatedbalance || '0')}</Typography></Box>
                                        </Box>
                                    ))}
                                </Box>

                                {renderFooter()}
                            </Box>
                        );
                    })}

                </Box>
            </div>
        </Box>
    );
};

export default CrmDownloadEStatement;