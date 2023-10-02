'use client'
import Button from "@/components/Button";
import React, {useState} from "react";
import SelectionListBox from "@/components/SelectionListBox";
import {userRoles} from "@/contants";

const SignUpForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
    })

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (credentials.password === credentials.confirmPassword) {
            console.log(credentials)
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
                <Button text={'Sign Up'} variant={'secondary'} type={"submit"}/>
            </form>
        </>
    );
};

export default SignUpForm;