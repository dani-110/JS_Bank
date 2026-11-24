import React, { useContext, useEffect, useState } from "react";

import { navData as nav } from "../../layouts/sidebar/_profileNav";
import Card from "../../components/card/Card";
import PermissionExpandable from "./permissionExpand";
import { Box, Grid, Checkbox, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { permission } from "../../utils/permissions";
import { useTheme } from "@emotion/react";
import PermissionChildExpandable from "./permissionChildExpand";
import {
  getrolepermissions,
  setrolepermissions,
} from "../../store/actions/roles";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import ButtonContainer from "../../components/buttonContainer";

const Permissions = (props) => {
  const { role, onSelectionChange, selectedPermission, search } = props;
  console.log(role);
  const theme = useTheme();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [submenuExpanded, setSubMenuExpanded] = React.useState("");
  const [expandAllActive, setExpandAllActive] = React.useState(false);
  const breadCrumCtxt = useContext(BreadCrumSelectorContext);

  const [permissionObj, setPermissionObj] = useState(permission);

  const normalizedSearch = (search || "").trim().toLowerCase();

  const filterPermissionNodes = (nodes) =>
    nodes.reduce((result, node) => {
      const filteredChildren = filterPermissionNodes(node.Children || []);
      const isSelected = node.ISENABLE === 1;
      const nameMatches =
        !normalizedSearch ||
        node.PAGEPERMISSION?.toLowerCase().includes(normalizedSearch);

      const matchesSearch = nameMatches || filteredChildren.length > 0;
      const matchesSelection =
        !selectedPermission || isSelected || filteredChildren.length > 0;

      if (matchesSearch && matchesSelection) {
        result.push({
          ...node,
          ...(node.Children ? { Children: filteredChildren } : {}),
        });
      }

      return result;
    }, []);

  const visiblePermissions = filterPermissionNodes(permissionObj);

  useEffect(() => {
    const selected = [];

    const visit = (
      nodes,
      module = "",
      parentModule = "",
      depth = 0,
      path = [],
    ) => {
      nodes.forEach((node) => {
        const currentModule = depth === 0 ? node.PAGEPERMISSION : module;
        const children = node.Children || [];

        if (children.length === 0 && node.ISENABLE === 1 && node.PERID !== 0) {
          selected.push({
            module: currentModule,
            submodule: depth > 1 ? parentModule : currentModule,
            label: node.PAGEPERMISSION,
            permissionId: node.PERID,
            remove: () =>
              onChange(
                node,
                { target: { checked: false } },
                [...path, node.PAGEPERMISSION].join("|"),
              ),
          });
        }

        visit(children, currentModule, node.PAGEPERMISSION, depth + 1, [
          ...path,
          node.PAGEPERMISSION,
        ]);
      });
    };

    visit(permissionObj);
    onSelectionChange?.(selected);
  }, [permissionObj, onSelectionChange]);
  const handleExpandAll = () => setExpandAllActive(true);
  const handleCollapseAll = () => {
    setExpandAllActive(false);
    setExpanded(false);
    setSubMenuExpanded("");
  };

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (role?.rid) {
      const obj = {
        roleid: role.rid,
      };
      dispatch(getrolepermissions(obj)).then((res) => {
        if (res?.payload?.responsecode !== 0) {
          console.error("could not update permission", res);
          return;
        }
        if (res.payload.responsecode == 0) {
          console.log(JSON.parse(res.payload.permissions));
          setPermissionObj(JSON.parse(res.payload.permissions));
        }
      });
    }
  }, [dispatch, role?.id]);

  const onChange = (key, val, title) => {
    console.log(title);
    const obj = {
      username: user.username,
      roleid: role.rid,
      permissionid: key.PERID,
      isenable: val.target.checked ? 1 : 0,
      audittrace: breadCrumCtxt.breadCrumSelector.join("|") + `|${title}`,
    };

    console.log(obj);
    dispatch(setrolepermissions(obj)).then((res) => {
      if (res?.payload?.responsecode !== 0) {
        console.error("could not update permission", res);
        return;
      }
      console.log(JSON.parse(res.payload.permissions));
      if (res.payload.responsecode == 0) {
        setPermissionObj(JSON.parse(res.payload.permissions));
      }
    });
  };

  const permissionTree = (navItem, title) => (
    <>
      {navItem.Children ? (
        <PermissionChildExpandable
          title={navItem.PAGEPERMISSION}
          headerToggle={
            <Checkbox
              onChange={(val) =>
                onChange(navItem, val, title + "|" + navItem.PAGEPERMISSION)
              }
              checked={navItem.ISENABLE == 1}
              value={navItem.ISENABLE == 1}
            />
          }
          expandAllActive={expandAllActive}
        >
          {navItem.Children?.map((sub) =>
            permissionTree(sub, title + "|" + navItem.PAGEPERMISSION),
          )}
        </PermissionChildExpandable>
      ) : (
        <Box
          className="toggleContainerBar"
          sx={{ border: `1px solid ${theme.palette.inputBorder}` }}
        >
          <Checkbox
            onChange={(val) =>
              onChange(navItem, val, title + "|" + navItem.PAGEPERMISSION)
            }
            checked={navItem.ISENABLE == 1}
            value={navItem.ISENABLE == 1}
          />
          <Typography variant="body2" sx={{ marginLeft: "10px" }}>
            {navItem?.PAGEPERMISSION}
          </Typography>
        </Box>
      )}
    </>
  );

  const handleExpandClick = (title) => {
    setExpanded((prev) => !prev);
    setSubMenuExpanded((prev) => (prev === title ? "" : title));
  };

  return (
    <Box
      className="permissionTree"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "5px 0px",
      }}
    >
      <Box className="permissionTreeHeader">
        <Typography variant="h3" sx={{ textAlign: "left", margin: "10px" }}>
          {"Permissions:"}
        </Typography>
        <ButtonContainer>
          <Button
            size="medium"
            variant="outlined"
            color="secondary"
            sx={{ background: "#fff" }}
            onClick={handleExpandAll}
          >
            Expand All
          </Button>
          <Button
            size="medium"
            variant="outlined"
            color="secondary"
            sx={{ background: "#fff" }}
            onClick={handleCollapseAll}
          >
            Collapse All
          </Button>
        </ButtonContainer>
      </Box>
      <Grid container spacing={2}>
        {visiblePermissions.map((navItem) => (
          <Grid item xs={12} key={navItem.PERID ?? navItem.PAGEPERMISSION}>
            {navItem.Children ? (
              <PermissionExpandable
                title={navItem.PAGEPERMISSION}
                headerToggle={
                  <Checkbox
                    onChange={(val) =>
                      onChange(navItem, val, navItem.PAGEPERMISSION)
                    }
                    checked={navItem.ISENABLE == 1}
                    value={navItem.ISENABLE == 1}
                  />
                }
                expanded={expanded}
                submenuExpanded={submenuExpanded}
                expandAllActive={expandAllActive}
                handleExpandClick={handleExpandClick}
              >
                {navItem.Children?.map((sub) =>
                  permissionTree(sub, navItem.PAGEPERMISSION),
                )}
              </PermissionExpandable>
            ) : (
              <Box
                className="toggleContainerBar"
                sx={{ border: `1px solid ${theme.palette.inputBorder}` }}
              >
                <Checkbox
                  onChange={(val) =>
                    onChange(navItem, val, navItem.PAGEPERMISSION)
                  }
                  checked={navItem.ISENABLE == 1}
                  value={navItem.ISENABLE == 1}
                />
                <Typography variant="body2">All Permission</Typography>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Permissions;
