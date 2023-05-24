import React from "react";
import Header from "./component/header/Header";
import Feeds from "./component/feeds/Feeds";
import './index.css'

function App() {
  return (
    <div className="container">
     <Header/>
     <Feeds/>
    </div>
  );
}

export default App;
