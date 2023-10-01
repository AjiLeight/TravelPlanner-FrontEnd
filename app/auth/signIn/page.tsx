import React from 'react';
import SignInForm from "@/components/Auth/SignInForm";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div
            className={"h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"}>
            <div
                className={"w-fit h-fit p-12 bg-white grid grid-cols-[100%] shadow-[0px_0px_21px_7px_rgba(0,0,0,0.3)] border rounded-2xl mx-2"}>
                <div className={"flex flex-col items-center justify-center gap-6"}>
                    <h3 className={"text-2xl font-medium text-center"}>
                        Sign In to Travel Planner
                    </h3>
                    <SignInForm/>
                    <Link href={"/auth/register"} className={"text-[#0B83CC] text-center"}>First time? Register
                        here!</Link>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;