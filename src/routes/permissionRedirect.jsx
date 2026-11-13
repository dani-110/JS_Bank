// PermissionRedirect.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { navData } from "../layouts/sidebar/_profileNav";

const PermissionRedirect = ({ pathArray }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user?.permissions);
    if (!isLoggedIn) return null;

    const mergePermissions = (menus, permissions) => {
        return menus.map(menu => {
            // find matching permission by label
            const matched = permissions.find(
                p => p.PAGEPERMISSION?.trim().toLowerCase() === menu.label?.trim().toLowerCase()
            );

            // create base merged object
            const merged = {
                ...menu,
                ISENABLE: matched?.ISENABLE ?? 0, // default 0 if not found
            };

            // recursively merge subLable ↔ Children if exist
            if (menu.subLable && matched?.Children) {
                merged.subLable = mergePermissions(menu.subLable, matched.Children);
            }

            return merged;
        });
    };

    const checkPermission = (url) => {
        const regex = /[^a-zA-Z0-9]/g
        const sideMenu = navData.find(l => l.label?.replace(regex, '').toLowerCase() == url[0].toLowerCase())
        const navDataPermission = [...(sideMenu?.subMenu ?? []), ...(sideMenu?.subLable ?? [])]
        let parent = ''
        if (url.length > 0) {
            const a = user?.find(
                p => p.PAGEPERMISSION?.replace(regex, '').toLowerCase() === url[0].toLowerCase()
            )?.Children
            parent = mergePermissions(navDataPermission, a)
        }
        const parentURL = parent && parent?.find(item => item.ISENABLE === 1)?.label

        let child = ''
        if (url.length == 2) {
            child = parent?.find(v => v.label.replace(regex, '')?.toLowerCase() == url[1]?.toLowerCase()).subLable.find(item => item.ISENABLE === 1)?.label.replace(regex, '')
        }

        const formatted = (url) => {
            url = url?.replace(regex, '')
            return url?.charAt(0).toLowerCase() + url?.slice(1)
        }
        return url.length == 1 ? formatted(parentURL) : url.length == 2 ? formatted(child) : ''
    }

    const redirectTo = checkPermission(pathArray);
    return <Navigate to={redirectTo || "/dashboard"} />;
};

export default PermissionRedirect;
