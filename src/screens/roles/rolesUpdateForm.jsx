import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  Divider,
  IconButton,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import Permissions from "../permissions/permission";
import add from "../../assests/add.png";
import { alphanumericRegex, setDataObject } from "../../utils/Utils";
import { useDispatch } from "react-redux";
import { createrole } from "../../store/actions/roles";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import MultiSelectFields from "../../components/MultiSelectFields";
import SearchBar from "../../components/searchBar/searchBar";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const RolesUpdateForm = (props) => {
  const { data, setOpen, type } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [role, setRole] = useState(null);
  const [selectedAccess, setSelectedAccess] = useState([]);
  const [assignedSearch, setAssignedSearch] = useState("");
  const [moduleSearch, setModuleSearch] = useState("");
  const [reviewSelected, setReviewSelected] = useState(false);
  const breadCrumCtxt = useContext(BreadCrumSelectorContext);
  const defaultValues = useForm({
    defaultValues: {
      rolename: "",
    },
  });

  console.log(data);

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    reset,
    resetField,
    getValues,
    formState: { errors },
  } = defaultValues;

  useEffect(() => {
    if (data?.rid) {
      setRole(data);
      reset({
        rolename: data.rolename || "",
      });
    } else {
      setRole({
        rid: null,
        rolename: "",
      });
    }
  }, [data, reset]);

  const addRoleName = () => {
    let obj = setDataObject(getValues());
    obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join("|") + "|Save";
    console.log(obj);
    dispatch(createrole(obj)).then((res) => {
      if (res.payload.responsecode == 0) {
        console.log(res.payload.roleCustomLis);
        setRole(res.payload.roleCustomList[0]);
      }
    });
  };
  const template = [
    { displayvalue: "custom", codevalue: "CUSTOM" },
    { displayvalue: "no access", codevalue: "NO_ACCESS" },
    { displayvalue: "full access", codevalue: "FULL_ACCESS" },
    { displayvalue: "Read only", codevalue: "READ_ONLY" },
  ];
  const selectedModuleCount = new Set(selectedAccess.map((item) => item.module))
    .size;

  return (
    <>
      <Typography
        variant="h2"
        sx={{ margin: "0px 10px", textAlign: "left", fontWeight: "500" }}
      >
        {type == "Edit" ? "Edit Role & Permissions" : "Create Role"}
      </Typography>
      <Divider sx={{ margin: "10px 0px" }} />
      <form>
        <>
          <Box
            sx={{
              display: "flex",
              boxSizing: "border-box",
              gap: "30px",
              width: "auto",
              margin: "20px",
            }}
          >
            <Grid item xs={10}>
              <InputFields
                fieldName="rolename"
                type="text"
                label="Role Name"
                control={control}
                rules={{
                  required: "Role Name is required",
                }}
                error={errors?.rolename}
                pattern={alphanumericRegex}
              />
            </Grid>

            <Grid item xs={7}>
              <MultiSelectFields
                fieldName="template"
                label="Select Template"
                control={control}
                options={template.map(({ displayvalue, codevalue }) => {
                  return { label: displayvalue, value: codevalue };
                })}
                error={errors?.template}
              />
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              boxSizing: "border-box",
              gap: "10px",
              width: "auto",
              margin: "20px",
            }}
          >
            <SearchBar
              placeholder={"Search modules"}
              className="roleFormSearch"
              handleChange={setModuleSearch}
            />

            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: "30%" }}
              onClick={() => setReviewSelected((current) => !current)}
            >
              {reviewSelected ? "Browse permissions" : "Review Selected"}
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              boxSizing: "border-box",
              borderTop: "1px solid #cad7e3",
              borderBottom: "1px solid #cad7e3",
              width: "100%",
              minHeight: "350px",
              height: "55vh",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flex: "0 0 30%",
                padding: "10px",
                boxSizing: "border-box",
                gap: "6px",
                minWidth: 0,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#23374a", margin: "6px 0px", textAlign: "left" }}
              >
                Assigned access
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                Your current selection, grouped by module.
              </Typography>
              <SearchBar
                className="roleFormSearch"
                placeholder={"Find assigned access"}
                handleChange={setAssignedSearch}
              />
              {selectedAccess.length === 0 ? (
                <Box
                  sx={{
                    color: "#617088",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    margin: "20px 0",
                    textAlign: "center",
                  }}
                >
                  <IoEyeOutline size={20} />
                  <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                    No access assigned yet
                  </Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    Choose permissions from the tree to build this role.
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{ overflowY: "auto", minHeight: 0, textAlign: "left" }}
                >
                  {Object.entries(
                    selectedAccess
                      .filter((item) =>
                        `${item.module} ${item.submodule} ${item.label}`
                          .toLowerCase()
                          .includes(assignedSearch.toLowerCase()),
                      )
                      .reduce((groups, item) => {
                        groups[item.module] ||= {};
                        groups[item.module][item.submodule] ||= [];
                        groups[item.module][item.submodule].push(item);
                        return groups;
                      }, {}),
                  ).map(([module, submodules]) => (
                    <Box
                      key={module}
                      sx={{
                        mb: 1,
                        border: "1px solid #d5deeb",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Typography sx={{ p: 1, backgroundColor: "#eee8fa" }}>
                        {module}
                      </Typography>

                      {Object.entries(submodules).map(([submodule, labels]) => (
                        <Box key={submodule} sx={{ padding: "5px" }}>
                          <Typography
                            sx={{
                              px: 1,
                              pt: 1,
                              fontSize: 11,
                              fontWeight: 400,
                              color: "#617088",
                            }}
                          >
                            {submodule}
                          </Typography>

                          {labels.map((item, index) => (
                            <Box
                              key={`${item.permissionId}-${index}`}
                              sx={{
                                px: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <Typography sx={{ fontSize: 12 }}>
                                {item.label}
                              </Typography>

                              <IconButton
                                size="small"
                                sx={{
                                  p: 1.25,
                                  color: "#617088",
                                  ml: "auto",
                                }}
                                onClick={item.remove}
                              >
                                <IoMdClose size={15} />
                              </IconButton>
                            </Box>
                          ))}

                          <Divider />
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <Box
              sx={{
                flex: "0 0 70%",
                padding: "10px",
                boxSizing: "border-box",
                minWidth: 0,
                minHeight: 0,
                borderLeft: "1px solid #cad7e3",
                overflowY: "auto",
                overflowX: "hidden",
                background: "#edf1f7",
              }}
            >
              {role && (
                <Permissions
                  role={role}
                  onSelectionChange={setSelectedAccess}
                  selectedPermission={reviewSelected}
                  search={moduleSearch}
                />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "15px",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <InputFields
                    fieldName="permissions"
                    type="text"
                    label="Permissions"
                    control={control}
                    rules={{
                        required: "Permissions is required",
                    }}
                    error={errors?.permissions}
                /> */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" color="#23374a" fontWeight="bold">
                {selectedAccess.length} permissions selected
              </Typography>
              <Typography sx={{ fontSize: "11px", textAlign: "left" }}>
                {selectedModuleCount} modules selected
              </Typography>
            </Box>
            <ButtonContainer isThree>
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                onClick={async () => {
                  reset();

                  for (const item of selectedAccess) {
                    await item.remove();
                  }
                }}
              >
                Clear All
              </Button>
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                onClick={handleSubmit(addRoleName)}
              >
                Save Role
              </Button>
            </ButtonContainer>
            {/* <IconButton onClick={handleSubmit(addRoleName)} sx={{ width: '40px', margin: '0px auto' }}>
                        <img src={add} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    </IconButton> */}
          </Box>
        </>
        {/* )} */}

        {/* <Grid item xs={12}>
                <ButtonContainer isSingle>
                    <Button size="medium" variant="contained" color="primary" >Save</Button>

                </ButtonContainer>
            </Grid> */}
        {/* </Grid> */}

        {/* {role && <Permissions role={role} />} */}
      </form>
    </>
  );
};

export default RolesUpdateForm;
