import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import { LOGIN_URL, LOGIN_API } from "../config";
import { Component } from "react";

export default class App extends Component {
    constructor(...props) {
        super(...props);
    }

    componentDidMount() {
        if (window.sessionStorage.getItem("user_data")) return (window.location.href = "/me");
        const login_code = new URL(window.document.location).searchParams.get("code") ?? localStorage.getItem("access_token");
        if (!login_code || login_code === "undefined") {
            location.href = LOGIN_URL;
        } else if (login_code && login_code !== "undefined") {
            fetch(`${window.location.origin}/api/login${!localStorage.getItem("access_token") ? `?code=${login_code}` : ""}`, {
                headers: {
                    REDIRECT_URI: window.location.toString().split("?")[0],
                    Authorization: `${login_code}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    data = data.data.data || data.data;
                    if (!data || data.error) {
                        alert("Login failed, try again later");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 2000);
                        return;
                    }
                    if (data.accessToken) window.localStorage.setItem("access_token", data.accessToken);
                    window.location.href = "/me";
                })
                .catch((e) => {
                    window.location.href = LOGIN_URL;
                });
        }
    }

    render() {
        return (
            <div className="bg-gray-900">
                <Navbar />
                <Home />
                <Footer />
            </div>
        );
    }
}
