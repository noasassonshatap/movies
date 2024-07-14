import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import image404 from "../../../assets/404.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(4),
  backgroundColor: "#ffffff",
  color: "#000000",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#9575cd",
  color: "#ffffff",
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 4),
  "&:hover": {
    backgroundColor: "#7e57c2",
  },
}));

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Box
        component="img"
        src={image404}
        alt="404 Illustration"
        sx={{ width: "80%", maxWidth: "400px", mb: 2 }}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        אופס!
      </Typography>
      <Typography variant="body1" paragraph>
        נראה שהדף שחיפשת לא נמצא
      </Typography>
      <StyledButton variant="contained" onClick={handleGoHome}>
        חזרה לדף הבית
      </StyledButton>
    </Wrapper>
  );
};

export default ErrorPage;
