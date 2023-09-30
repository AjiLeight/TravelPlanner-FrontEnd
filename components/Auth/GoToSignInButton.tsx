'use client'
import Button from "@/components/Button";
import {signIn} from "next-auth/react";

const GoToSignInButton = () => {
    const redirectToSignInPage = async () => {
        await signIn()
    }
    return (
        <>
            <Button type={"button"} icon={"/logo-right.svg"} text={"Sign In to Continue"} variant={"primary"}
                    onClick={() => redirectToSignInPage()}
            />
        </>
    );
};

export default GoToSignInButton;