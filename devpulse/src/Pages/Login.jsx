import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import "../Style/Login.css";
import { InputAdornment, IconButton } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
//...................
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../Components/ValidationSchema";

export default function Login() {
  //  const[email,setEmail]=useState("");
  //  const[password,setPassword]=useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //form validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    // mode: "onChange",   // real-time validation
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };

  /* function handleChange(e){
    //   setEmail(e.target.value );//here at a time updates teh state .
    // setPassword(e.target.value)
    const {name,value}=e.target //here we are destructuring it to handle state updates easily ...if anything matches ..then only state needs to update
    if(name=== "email"){
      setEmail(value )
    }
    else if (name === "password"){
      setPassword(value)
    }
    }*/
  // function handleSubmit(e){
  //   e.preventDefault();
  //   // setEmail("");
  //   // setPassword("");

  // }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="login-card">
          <Typography variant="h4" className="login-header">
            Welcome Back
          </Typography>

          <TextField
            required
            // type="email"
            fullWidth
            // name="email"
            // value={email}
            // id="email"
            label="Email Address"
            variant="filled"
            className="custom-textfield"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            // onChange={handleChange}
          />

          <TextField
            required
            fullWidth
            // id="password"
            // name="password"
            // value={password}
            label="Password"
            // type="password"
            autoComplete="current-password"
            variant="filled"
            className="custom-textfield"
            // onChange={handleChange}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton
            //         onClick={() => setShowPassword(!showPassword)}
            //         edge="end"
            //       >
            //         {showPassword ? <VisibilityOff /> : <Visibility />}
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="login-button"
          >
            Sign In
          </Button>

          <Typography
            variant="body2"
            style={{ color: "#aaa", textAlign: "center", marginTop: "10px" }}
          >
            Don't have an account?{" "}
            <span style={{ color: "#2575fc", cursor: "pointer" }}>Sign Up</span>
          </Typography>
        </Box>
      </form>
    </div>
  );
}
