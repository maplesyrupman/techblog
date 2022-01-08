import React, { useState } from "react"
import LoginForm from "../../components/LoginForm"

export default function Login() {
    return (
        <div className="container mx-auto px-52">
            <h1 className="text-center">Login</h1>
            <LoginForm />
        </div>
    )
}