import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Card from "../components/Card";
import { Component } from "react";
import Loading from "../components/Loader";

export default class Team extends Component {
    constructor(...props) {
        super(...props);

        this.state = { staffs: [], loading: true };
    }

    componentDidMount() {
        fetch("https://api.snowflakedev.xyz/api/d/staffs")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ staffs: data.data ?? [], loading: false });
            })
            .catch(() => {
                this.setState({ staffs: [], loading: false });
            });
    }

    render() {
        return this.state.loading ? (
            <Loading />
        ) : (
            <div className="bg-gray-900">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/pattern.css"
                    />
                </Head>

                <Navbar />
                <div>
                    <section className="text-gray-200 bg-gray-900 min-h-screen">
                        <div className="max-w-6xl mx-auto px-5 py-24 ">
                            <div className="text-center mb-20">
                                <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                    Team
                                </h1>
                                <div className="flex mt-6 justify-center">
                                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                {this.state.staffs?.length ? (
                                    this.state.staffs
                                        .sort(
                                            (a, b) =>
                                                a.username.charCodeAt() -
                                                b.username.charCodeAt()
                                        )
                                        .map((m, i) => (
                                            <Card
                                                key={i}
                                                image={m.avatar}
                                                title={m.username}
                                                description={
                                                    m.id ===
                                                    "735446893152305192"
                                                        ? "Founder"
                                                        : m.admin
                                                        ? "Administrator"
                                                        : "Moderator"
                                                }
                                            />
                                        ))
                                ) : (
                                    <h1 className="text-gray-200 text-xl text-center">
                                        Could not fetch data!
                                    </h1>
                                )}
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }
}
