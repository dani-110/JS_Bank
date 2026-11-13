import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import { useContext, useEffect } from 'react';
import { ThemeSelectorContext } from './store/context/themeSelectore';
import generateTheme from './layouts/theme';
import { ThemeProvider } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from './store/reducers/auth-slice';
import { actstatusfilter, applanguagefilter, channelfilter, cityfilter, configfilter, countryfilter, requestfilter, currencyfilter, departmentfilter, districtfilter, mccfilter, payrollcompanyfilter, poolactfilter, productfilter, respcodefilter, riskfilter, statefilter, taxfilter, transactionfilter, uirolefilter, uiuserfilter, holdingfilter, employeefilter, businessnaturefilter, merchantindicatorfilter, partnertypefilter, legalentityfilter, relationacqfilter, terminaltypefilter, telecomfilter, branchfilter, terminalfilter, merchantfilter, notificationtoken, faqcategory, soccategory, faqquestion, socchargetype, merchanttype, getreportlist, getdeclinereason, getkycstagestatus, getkycprocstage, getwalletlevels, getdevicestatus, getconsumerproducts, getcompliancetransactionnames, getsafstatus, getreportformats, getbillertype, getauditeventtypes, getauditmoduletypes, getrequestelements, getservicename, crmMerchantproductfilter, getrequestmanualadjustment, allfilters } from './store/actions/filter';
import Notification from './components/Notification';
import './scrollbar.css'
import { logout } from './store/actions/auth';
import moment from 'moment';
import { citylist, statelist } from './store/actions/generalConfig';
import ResponseModal from './components/responseModal/responseModal';

