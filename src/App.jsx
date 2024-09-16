import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/home";
import Footer from "./components/footer";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./components/pages/Forms/signin";
import Signup from "./components/pages/Forms/signup";
import Explore from "./components/pages/Explore/explore";
import { Authcontext } from "./context/useAuthProvider";
import People from "./components/pages/plastics/plastics";
import AllRecyclers from "./components/pages/allRecyclers/all";
import Chats from "./components/pages/chats/chats";
function App() {

  const { isAuthenticated, isLoading } = useContext(Authcontext)
  return isLoading ?
    /* From Uiverse.io by Pradeepsaranbishnoi */
    <div className="flex justify-center mt-[15rem]">
      <div>
      <div class="🤚">
      <div class="👉"></div>
      <div class="👉"></div>
      <div class="👉"></div>
      <div class="👉"></div>
      <div class="🌴"></div>
      <div class="👍"></div>
    </div>
    <div className="mt-10 text-center">
      Loading...
    </div>
      </div>
       
    </div>
    : (
      <>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="explore" element={<AllRecyclers />} />
            <Route path="/explore/:material" element={< People />} />
            <Route path="/chat/:userId" element={<Chats />}/>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
