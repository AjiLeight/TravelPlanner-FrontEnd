import React from 'react';
import SignOutButton from "@/components/Auth/SignOutButton";
import {getAuthSessionUser} from "@/utils/authUtils";

const Dashboard = async () => {
    const user = await getAuthSessionUser()
    return (
        <div className={"flex flex-col gap-4 justify-center items-center h-screen"}>
            Dashboard - {user?.email} You are a {user?.role}
            <div>
                <SignOutButton/>
            </div>
        </div>
    );
};

export default Dashboard;