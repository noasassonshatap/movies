import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MenuButtonProps {
  toggleDrawer: () => void; // Assuming toggleDrawer is a function that takes no arguments and returns nothing
}

const MenuButton = ({ toggleDrawer }: MenuButtonProps) => (
  <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={toggleDrawer}
  >
    <MenuIcon />
  </IconButton>
);

export default MenuButton;
