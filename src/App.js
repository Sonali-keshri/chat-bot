// import './App.css';

import Navbar from "./Component/Navbar";
import Login from "./pages/Login";
import ChatRoom from "./pages/Chatroom";
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import 'prismjs/themes/prism.css';


function App() {
  const [theme, setTheme] = useState('light')

  return (
    <AuthProvider dark-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
