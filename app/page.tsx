import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
    return (
        <main className={'flex items-center justify-center min-w-screen min-h-screen'}>
            <div className={"h-screen justify-center max-w-screen-xl w-full gap-6 flex flex-col items-center"}>
                <div className={"relative flex w-[350px] h-[350px]"}>
                    <Image src={"/globe.svg"} alt={"logo"} fill className={"object-contain"}/>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative flex w-[400px] h-[318px]"}>
                        <Image src={"/logo-up.svg"} alt={"logo"} fill className={"object-contain"}/>
                    </div>
                    <p className={"text-4xl"}>Travel Planner</p>
                </div>
                <div>
                    <Button icon={"/logo-right.svg"} text={"Sign In to Continue"} variant={"link"} link={"/login"}
                    />
                </div>
            </div>
        </main>
    )
}
