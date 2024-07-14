import { Paths } from "../../../router/paths";
import renewHomeIcon from "../../../assets/icons/renewHomeIcon.svg";

export interface IDrawerOptions {
  name: string;
  path: string;
  icon: string;
}

export const drawerOptions: IDrawerOptions[] = [
  {
    name: "מסך הבית",
    path: Paths.HOME,
    icon: renewHomeIcon,
  },
];
