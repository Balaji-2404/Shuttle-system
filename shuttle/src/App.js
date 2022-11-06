import "./App.css";
import React, { useState } from "react";
import SimpleMap from "./map";
import Button from "@mui/material/Button";
import Payment from "./payment";
import PassengerCount from "./passengerCount";
import location from "./Data";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const payFee = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Payment setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="App">
        <div className="container mt-5">
          <h1 className="mt-5 mb-5">Welcome to VIT Shuttle Service Website</h1>
          <div className="col d-none d-lg-block d-xl-block">
            <img
              src="https://vit.ac.in/system/files/004A7447.JPG"
              width="1300"
              height="800"
              className="img-responsive align-top"
              alt="Shuttle image "
            />
          </div>
          <div className="col d-block d-lg-none d-xl-none">
            <img
              src="https://vit.ac.in/system/files/004A7447.JPG"
              width="90%%"
              height="50%"
              className="img-responsive align-top"
              alt="Shuttle image "
            />
          </div>
          <div className="mt-5"></div>
          <div className="col">
            <SimpleMap />
          </div>

          <div className="mt-5 ml-5 mb-5 pb-5">
            <PassengerCount />
          </div>
          <div className="mt-5 pt-5">
            <h2 className="mb-5">
              Click the below link to pay for the shuttle service
            </h2>
            <Button id="payment" onClick={payFee} variant="contained">
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
