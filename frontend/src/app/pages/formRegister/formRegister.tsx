'use client'
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {IUserRegister } from "../../shared/models/user";
import { AddReaction } from "@mui/icons-material";
import { DialogSelectedRegisterUser } from "@/app/shared/components/dialogSelectedRegisterUser";
import { Register } from "@/app/shared/services/user.service";


export const FormRegister = () => {
  const {register, handleSubmit,setValue,formState:{errors}}=useForm<IUserRegister>({
    defaultValues:{
      name:'',
      role:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [closeDialog, setCloseDialog] = useState(true)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit=handleSubmit((values)=>{
    Register(values)
  })

  return (
    <Card sx={{ width: "50ch", textAlign: "center", m: "auto",p:7}}>
      <DialogSelectedRegisterUser open={closeDialog} onClose={(value)=>{
        setValue("role",value)
        setCloseDialog(false)
        }
      }/>
      <Avatar sx={{ width: 80, height: 80, m: "auto" }} >
        <AddReaction/>
      </Avatar>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField id="filled-helperText" label="Name" variant="outlined" {...register("name")}/>
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField id="filled-helperText" label="Email" variant="outlined" {...register("email")} />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" >
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
            {...register("password")}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" >
            Confirm Password
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
            label="Confirm Password"
            {...register("confirmPassword" )}
          />
        </FormControl>
      </Box>
      <Box>
        <Typography>
          ¡Ya tengo una cuenta! 
          <Link href="#">Inicar Sesión</Link>
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit} color={"info"}>Registrarme</Button>
      </Box>
    </Card>
  );
};
