import { useState } from "react";
import OtpInput from "react-otp-input";
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");

  const verifyOtp = () => {
    console.log("OTP is: ", otp);
  };

  return (
    <>
      <div className="main">
        <h1>Otp Verification Screen</h1>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> </span>}
          inputType="tel"
          containerStyle={{ display: "unset" }}
          inputStyle={{ width: "3rem", height: "3.5rem" }}
          renderInput={(props) => <input {...props} className="otp-input" />}
        />
        <div>
          <button className="verify-button" onClick={verifyOtp}>
            Verify
          </button>
          <p>Verify One Time Password</p>
        </div>
      </div>
    </>
  );
}

export default App;
