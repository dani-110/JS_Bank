import React, { useContext, useEffect, useState } from "react";
import TabelContainer from "../../components/table/table";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import ModalButton from "../../components/modalButton/modalButton";
import UsersUpdateForm from "./usersUpdateForm";
import ChangePassword from "./changePassword";
import ForceLogout from "../../assests/force_logout.png";
import UserView from "./userView";
import view from "../../assests/view.png";
import edit from "../../assests/edit.png";
import create from "../../assests/create.png";
import password from "../../assests/change_password.png";
import ButtonContainer from "../../components/buttonContainer";
import { useDispatch, useSelector } from "react-redux";
import { filterName } from "../../utils/Utils";
import { forcelogout } from "../../store/actions/users";
import PermissionComp from "../../components/permissionComp/permissionComp";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import ViewModal from "../../components/viewModal/viewModal";
import { AiOutlineKey } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";

const DataGrid = (props) => {
  const { isLoading, fetchList, tableHeading } = props;

  const [dataList, setDataList] = useState([]);
  const [openCreate, setOpenCreate] = React.useState(false);
  const { users, totalcount } = useSelector((state) => state.users);
  const { departmentFilter } = useSelector((state) => state.filter);

  useEffect(() => {
    let arr = [];
    users.forEach((ele) => {
      const obj = { ...ele };
      obj["statusValue"] =
        obj.status === "1" ? "Active" : obj.status === "0" ? "Inactive" : "";
      obj["isloginValue"] =
        obj.islogin === "1" ? "Yes" : obj.islogin === "0" ? "No" : "";
      obj["departmentidValue"] = filterName(departmentFilter, ele.departmentid);
      arr.push(obj);
    });
    setDataList(arr);
  }, [users]);

  const tableHeader = [
    "Username",
    "First Name",
    "Last Name",
    "Mobile No",
    "Email",
    "Created On",
    "Status",
    "Login Status",
    "Department",
  ];
  const verifyParam = [
    "username",
    "firstname",
    "lastname",
    "mobileno",
    "email",
    "creation",
    "statusValue",
    "isloginValue",
    "departmentidValue",
  ];

  return (
    <>
      {/* <TabelContainer tableHeader={tableHeader} action={TableAction} update /> */}
      <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        update
        isLoading={isLoading}
        count={totalcount}
        fetchList={fetchList}
        tableHeading={tableHeading}
        tableDescription="Users record"
        addButton={
          <PermissionComp list={["User Management", "Users", "Create"]}>
            <ViewModal
              open={openCreate}
              setOpen={setOpenCreate}
              tooltip={"Create"}
              heading={"USER MANAGEMENT"}
            >
              <UsersUpdateForm
                open={openCreate}
                setOpen={setOpenCreate}
                type={"Create"}
              />
            </ViewModal>
          </PermissionComp>
        }
      />
    </>
  );
};
export default DataGrid;

const TableAction = (data) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const breadCrumCtxt = useContext(BreadCrumSelectorContext);

  const [openEdit, setOpenEdit] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
  const [openLogout, setOpenLogout] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const item = data.id;

  const { user } = useSelector((state) => state.auth);
  const permissions = user?.permissions;

  const forceLogoutUser = () => {
    console.log(item);
    setIsLoading(true);
    const obj = {
      username: item.username,
      audittrace: breadCrumCtxt.breadCrumSelector.join("|") + "|Force Logout",
    };
    dispatch(forcelogout(obj)).then((res) => {
      if (res.payload) {
        console.log(res.payload);
        setIsLoading(false);
      }
    });
  };
  return (
    <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      <PermissionComp list={["User Management", "Users", "Edit"]}>
        <ViewModal
          open={openEdit}
          setOpen={setOpenEdit}
          tooltip={"Edit User"}
          heading={"USER MANAGEMENT"}
          type={"Edit"}
        >
          <UsersUpdateForm data={item} setOpen={setOpenEdit} type={"Edit"} />
        </ViewModal>
      </PermissionComp>

      <PermissionComp list={["User Management", "Users", "View"]}>
        <ViewModal
          open={openView}
          setOpen={setOpenView}
          tooltip={"View User"}
          heading={"USER MANAGEMENT"}
          type={"View"}
        >
          <UserView data={item} />
        </ViewModal>
      </PermissionComp>

      <PermissionComp list={["User Management", "Users", "Change Password"]}>
        <ViewModal
          open={openPassword}
          setOpen={setOpenPassword}
          tooltip={"Change Password"}
          heading={"USER MANAGEMENT"}
          img={<AiOutlineKey color={theme.palette.darkBaseColor} size={20} />}
        >
          <ChangePassword data={item} setOpen={setOpenPassword} />
        </ViewModal>
      </PermissionComp>

      <PermissionComp list={["User Management", "Users", "Force Logout"]}>
        <ModalButton
          open={openLogout}
          setOpen={setOpenLogout}
          heading={"SESSION ACTION"}
          tooltip={"Force Logout"}
          img={<CiLogout color={"#a83245"} size={20} strokeWidth={0.7} />}
        >
          <Typography
            variant="h2"
            sx={{ marginBottom: "20px", textAlign: "left", fontWeight: "500" }}
          >
            Force logout?
          </Typography>

          <Box
            sx={{
              background: theme.palette.lightBaseColor,
              margin: "10px 0px",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              {item.username}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              {item.firstname} {item.lastname} . Login Status:{" "}
              {item.isloginValue}
            </Typography>
          </Box>
          <Grid item xs={12}>
            <ButtonContainer>
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                disabled={isLoading}
                onClick={() => setOpenLogout(false)}
              >
                Cancel
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="error"
                disabled={isLoading}
                onClick={forceLogoutUser}
              >
                {isLoading && (
                  <CircularProgress
                    size={20}
                    sx={{ marginRight: 1, color: "#fff" }}
                  />
                )}
                Confirm Force logout
              </Button>
            </ButtonContainer>
          </Grid>
        </ModalButton>
        {/* <Tooltip title="Force Logout">
                    <IconButton onClick={forceLogoutUser} >
                        <img src={ForceLogout} style={{ height: '25px', width: '25px', objectFit: 'contain' }} />
                    </IconButton>
                </Tooltip> */}
      </PermissionComp>
    </Box>
  );
};
