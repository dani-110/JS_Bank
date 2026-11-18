import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.scss";

import { Box, Collapse, Divider, IconButton, Tooltip, Typography } from "@mui/material";

import { IoMdClose } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navData as nav } from "./_profileNav";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useTheme } from '@mui/material/styles';
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { useSelector } from "react-redux";

import { PiNetworkLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
// import Logo from '../../assests/logo-no-background.png'

const Sidebar = (props) => {
  const { fixed, sideMenu, menuToggleHandler, type, sideMenuToggle, menuToggle } = props
  const theme = useTheme()
  const {
    user,
  } = useSelector((state) => state.auth);
  const location = useLocation()
  const breadCrumCtxt = useContext(BreadCrumSelectorContext)
  const openAPI = localStorage.getItem(('openAPI'));
  // const user = JSON.parse(openAPI)
  const permissions = user?.permissions

  const [search, setSearch] = React.useState("");
  const [expanded, setExpanded] = React.useState("");
  const [submenuExpanded, setSubMenuExpanded] = React.useState("");

  const navigate = useNavigate()

  const [navData, setNavData] = useState(nav)

  const nameAsSideMenu = (name) => {
    const url = name?.replace(/([A-Z])/g, ' $&')
    return url[0]?.toUpperCase() + url.slice(1, url.length)
  }

  useEffect(() => {
    console.log(location.pathname.slice(1).split('/')[0])
    if (location.pathname.slice(1).split('/')[0] == 'dashboard') {
      setExpanded('Home Dashboard')
    }
    let arr = location.pathname.slice(1).split('/')
    breadCrumCtxt.setBreadCrumSelector(arr.map(e => e.includes("UpdateForm") ? 'Edit' : nameAsSideMenu(e)));
  }, [location]);

  const handleExpandClick = (key) => {
    console.log(key)
    if (key == 'Home Dashboard') {
      setExpanded('Home Dashboard')
      navigate('dashboard')
      return
    }
    const subLabel = key?.subLable ? key?.subLable[0]?.label : ''
    if (!key.subLable) {
      navigate(key.url);
    }
    console.log(key)
    navigate(key.url);
    if (key?.subMenu?.length > 0) {
      setSubMenuExpanded(key?.subMenu[0]?.label)
    }
    setExpanded((prev) => (prev === key.label ? "" : key.label));
  };

  const handleExpandSubClick = (key) => {
    const subLabel = key?.subLable ? key?.subLable[0]?.label : ''
    if (!key.subLable) {
      navigate(key.url);
    }
    navigate(key.url);
    setSubMenuExpanded((prev) => (prev === key.label ? "" : key.label));

  };
  const handleClick = (e, url) => {
    if (url?.url?.split('/').length == 2) {
      setSubMenuExpanded('')
    }
    navigate(url.url);
  };


  const renderIcon = (iconName, isSelected, size) => {
    console.log(iconName, isSelected)
    const activeColor = "#ffff";
    const inactiveColor = "#8699ad";

    const currentColor = isSelected ? activeColor : inactiveColor;

    switch (iconName) {
      case 'PiNetworkLight':
        return <PiNetworkLight color={currentColor} size={size} />;
      case 'LuChartColumn':
        return <LuChartColumn color={currentColor} size={size} />;
      case 'LuUsers':
        return <LuUsers color={currentColor} size={size} />;
      case 'LuLogOut':
        return <LuLogOut color={currentColor} size={size} />;
      case 'AiOutlineHome':
        return <AiOutlineHome color={currentColor} size={size} />;
      default:
        return null;
    }
  }

  const getFilteredNavData = () => {
    if (!search.trim()) return navData;

    const query = search.toLowerCase();

    return navData
      .map((item) => {
        const matchesMain = item.label.toLowerCase().includes(query);
        const filteredSubLable = item.subLable?.filter((sub) =>
          sub.label.toLowerCase().includes(query)
        );
        const filteredSubMenu = item.subMenu?.map((menu) => {
          const matchesSubMenu = menu.label.toLowerCase().includes(query);

          const filteredNestedSubLable = menu.subLable?.filter((s) =>
            s.label.toLowerCase().includes(query)
          );
          if (matchesSubMenu) {
            return menu;
          } else if (filteredNestedSubLable && filteredNestedSubLable.length > 0) {
            return {
              ...menu,
              subLable: filteredNestedSubLable,
            };
          }
          return null;
        }).filter(Boolean);

        if (matchesMain) {
          return item;
        }

        if (
          (filteredSubLable && filteredSubLable.length > 0) ||
          (filteredSubMenu && filteredSubMenu.length > 0)
        ) {
          return {
            ...item,
            subLable: filteredSubLable || item.subLable,
            subMenu: filteredSubMenu || item.subMenu,
          };
        }

        return null;
      })
      .filter(Boolean);
  };

  const filteredNavData = getFilteredNavData();

  return (
    <Box sx={{ background: theme.palette.sideBarBackground }} className={`sidebar ${fixed ? 'fixed' : sideMenu ? 'sideMenu' : ''} ${!sideMenuToggle ? 'small' : ''} ${menuToggle ? 'show' : ''}`}>
      <Box sx={{ maxWidth: '450px', margin: '10px auto' }}>
        {menuToggle && fixed && <IconButton sx={{ position: 'absolute', top: 0, right: 10 }} aria-label="add" color="primary" onClick={menuToggleHandler}>
          <IoMdClose color="#fff" />
        </IconButton>}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
        <Typography variant="body2" sx={{ color: '#b5bfd1', letterSpacing: '1.8px', marginBottom: '5px' }}>WORKSPACE</Typography>
        <Typography variant="body1" sx={{ color: '#b5bfd1' }}>Qubits Portal</Typography>
        <input className="searchInput" placeholder="Fine a menu..." onChange={txt => setSearch(txt.target.value)} />
      </Box>

      <Box onClick={() => handleExpandClick('Home Dashboard')} className={'navMainText'} sx={{ backgroundColor: expanded === 'Home Dashboard' ? theme.palette.darkBaseColor : 'transparent' }}>
        <Box style={{ display: 'flex', displayDirection: 'row', alignItems: 'center', }}>
          {
            !sideMenuToggle ? (<Tooltip title={'Home Dashboard'}>
              {renderIcon('AiOutlineHome', expanded === 'Home Dashboard', 20)}
            </Tooltip>) :
              (renderIcon('AiOutlineHome', expanded === 'Home Dashboard', 20))
          }
          {sideMenuToggle && type !== "drawer" && <Typography variant="h6" component="span" sx={{ color: '#fff', marginLeft: '10px', fontWeight: expanded === 'Home Dashboard' && '500' }} >
            {'Home Dashboard'}
          </Typography>}
          {type == "drawer" && <Typography variant="h6" component="span" sx={{ color: expanded === 'Home Dashboard' ? 'rgb(94, 53, 177)' : '#fff' }} >
            {'Home Dashboard'}
          </Typography>}
        </Box>
      </Box>
      <Divider sx={{ borderBottom: '1px solid #ffffff20', marginTop: '20px' }} />

      {
        filteredNavData.map((navItem, index) => {
          return (
            <>

              {permissions?.filter(val => val.PAGEPERMISSION == navItem.label)[0]?.ISENABLE == 1 &&
                <Box onClick={() => handleExpandClick(navItem)} className={`navMainText`} sx={{ backgroundColor: expanded === navItem.label ? theme.palette.darkBaseColor : 'transparent' }}>
                  <Box style={{ display: 'flex', displayDirection: 'row', alignItems: 'center' }}>
                    {
                      !sideMenuToggle ? (<Tooltip title={navItem.label}>
                        {renderIcon(navItem.icon, expanded === navItem.label, 20)}
                      </Tooltip>) :
                        (renderIcon(navItem.icon, expanded === navItem.label, 20))
                    }
                    {sideMenuToggle && type !== "drawer" && <Typography variant="h6" component="span" sx={{ color: '#fff', marginLeft: '10px', fontWeight: expanded === navItem.label && '500' }} >
                      {navItem.label}
                    </Typography>}
                    {type == "drawer" && <Typography variant="h6" component="span" sx={{ color: expanded === navItem.label ? 'rgb(94, 53, 177)' : '#fff' }} >
                      {navItem.label}
                    </Typography>}
                  </Box>
                  {navItem.subLable && <>
                    {
                      expanded === navItem.label ? <MdOutlineExpandLess size={20} color="#fff" />
                        : <MdExpandMore size={20} color="#fff" />}
                  </>}
                </Box>}
              {navItem.subLable && <Collapse
                in={expanded === navItem.label}
                timeout="auto"
                unmountOnExit
              >
                <ul style={{ paddingLeft: '20px' }}>
                  {
                    navItem?.subMenu &&
                    navItem?.subMenu?.map((sub, ind) => {
                      return (
                        <>
                          {permissions?.filter(val => val.PAGEPERMISSION == navItem.label)[0]?.Children?.filter(ele => ele.PAGEPERMISSION == sub.label)[0]?.ISENABLE == 1 && <Box >
                            <Box style={{ display: 'flex', displayDirection: 'row', alignItems: 'center' }}>

                              {sideMenuToggle && type !== "drawer" && <Typography variant="h6" component="span" sx={{ color: '#dbe1ec', margin: '5px 10px', textTransform: 'capitalize' }} >
                                {sub.label}
                              </Typography>}
                              {type == "drawer" && <Typography variant="h6" component="span" sx={{ color: '#dbe1ec' }} >
                                {sub.label}
                              </Typography>}
                            </Box>
                          </Box>}
                          {/* {sub.subLable && <Collapse
                            in={submenuExpanded === sub.label}
                            timeout="auto"
                            unmountOnExit
                          > */}
                          <ul className="menuList">
                            {
                              sub?.subLable && sub.subLable.map((s) => (
                                <>
                                  {permissions?.filter(val => val.PAGEPERMISSION == navItem.label)[0]?.Children?.filter(ele => ele.PAGEPERMISSION == sub.label)[0]?.Children?.filter(ele => ele.PAGEPERMISSION == s.label)[0]?.ISENABLE == 1 &&
                                    <li>
                                      <NavLink
                                        onClick={(e) => {
                                          handleClick(e, s)
                                        }}
                                        className=''
                                        to={s.url}
                                      >

                                        {sideMenuToggle && type !== "drawer" && <Typography variant="h6" component="span" className="navText">
                                          {s.label}
                                        </Typography>}
                                        {type == "drawer" && <Typography variant="h6" component="span" className="navText">
                                          {s.label}
                                        </Typography>}
                                      </NavLink>
                                    </li>
                                  }
                                </>
                              ))
                            }
                          </ul>
                          {/* </Collapse>} */}
                        </>
                      )
                    })

                  }
                  {
                    navItem?.subLable && navItem.subLable.map((sub, i) => {
                      return (
                        <ul className="menuList">
                          {permissions?.filter(val => val.PAGEPERMISSION == navItem.label)[0]?.Children?.filter(ele => ele.PAGEPERMISSION == sub.label)[0]?.ISENABLE == 1 && <li>
                            <NavLink
                              onClick={(e) => {
                                handleClick(e, sub)
                              }}
                              className=''
                              to={sub.url}
                            >
                              {sideMenuToggle && type !== "drawer" && <Typography variant="h6" component="span" className="navText">
                                {sub.label}
                              </Typography>}
                              {type == "drawer" && <Typography variant="h6" component="span" className="navText">
                                {sub.label}
                              </Typography>}
                            </NavLink>
                          </li>}
                        </ul>
                      )
                    })
                  }
                </ul>
              </Collapse>}
            </>
          )
        })
      }
      <Box style={{ display: 'flex', displayDirection: 'row', alignItems: 'center', padding: '20px 0px 0px', borderTop: '1px solid #ffffff20' }}>
        {
          !sideMenuToggle ? (<Tooltip title={'Logout'}>
            {renderIcon('LuLogOut', false, 20)}
          </Tooltip>) :
            (renderIcon('LuLogOut', false, 20))
        }
        {sideMenuToggle && type !== "drawer" && <Typography variant="h6" component="span" sx={{ color: '#fff', marginLeft: '10px' }} >
          {'Logout'}
        </Typography>}
        {type == "drawer" && <Typography variant="h6" component="span" >
          {'Logout'}
        </Typography>}
      </Box>

    </Box>
  );
};

export default Sidebar;

