'use client'
import Button from "@/components/Button";
import React, {useState} from "react";
import {signIn} from "next-auth/react";

const SignInForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await signIn("credentials", {
            ...credentials,
            callbackUrl: "/dashboard"
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form onSubmit={handleSignIn} className={"flex flex-col gap-4 items-center"} autoComplete={"off"}>
                <div className={"bg-[#e6e6e6] h-[40px] w-full flex items-start border rounded-xl px-[15px]"}>
                    <input
                        id={'username'} type="text"
                        name={"username"}
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder={"Username"}
                        className={"bg-transparent border-none outline-none w-full h-full"}
                    />
                </div>
                <div className={"bg-[#e6e6e6] h-[40px] w-full flex items-start border rounded-xl px-[15px]"}>
                    <input
                        type="password"
                        name={"password"}
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder={"Password"}
                        className={"bg-transparent border-none outline-none w-full h-full"}
                    />
                </div>
                <Button text={'Sign In'} variant={'primary'} type={"submit"}/>
            </form>
        </>
    );
};

export default SignInForm;