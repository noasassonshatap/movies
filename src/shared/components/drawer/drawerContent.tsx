import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IDrawerOptions, drawerOptions } from "./drawerOptionConfig";

interface DrawerContentProps {
  toggleDrawer: () => void;
}

export const DrawerContent = ({ toggleDrawer }: DrawerContentProps) => {
  const navigate = useNavigate();

  const handleClick = (path: string): void => {
    navigate(path);
  };
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        Drawer Content
      </Typography>
      <List>
        {drawerOptions.map((option: IDrawerOptions) => (
          <ListItem key={option.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={option.icon}
                  alt="icon"
                  style={{
                    width: "20px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={option.name}
                onClick={() => handleClick(option.path)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
