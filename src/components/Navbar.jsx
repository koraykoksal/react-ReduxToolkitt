import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/autSlice";

export default function Navbar() {
  const navigate = useNavigate();

  const user=useSelector((state)=>state.auth.user)

  const dispatch=useDispatch()

  const handleLogout=()=>{
    dispatch(clearUser())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Clarusway News
          </Typography>

          {/* optional changing yöntemi user bilgisine null bilgisi gelirse crash olmasın */}

            {user?.email && <Button color="inherit" onClick={handleLogout}>Logout</Button>}

            {!user?.email && <Button color="inherit" onClick={()=>navigate('/login')}>Login</Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
