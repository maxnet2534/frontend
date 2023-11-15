import React from 'react'

const Login = () => {
    const content = (
        <main className="container">
            <form className="form-login">

            <h3 className="login-title">Login</h3>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />

            <div className="buttons-login">
                <button className="button-login"type="submit">Login</button>
                <button className="buttons-single">Single Sing On</button>
            </div>

            </form>
        </main>
    )
    return content
}

export default Login