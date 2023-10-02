import React from 'react';
import Link from "next/link";
import SignUpForm from "@/components/Auth/SignUpForm";

const RegisterPage = async () => {
    return (
        <div
            className={"h-screen flex justify-center items-center bg-gradient-to-br from-amber-500 from-10% via-yellow-400 via-30% to-orange-500 to-90%"}>
            <div
                className={"w-fit h-fit p-12 bg-white grid grid-cols-[100%] shadow-[0px_0px_21px_7px_rgba(0,0,0,0.3)] border rounded-2xl mx-2"}>
                <div className={"flex flex-col items-center justify-center gap-6"}>
                    <h3 className={"text-2xl font-medium text-center"}>
                        Sign up for Travel Planner
                    </h3>
                    <SignUpForm/>
                    <Link href={"/auth/signIn"} className={"text-[#0B83CC] text-center"}>Already a User? Login
                        here!</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;