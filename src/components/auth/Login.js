import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";

const Login = () => {
   const userRef = useRef();
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [login] = useLoginMutation();
   const handleLogin = async (e) => {
      console.log("Email:", username);
      console.log("Password:", password);
      e.preventDefault();

      try {
         const { accessToken } = await login({ username, password }).unwrap();

         dispatch(setCredentials({ accessToken }));
         setUserName("");
         setPassword("");
         console.log("Navigating to /admin");

         navigate("/admin");
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      userRef.current.focus();
   }, []);

   return (
      <div
         className="login__modal"
         style={{
            position: "fixed",
            top: "45%",
            left: "40%",
            width: "300px",
            background: "white",
         }}
      >
         <label>
            username:
            <input
               type="email"
               value={username}
               ref={userRef}
               onChange={(e) => setUserName(e.target.value)}
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
   );
};

export default Login;
