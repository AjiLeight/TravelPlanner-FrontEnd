import React from 'react';
import SignOutButton from "@/components/Auth/SignOutButton";

const Dashboard = () => {
    return (
        <div className={"flex flex-col gap-4 justify-center items-center h-screen"}>
            Dashboard
            <div>
                <SignOutButton/>
            </div>
        </div>
    );
};

export default Dashboard;