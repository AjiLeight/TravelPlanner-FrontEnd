"use client"
import Image from "next/image";
import {FC} from "react";

interface ButtonPropTypes {
    icon: string
    text: string
    variant: "primary" | "secondary"
}

const Button: FC<ButtonPropTypes> = ({icon, text, variant}) => {
    return (
        <button className={"flex justify-between items-center  text-white bg-[#0B83CC] rounded-full w-[220px] h-[56px] pl-5 pr-3 shadow-[#0B83CC] hover:bg-opacity-50 transition-all ease-in hover:text-black"}>
            <span className={"font-medium text-[14px]"}>{text}</span>
            <div className={"relative h-[44px] w-[44px]"}>
                <Image src={icon} alt={"button-icon"} fill className={"object-contain"}/>
            </div>
        </button>
    );
};

export default Button;