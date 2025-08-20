import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type="submit">Login</button>
            </form>
           
        </div>

    )


}
    export default Login











