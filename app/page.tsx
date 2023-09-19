import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center">
      <div className={"h-full w-full flex flex-col items-center gap-6"}>
        <div className={"flex flex-col items-center"}>
            <div className={"relative flex w-[400px] h-[318px]"}>
                <Image src={"/logo-up.svg"} alt={"logo"} fill className={"object-center"}/>
            </div>
            <p className={"text-4xl"}>Travel Planner</p>
        </div>
          <div>
              <Button icon={"/logo-right.svg"} text={"Sign In to Continue"} variant={"primary"} />
          </div>
      </div>
    </main>
  )
}
