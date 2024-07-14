import { Typography } from "@mui/material";
import { UserData } from "../../types/userData";

interface UserDataTextProps {
  username: UserData["username"];
}

export const UserDataText = ({ username }: UserDataTextProps) => {
  return <Typography variant="body1"> שלום {username} </Typography>;
};
