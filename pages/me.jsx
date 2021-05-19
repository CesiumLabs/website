import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { LOGIN_API, LOGIN_URL } from "../config";
import UserProfile from "../components/UserProfile";

export default function Me() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem("access_token")) window.location.href = "/login";

        if (!user)
            fetch(`https://cors-anywhere.snowflakedev.xyz/${LOGIN_API}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    origin: window.location.href,
                    "x-requested-with": "NodeFetch",
                },
            })
                .then((res) => res.json())
                .then((user) => {
                    if (!user.success && user.code === 1014) {
                        localStorage.removeItem("access_token");
                        return (window.location.href = LOGIN_URL);
                    } else {
                        if (!user.data || !user.data.id) return (window.location.href = LOGIN_URL);
                        setUser(user.data);
                        window.sessionStorage.setItem("user_data", "true");
                    }
                })
                .catch(() => {
                    window.location.href = LOGIN_URL;
                });
    });

    if (!user)
        return (
            <div className="bg-gray-900">
                <Navbar />
                <div className="container mx-auto text-center min-h-screen">
                    <h1 className="text-center text-gray-200 text-3xl mt-10">Fetching data...</h1>
                </div>
                <Footer />
            </div>
        );

    return (
        <div className="bg-gray-900">
            <Navbar login={true} />
            <div className="container mx-auto text-center min-h-screen">
                <UserProfile user={user} />
            </div>
            <Footer />
        </div>
    );
}
