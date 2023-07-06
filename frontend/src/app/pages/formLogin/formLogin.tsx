import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ width: "50ch", textAlign: "center", m: "auto",p:7}}>
      <Avatar sx={{ width: 80, height: 80, m: "auto" }} />
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField id="filled-helperText" label="Email" variant="outlined" />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Box>
        <FormControlLabel control={<Checkbox />} label="Recordarme" />
      </Box>
      <Box>
        <Link href="#">Olvide Mi Contraseña</Link>
        <Typography>
          ¿Todavía no tienes una cuenta?
          <Link href="#">Registrate</Link>
        </Typography>
      </Box>
      <Box>
        <Button variant="contained">Iniciar Sesión</Button>
      </Box>
    </Card>
  );
};
