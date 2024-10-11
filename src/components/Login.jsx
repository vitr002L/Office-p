import React, { useState } from "react";
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined"; // Import the LockOutlined icon
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)", // Vibrant background gradient
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          background: "linear-gradient(90deg, #ffffff, #e4e4e4)", // Lighter gradient for the title
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          fontSize: "3.5rem",
          textAlign: "center",
          textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)",
          marginBottom: "30px",
        }}
      >
      </Typography>

      <Box
        sx={{
          width: "400px",
          padding: "50px",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.15)", // Glassmorphism effect
          backdropFilter: "blur(15px)", // Blurred background for glass effect
          boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.7)", // Deeper shadow for more depth
          border: "2px solid rgba(255, 255, 255, 0.3)", // Subtle border for glass effect
        }}
      >
        <Box textAlign="center">
          <IconButton>
            <LockOutlined color="primary" fontSize="large" />
          </IconButton>
        </Box>

        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          sx={{
            color: "#ffffff", // White text for the heading
            fontSize: "2rem",
            textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)", // Add more shadow to the text for depth
          }}
        >
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: {
                color: "#ffffff", // White input text color
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent border
                },
                "&:hover fieldset": {
                  borderColor: "#fdbb2d", // Bright hover effect
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ff7e5f", // Bright border on focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)", // Slightly transparent label
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fdbb2d", // Bright label color on focus
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: {
                color: "#ffffff", // White input text color
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent border
                },
                "&:hover fieldset": {
                  borderColor: "#fdbb2d", // Bright hover effect
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ff7e5f", // Bright border on focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)", // Slightly transparent label
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fdbb2d", // Bright label color on focus
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient button
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "1.2rem",
              padding: "10px 0",
              borderRadius: "8px",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.4)", // Stronger shadow for the button
              "&:hover": {
                backgroundColor: "#ff7e5f",
                transform: "scale(1.08)",
                transition: "transform 0.3s ease, background-color 0.3s ease",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
