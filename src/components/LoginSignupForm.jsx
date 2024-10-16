import React, {useState} from 'react';
import './LoginSignupForm.css'


const LoginSignupForm = () => {

  const [action,setAction] = useState("Sign Up")
    return (
    <div>
       <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <input type="text" placeholder='name' />
            </div>}

            <div className="input">
                <input type="email" placeholder='e-mail' />
            </div>
            <div className="input">
                <input type="password" placeholder='password' />
            </div>
        </div>  
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password ? <span>Click Here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>signup</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>login</div>
        </div>
       </div>
    </div>
  )
}

export default LoginSignupForm
