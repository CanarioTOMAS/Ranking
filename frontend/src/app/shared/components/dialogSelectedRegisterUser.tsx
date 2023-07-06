import {
  Alert,
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  Grid,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import ShieldIcon from "@mui/icons-material/Shield";

interface DialogSelected {
  open: boolean;
  onClose: (value: string) => void;
}

export const DialogSelectedRegisterUser = (props: DialogSelected) => {
  const [toAlert, setToAlert] =useState(false)
  
  const { open, onClose } = props;


  const handleClose = () => {
    setToAlert(true)
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <div>
      <Dialog onClose={()=>handleClose()} open={open}>
        <DialogTitle>Registrarme como:</DialogTitle>
        <Grid container p={1}>
          <Grid item xs={5} textAlign={"center"} m={1}>
            <Box
              sx={{
                textAlign: "center",
                border: "solid 1px black",
                borderRadius: "20px",
                p: 2,
              }}
              onClick={() => handleListItemClick("CLUB")}
            >
              <Avatar sx={{ margin: "auto" }}>
                <SportsBaseballIcon />
              </Avatar>
              <Typography variant="body1">CLUB</Typography>
            </Box>
          </Grid>
          <Grid item xs={5} textAlign={"center"} m={1}>
            <Box
              sx={{
                textAlign: "center",
                border: "solid 1px black",
                borderRadius: "20px",
                p: 2,
              }}
              onClick={() => handleListItemClick("PLAYER")}
            >
              <Avatar sx={{ margin: "auto" }}>
                <ShieldIcon />
              </Avatar>
              <Typography variant="body1">PLAYER</Typography>
            </Box>
          </Grid>
        </Grid>
      </Dialog>


      <Snackbar open={toAlert} autoHideDuration={1} >
        <Alert onClose={()=>setToAlert(false)} severity="warning" sx={{ width: "100%" }}>
          Porfavor seleccione el tipo de usuario
        </Alert>
      </Snackbar>
    </div>
  );
};
