'use client'
import React, {useState} from 'react';
import Button from "@/components/Button";
import {signIn} from "next-auth/react";

const SignInPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await signIn("credentials", {
            ...credentials
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            Sign In to Travel Planner
            <form onSubmit={handleSignIn}>
                <input type="text" name={"username"} value={credentials.username} onChange={handleChange}/>
                <input type="password" name={"password"} value={credentials.password} onChange={handleChange}/>
                <Button text={'Sign In'} variant={'primary'} type={"submit"}/>
            </form>
        </div>
    );
};

export default SignInPage;