import { IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={goBack} edge="start" color="inherit" aria-label="back">
      <ArrowBack style={{ transform: "rotate(180deg)" }} />
    </IconButton>
  );
};

export default BackButton;
