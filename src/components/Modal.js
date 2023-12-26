// ModalComponent.js
import React, { useState } from "react";
// import { Button, Modal, TextField, Box } from "@mui/material";
import { Button, Modal, TextField, Box } from "@mui/joy";
const ModalComponent = ({ open, handleClose }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = () => {
      // Handle login logic here
      console.log("Email:", email);
      console.log("Password:", password);
      // Add your authentication logic here
      // You might want to use a state management solution or API calls
      // to handle authentication and store user information.
   };

   return (
      //   <Modal open={open} onClose={handleClose}>
      <div
         className="login__modal"
         style={{
            position: "fixed",
            top: "45%",
            left: "40%",
            //   transform: translate("-50%", "-50%"),
            // transform:
            width: "300px",
            padding: "16px",
            //   border: 1px solid #ccc/
            //   border-radius: "4px"
            background: "white",
         }}
      >
         <label>
            Email:
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               style={{ width: "100%", margin: "8px 0" }}
            />
         </label>
         <label>
            Password:
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               style={{ width: "100%", margin: "8px 0" }}
            />
         </label>
         <button
            onClick={handleLogin}
            style={{
               width: "100%",
               padding: "8px",
               background: "#4CAF50",
               color: "white",
               border: "none",
               borderRadius: "4px",
               cursor: "pointer",
            }}
         >
            Login
         </button>
      </div>
      //   </Modal>
   );
};

export default ModalComponent;
