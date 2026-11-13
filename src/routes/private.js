import React, { Navigate } from "react-router-dom";
import Users from "../screens/users/users";
import Roles from "../screens/roles/roles";
import UsersUpdateForm from "../screens/users/usersUpdateForm";
import RolesUpdateForm from "../screens/roles/rolesUpdateForm";
import UserView from "../screens/users/userView";
import Permissions from "../screens/permissions/permission";
import IntegrationPlatform from "../screens/integrationPlatform/integrationPlatform";
import IntegrationPlatformView from "../screens/integrationPlatform/integrationPlatformView";
import SAFTransactions from "../screens/SAFTransactions/SAFTransactions";
import SAFTransactionsView from "../screens/SAFTransactions/SAFTransactionsView";
import Dashboard from "../screens/dashboard/dashboard";
import BillPayment from "../screens/billPayment/billPayment";
import PermissionRedirect from "./permissionRedirect";

export const privateRoutes = [
    { index: true, element: <Navigate to="/dashboard" /> },
    {
        path: 'dashboard',
        element: <Dashboard />
    },
    {
        path: "networkMonitoring",
        children: [
            { index: true, element: <PermissionRedirect pathArray={['networkMonitoring']} /> },
            {
                path: 'channelSwitch',
                children: [
                    { index: true, element: <IntegrationPlatform /> },
                    {
                        path: 'view',
                        element: <IntegrationPlatformView />
                    }
                ]
            },
        ]
    },
    {
        path: 'transactionMonitoring',
        children: [
            { index: true, element: <PermissionRedirect pathArray={['transactionMonitoring']} /> },
            {
                path: '1Link',
                children: [
                    { index: true, element: <PermissionRedirect pathArray={['transactionMonitoring', '1Link']} /> },
                    {
                        path: 'IBFT',
                        children: [
                            { index: true, element: <SAFTransactions /> },
                            {
                                path: 'view',
                                element: <SAFTransactionsView />
                            }
                        ]
                    },
                    {
                        path: 'billPayment',
                        element: <BillPayment />
                    },
                ]
            },
        ]
    },
    {
        path: "userManagement",
        children: [
            { index: true, element: <PermissionRedirect pathArray={['userManagement']} /> },
            {
                path: 'users',
                children: [
                    { index: true, element: <Users /> },
                    {
                        path: 'create',
                        element: <UsersUpdateForm />
                    },
                    {
                        path: 'edit',
                        element: <UsersUpdateForm />
                    },
                    {
                        path: 'view',
                        element: <UserView />
                    }
                ]
            },
            {
                path: 'roles',
                children: [
                    { index: true, element: <Roles /> },
                    {
                        path: 'create',
                        element: <RolesUpdateForm />
                    },
                    {
                        path: 'edit',
                        element: <RolesUpdateForm />
                    }
                ]
            },
            {
                path: 'permissions',
                children: [
                    { index: true, element: <Permissions /> },
                ]
            }
        ]
    },
];
