'use client'
import Button from "@/components/Button";
import React, {useState} from "react";
import SelectionListBox from "@/components/SelectionListBox";
import {userRoles} from "@/contants";
import {registerUser} from "@/utils/authUtils";
import {signIn} from "next-auth/react";

const SignUpForm = () => {
    const [credentials, setCredentials] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
    })
    const [error, setError] = useState({
        message: ''
    })


    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError({
            message: ''
        })
        if (!credentials.email || !credentials.password || credentials.password !== credentials.confirmPassword || !credentials.firstname) {
            setError({
                message: "Invalid Data"
            })
        } else {
            const res = await registerUser(credentials)
            if (res?.error?.message) {
                setError({
                    message: res.message
                })
            } else if (res?.accessToken) {
                await signIn("credentials", {
                    email: credentials.email,
                    password: credentials.password,
                    callbackUrl: "/dashboard"
                })
            } else {
                setError({
                    message: "Something went wrong"
                })
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (selected: string) => {
        setCredentials({
            ...credentials,
            role: selected
        })
    }

    return (
        <>
            <form onSubmit={handleSignUp} className={"flex flex-col gap-4 items-center"} autoComplete={"off"}>
                <div className={"bg-[#e6e6e6] h-[40px] w-full flex items-start border rounded-xl px-[15px]"}>
                    <input
                        id={'firstname'} type="text"
                        name={"firstname"}
                        value={credentials.firstname}
                        onChange={handleChange}
                        placeholder={"Firstname"}
                        className={"bg-transparent border-none outline-none w-full h-full"}
                    />
                </div>
                <div className={"bg-[#e6e6e6] h-[40px] w-full flex items-start border rounded-xl px-[15px]"}>
                    <input
                        id={'lastname'} type="text"
                        name={"lastname"}
                        value={credentials.lastname}
                        onChange={handleChange}
                        placeholder={"Last Name"}
                        className={"bg-transparent border-none outline-none w-full h-full"}
                    />
                </div>
                <div className={"bg-[#e6e6e6] h-[40px] w-full flex items-start border rounded-xl px-[15px]"}>
                    <input
                        id={'email'} type="email"
                        name={"email"}
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder={"Email"}
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
                <div className={"bg-[#e6e6e6] h-[40px] w-full flex items-start border rounded-xl px-[15px]"}>
                    <input
                        type="password"
                        name={"confirmPassword"}
                        value={credentials.confirmPassword}
                        onChange={handleChange}
                        placeholder={"Confirm Password"}
                        className={"bg-transparent border-none outline-none w-full h-full"}
                    />
                </div>
                <div className={"h-[40px] w-full flex items-start z-10"}>
                    <SelectionListBox selected={credentials.role} changeSelected={handleSelect} listArr={userRoles}/>
                </div>
                {error?.message ? <span className={"text-red-600"}>{error.message}</span> : null}
                <Button text={'Sign Up'} variant={'secondary'} type={"submit"}/>
            </form>
        </>
    );
};

export default SignUpForm;