import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuButton from "./menuButton";
import BackButton from "./backButton";
import AppDrawer from "../drawer/drawer";

export type THeaderProps = {
  title?: string;
  // searchBar?: boolean;
  allowGoBack?: boolean;
  drawer?: boolean;
};

const MyAppBar = ({ title, allowGoBack, drawer }: THeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {drawer && <MenuButton toggleDrawer={toggleDrawer} />}
          {allowGoBack && !drawer && <BackButton />}
          <Typography style={{ flexGrow: 1, textAlign: "center" }}>
            {title}
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {drawer && <AppDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />}
    </>
  );
};

export default MyAppBar;
