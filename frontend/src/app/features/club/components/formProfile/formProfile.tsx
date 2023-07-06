import React from 'react'
import { IClub } from "../../models/club";
import { useForm } from "react-hook-form";
import { Box, getValue } from "@mui/system";
import { VisibilityOff, Visibility, Person } from "@mui/icons-material";
import {
  Card,
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Avatar,
} from "@mui/material";

import AssignmentIcon from '@mui/icons-material/Assignment';
import { green } from "@mui/material/colors";


export const FormProfileClub = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
      } = useForm<IClub>({
        defaultValues: {
          name: "",
          address: "",
          image: "",
          phone: "",
          description:"",
          email:"",
        },
      });
    
      const onSubmit = handleSubmit((values) => {
        console.log(values);
      });
  return (
    <div>
    <Card sx={{ width: "50ch", textAlign: "center", m: "auto", p: 7 }}>
      <Box><Avatar sx={{ bgcolor: green[500],m:'auto' ,width:100 ,height:100}}>
<Person fontSize="large"/>
</Avatar></Box>
    
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="filled-helperText"
            label="Name"
            variant="outlined"
            {...register("name")}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="filled-helperText"
            label="Description"
            variant="outlined"
            {...register("description")}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="filled-helperText"
            label="Address"
            variant="outlined"
            {...register("address")}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="filled-helperText"
            label="Date Birthd"
            variant="outlined"
            {...register("email")}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="filled-helperText"
            label="Phone"
            variant="outlined"
            {...register("phone")}
          />
        </FormControl>
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit}>
          Guardar
        </Button>
      </Box>
    </Card>
  </div>
  )
}
