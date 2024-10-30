import React, { useState } from "react";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel=()=>{
    setIsRegister(!isRegister);
  }

  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
            <div className="front">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