function App() {
  const routing = useRoutes(routes);
  const themeCtxt = useContext(ThemeSelectorContext)

  const { notification, responseNotification } = useSelector((state) => state.ui);
  const { user, isLoggedIn } = useSelector(state => state.auth)
  const { stateFilter } = useSelector(state => state.filter)

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const openAPI = localStorage.getItem('openAPI');
  //   if (openAPI) {
  //     dispatch(saveUserData(JSON.parse(openAPI)));
  //   }
  //   // fetchFilterData()
  // }, [])

  // useEffect(() => {
  //   if (stateFilter.length == 0 && isLoggedIn) {
  //     console.log('render')
  //     fetchFilterData(user?.username)
  //   }
  // }, [stateFilter?.length, isLoggedIn])

  const fetchFilterData = async (user) => {
    const filterObj = { actuser: user?.toLowerCase() };

    // await dispatch(channelfilter(filterObj));
    // await dispatch(configfilter(filterObj));
    // await dispatch(cityfilter(filterObj));
    // await dispatch(statefilter(filterObj));
    // await dispatch(countryfilter(filterObj));
    // await dispatch(requestfilter(filterObj));
    // await dispatch(currencyfilter(filterObj));
    // await dispatch(districtfilter(filterObj));
    // await dispatch(departmentfilter(filterObj));
    // await dispatch(poolactfilter(filterObj));
    // await dispatch(respcodefilter(filterObj));
    // await dispatch(actstatusfilter(filterObj));
    // await dispatch(riskfilter(filterObj));
    // await dispatch(mccfilter(filterObj));
    // await dispatch(applanguagefilter(filterObj));
    // await dispatch(employeefilter(filterObj));
    // await dispatch(businessnaturefilter(filterObj));
    // await dispatch(merchantindicatorfilter(filterObj));
    // await dispatch(partnertypefilter(filterObj));
    // await dispatch(legalentityfilter(filterObj));
    // await dispatch(relationacqfilter(filterObj));
    // await dispatch(telecomfilter(filterObj));
    // await dispatch(notificationtoken(filterObj));
    // await dispatch(faqcategory(filterObj));
    // await dispatch(soccategory(filterObj));
    // await dispatch(merchanttype(filterObj));
    // await dispatch(getdeclinereason(filterObj));
    // await dispatch(getkycstagestatus(filterObj));
    // await dispatch(getkycprocstage(filterObj));
    // await dispatch(getwalletlevels(filterObj));
    // await dispatch(getdevicestatus(filterObj));
    // await dispatch(getcompliancetransactionnames(filterObj));
    // await dispatch(getsafstatus(filterObj));
    // await dispatch(getreportformats(filterObj));
    // await dispatch(getbillertype(filterObj));
    // await dispatch(getauditeventtypes(filterObj));
    // await dispatch(getauditmoduletypes(filterObj));
    // await dispatch(getrequestelements(filterObj));
    // await dispatch(getservicename(filterObj));
    // await dispatch(getrequestmanualadjustment(filterObj));
    await dispatch(allfilters(filterObj));


    // await dispatch(branchfilter(filterObj));
    // await dispatch(transactionfilter(filterObj));
    // await dispatch(productfilter(filterObj));
    // await dispatch(taxfilter(filterObj));
    // await dispatch(uirolefilter(filterObj));
    // await dispatch(uiuserfilter(filterObj));
    // await dispatch(payrollcompanyfilter(filterObj));
    // await dispatch(holdingfilter(filterObj));
    // await dispatch(terminaltypefilter(filterObj));
    // await dispatch(terminalfilter(filterObj));
    // await dispatch(merchantfilter(filterObj));
    // await dispatch(faqquestion(filterObj));
    // await dispatch(socchargetype(filterObj));
    // await dispatch(getreportlist(filterObj));
    // await dispatch(getconsumerproducts(filterObj));
    // await dispatch(crmMerchantproductfilter(filterObj));
    // await dispatch(getbanks(filterObj));
  };


  useEffect(() => {
    const handleFocus = () => {

      const openAPILastActive = localStorage.getItem('openAPILastActive');
      if (!openAPILastActive) {
        // If there is no previous openAPILastActive, set it to now
        localStorage.setItem('openAPILastActive', JSON.stringify(new Date().toISOString()));
        return;
      }

      if (new Date().toISOString() < moment(JSON.parse(openAPILastActive)).add(15, 'minutes').toISOString()) {
        localStorage.setItem('openAPILastActive', JSON.stringify(new Date().toISOString()));
      } else {
        if (isLoggedIn) {
          let obj = {
            "username": user?.username,
            "audittrace": 'Qubits|Admin Panel|Logout'
          };
          dispatch(logout(obj))
        }
      }
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [user, isLoggedIn, dispatch]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'F5') {
        event.preventDefault(); // Prevent the page from refreshing
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const wasHidden = sessionStorage.getItem('wasHidden');
    if (wasHidden) {
    } else {
      if (!wasHidden) {
        let obj = {
          "username": user?.username,
          "audittrace": 'Qubits|Admin Panel|Logout'
        };
        dispatch(logout(obj)).then((res) => {
          sessionStorage.setItem('wasHidden', false)
          // localStorage.removeItem('lastRoute')
        });
      }
    }

  }, [isLoggedIn])


  useEffect(() => {
    const disableRefresh = (event) => {
      if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        event.preventDefault();
        // return (event.returnValue = '')
      }
    };

    window.addEventListener('keydown', disableRefresh);

    return () => {
      window.removeEventListener('keydown', disableRefresh);
    };
  }, []);



  useEffect(() => {
    toggleDarkMode(themeCtxt.themeSelector)
  }, [themeCtxt])


  function toggleDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }

  const theme = localStorage.getItem("openAPITheme")
  const themeSelector = JSON.parse(theme)

  const lightTheme = generateTheme("light");
  const darkTheme = generateTheme("dark");


  return (
    <ThemeProvider theme={themeSelector ? darkTheme : lightTheme}>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {responseNotification && (
        <ResponseModal
          status={responseNotification.status}
          title={responseNotification.title}
          message={responseNotification.message}
          showCancel={responseNotification.showCancel}
          cancelText={responseNotification.cancelText}
          proceedText={responseNotification.proceedText}
          onProceed={responseNotification.onProceed}
          onCancel={responseNotification.onCancel}
        />
      )}
      {routing}
      {/* <Reporting /> */}
    </ThemeProvider>
  );
}

export default App;
