'use client'
import React from 'react';
import Button from "@/components/Button";
import {signOut} from "next-auth/react";

const SignOutButton = () => {
    return (
        <>
            <Button text={"Sign Out"} variant={"secondary"} onClick={() => signOut()}/>
        </>
    );
};

export default SignOutButton;