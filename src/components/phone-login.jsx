import React, { useState } from 'react';
import OtpInput from './otp-input';

const PhoneOtpForm = () => {
    const [phoneNumber,setPhoneNumber] = useState("");
    const [showOtpInput,setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) =>{
        setPhoneNumber(event.target.value);
    };


    const handlePhoneSubmit = (event) =>{
        event.preventDefault();
        //validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length !=10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }

        //show otp field 
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp)=>{
        console.log("Login Successfully",otp);
    };

    
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} >
          <input
            style={{width:'300px',height:'30px'}}
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit" style={{height:'35px'}}>Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
