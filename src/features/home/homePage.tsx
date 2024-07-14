import { useUserData } from "./pages/getUserData";
import { Container, Typography, Box } from "@mui/material";
import { UserDataText } from "./components/userData/userData";
import FetchingState from "../../shared/components/fetchingState/fetchingState";

const HomePage = () => {
  const userId: string = import.meta.env.VITE_USER_ID;
  const userDataResult = useUserData(userId);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ברוך הבא לאתר הסרטים שלנו
        </Typography>
        <FetchingState queryResult={userDataResult}>
          <UserDataText username={userDataResult.data?.username ?? ""} />
        </FetchingState>
      </Box>
    </Container>
  );
};

export default HomePage;
