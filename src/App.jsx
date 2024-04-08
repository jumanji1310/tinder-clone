import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SwipeCards from "./SwipeCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Switch } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/chats/:person"
            element={
              <>
                <Header backButton="/chats" />
                <ChatScreen />
              </>
            }
          />
          <Route
            path="/chats"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <SwipeCards />
                <SwipeButtons />
              </>
            }
          />
        </Routes>
        {/* Header */}
      </Router>
    </>
  );
}

export default App;
