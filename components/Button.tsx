"use client"
import Image from "next/image";
import React, {FC} from "react";
import Link from "next/link";
import {cn} from "@/utils/tailwindUtils";

type ButtonPropTypes = {
    icon?: string
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
    const {variant, customStyles, text, icon, ...restProps} = props;
    let link = '';

    if (variant === 'link') {
        link = props.link;
    }
    const elementStyles = {
        "bg-[#0B83CC] shadow-[0px_0px_21px_7px_rgba(11,131,204,0.39)]": variant === "primary" || variant === 'link',
        "bg-[#F78251] shadow-[0px_0px_21px_7px_rgba(255,176,132,0.7)]": variant === "secondary"
    }
    return variant === 'link' ? (
        <Link href={link}
              className={cn("flex justify-between items-center text-white rounded-full w-[220px] h-[56px] pl-5 pr-3 hover:bg-opacity-50 transition-all ease-in hover:text-black", customStyles, elementStyles)}>
            <span className={"font-medium text-[14px]"}>{text}</span>
            <div className={"relative h-[44px] w-[44px]"}>
                <Image src={icon ? icon : "/logo-right.svg"} alt={"button-icon"} fill className={"object-contain"}/>
            </div>
        </Link>
    ) : (
        <button {...restProps}
                className={cn("flex justify-between items-center  text-white bg-[#0B83CC] rounded-full w-[220px] h-[56px] pl-5 pr-3 hover:bg-opacity-50 transition-all ease-in hover:text-black", customStyles, elementStyles)}
        >
            <span className={"font-medium text-[14px]"}>{text}</span>
            <div className={"relative h-[44px] w-[44px]"}>
                <Image src={icon ? icon : "/logo-right.svg"} alt={"button-icon"} fill className={"object-contain"}/>
            </div>
        </button>
    );
};

export default Button;