import { SwipeableDrawer } from "@mui/material";
import { DrawerContent } from "./drawerContent";

interface AppDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const AppDrawer = (props: AppDrawerProps) => {
  const { isOpen, toggleDrawer } = props;

  return (
    <SwipeableDrawer
      dir="rtl"
      variant="temporary"
      anchor="right"
      PaperProps={{ style: { left: "unset", right: 0 } }}
      open={isOpen}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <DrawerContent toggleDrawer={toggleDrawer} />
    </SwipeableDrawer>
  );
};

export default AppDrawer;
