import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/ui-slice";
import productsSlice from "./reducers/products-slice";
import authSlice from "./reducers/auth-slice";
import taxSlice from "./reducers/tax-slice";
import filtersSlice from "./reducers/filters-slice";
import transactionFeeSlice from "./reducers/transactionFee-slice";
import merchantsSlice from "./reducers/merchants-slice";
import generalConfigSlice from "./reducers/generalConfig-slice";
import consumersSlice from "./reducers/consumers-slice";
import institutionSlice from "./reducers/institution-slice";
import merchantBranchSlice from "./reducers/merchantBranch-slice";
import merchantManagementSlice from "./reducers/merchantManagement-slice";
import merchantTerminalSlice from "./reducers/merchantTerminal-slice";
import usersSlice from "./reducers/users-slice";
import roleSlice from "./reducers/role-slice";
import monitoringSlice from "./reducers/monitoring-slice";
import financeSlice from "./reducers/finance-slice";
import generalLedgerSlice from "./reducers/generalLedger-slice";
import digitalIdentitySlice from "./reducers/digitalIdentity-slice";
import merchantWalletsSlice from "./reducers/merchantWallets-slice";
import notificationSlice from "./reducers/notification-slice";
import systemParameterSlice from "./reducers/systemParameter-slice";
import consumersTaggedDeviceSlice from "./reducers/consumersTaggedDevice-slice";
import merchantsTaggedDeviceSlice from "./reducers/merchantsTaggedDevice-slice";
import settlementLogSlice from "./reducers/settlementLog-slice";
import onboardingScrutinySlice from "./reducers/onboardingScrutiny-slice";
import institutionGroupSlice from "./reducers/institutionGroup-slice";
import reportingSlice from "./reducers/reporting-slice";
import channelConfigSlice from "./reducers/channelConfig-slice";
import fraudMonitoringSlice from "./reducers/fraudMonitoring-slice";
import securitySlice from "./reducers/security-slice";
import paynestSlice from "./reducers/paynest-slice";
import settelmentSlice from "./reducers/settelment-slice";
import externalServiceMonitorSlice from "./reducers/externalServiceMonitor-slice";
import merchantMaintenanceSlice from "./reducers/merchantMaintenance-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    product: productsSlice,
    tax: taxSlice,
    filter: filtersSlice,
    transactionFee: transactionFeeSlice,
    consumer: consumersSlice,
    merchant: merchantsSlice,
    generalConfig: generalConfigSlice,
    holdings: institutionSlice,
    merchantBranch: merchantBranchSlice,
    merchantManagement: merchantManagementSlice,
    merchantTerminal: merchantTerminalSlice,
    users: usersSlice,
    roles: roleSlice,
    monitoring: monitoringSlice,
    finance: financeSlice,
    generalLedger: generalLedgerSlice,
    digitalIdentity: digitalIdentitySlice,
    merchantWallet: merchantWalletsSlice,
    notification: notificationSlice,
    systemParameter: systemParameterSlice,
    consumersTaggedDevice: consumersTaggedDeviceSlice,
    merchantsTaggedDevice: merchantsTaggedDeviceSlice,
    settlementLog: settlementLogSlice,
    onboardingScrutiny: onboardingScrutinySlice,
    institutionGroup: institutionGroupSlice,
    reporting: reportingSlice,
    channelConfig: channelConfigSlice,
    fraudMonitoring: fraudMonitoringSlice,
    security: securitySlice,
    paynest: paynestSlice,
    settelment:settelmentSlice,
    externalServiceMonitor:externalServiceMonitorSlice,
    merchantMaintenance:merchantMaintenanceSlice
  },
});

export default store;
