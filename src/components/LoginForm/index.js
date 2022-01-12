import React, {useState} from "react";

export default function LoginForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' })
    const {username, email, password} = formData

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch('api/user', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(console.log)
    }

    return(
        <div className="border border-2 rounded p-10 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className='mx-auto'>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} className="form-input"/>
                </div>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input type='text' name='username' defaultValue={username} onChange={handleChange} className="form-input"/>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' defaultValue={password} onChange={handleChange} className="form-input"/>
                </div>
                <div className="flex">
                    <button type='submit' className="mx-auto bg-emerald-100 hover:bg-green-200 text-white font-bold py-2 px-4 rounded">Login</button>
                </div>
            </form>
        </div>
    )
}