import userManagement from '../../assests/user_management.png'
import transactionMonitoring from '../../assests/transaction_monitoring.png'
import channel from '../../assests/channel.png'
import users from '../../assests/users.png'
import role from '../../assests/role.png'
import checker from '../../assests/checker.png'
import linkIBFTTransactions from '../../assests/1link IBFT Transactions.png'
import BillPayment from '../../assests/BillPayment.png'
import IBFT from '../../assests/IBFT.png'


export const navData = [
  {
    label: "Network Monitoring",
    icon: 'PiNetworkLight',
    url: "networkMonitoring",
    subLable: [
      {
        label: 'Channel - Switch',
        icon: channel,
        url: "networkMonitoring/channelSwitch"
      },
    ],
  },
  {
    label: "Transaction Monitoring",
    icon: "LuChartColumn",
    url: "transactionMonitoring",
    subMenu: [

      {
        label: "1Link",
        icon: linkIBFTTransactions,
        url: "transactionMonitoring/1Link",
        subLable: [
          {
            label: 'IBFT',
            icon: IBFT,
            url: "transactionMonitoring/1Link/IBFT"
          },
          {
            label: 'Bill Payment',
            icon: BillPayment,
            url: "transactionMonitoring/1Link/billPayment"
          },
        ]
      },

    ],
    subLable: [
    ]
  },
  {
    label: "User Management",
    icon: "LuUsers",
    url: "userManagement",
    subLable: [
      {
        label: 'Users',
        icon: users,
        url: "userManagement/users"
      },
      {
        label: 'Roles',
        icon: role,
        url: "userManagement/roles"
      },
      {
        label: 'Permissions',
        icon: checker,
        url: "userManagement/permissions"
      }
    ],
  },
];
export const nav = {
  presentation: navData[0],
};
