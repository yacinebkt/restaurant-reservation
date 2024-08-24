import { Box } from "@mui/material";
import Router from "@/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Box>
  );
}

export default App;
