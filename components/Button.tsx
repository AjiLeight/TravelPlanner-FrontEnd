"use client"
import Image from "next/image";
import React, {ButtonHTMLAttributes, FC} from "react";
import Link from "next/link";
import {cn} from "@/utils/tailwindUtils";
import {className} from "postcss-selector-parser";

type ButtonPropTypes = {
    icon: string
    text: string
    customStyles?: string
} & (buttonProps | linkProps)

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary"
}

interface linkProps {
    variant: "link"
    link: string
}

const Button: FC<ButtonPropTypes> = (props) => {
    const elementStyles = {
        "bg-[#0B83CC] shadow-[0px_0px_21px_7px_rgba(11,131,204,0.39)]": props.variant === "primary" || props.variant === 'link',
        "bg-[#F78251] shadow-[0px_0px_21px_7px_rgba(255,176,132,0.7)]": props.variant === "secondary"
    }
    return props.variant === 'link' ? (
        <Link href={props.link}
              className={cn("flex justify-between items-center text-white rounded-full w-[220px] h-[56px] pl-5 pr-3 hover:bg-opacity-50 transition-all ease-in hover:text-black", props.customStyles, elementStyles)}>
            <span className={"font-medium text-[14px]"}>{props.text}</span>
            <div className={"relative h-[44px] w-[44px]"}>
                <Image src={props.icon} alt={"button-icon"} fill className={"object-contain"}/>
            </div>
        </Link>
    ) : (
        <button type={props.type}
                className={cn("flex justify-between items-center  text-white bg-[#0B83CC] rounded-full w-[220px] h-[56px] pl-5 pr-3 hover:bg-opacity-50 transition-all ease-in hover:text-black", props.customStyles, elementStyles)}>
            <span className={"font-medium text-[14px]"}>{props.text}</span>
            <div className={"relative h-[44px] w-[44px]"}>
                <Image src={props.icon} alt={"button-icon"} fill className={"object-contain"}/>
            </div>
        </button>
    );
};

export default Button;