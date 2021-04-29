import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Component } from "react";
import { PROJECTS } from "../config";

export default class Projects extends Component {

    render() {
        return (
            <div className="bg-gray-900">
                <Navbar />
                <div>
                    <section class="text-gray-200 bg-gray-900 min-h-screen">
                        <div class="max-w-6xl mx-auto px-5 py-24 ">
                            <div class="text-center mb-20">
                                <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                    Projects
                                </h1>
                                <div class="flex mt-6 justify-center">
                                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -m-4">
                               {
                                    PROJECTS.map((m, i) => <div key={i} class="lg:w-1/3 w-full p-4">
                                        <div class="border border-gray-300 p-6 rounded-lg">
                                            <h2 class="text-lg  font-medium title-font mb-2">{m.name}</h2>
                                            <p class="leading-relaxed text-base">{m.description}</p>

                                            <div className="flex justify-center lg:justify-start mt-6">
                                                <a
                                                    className="mx-4 px-6 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded-sm hover:bg-gray-400"
                                                    href={m.github}
                                                >
                                                    GitHub
                                                </a>
                                                <a
                                                    className="mx-4 px-6 py-3 bg-blue-500 text-gray-200 text-xs font-semibold rounded-sm hover:bg-blue-600"
                                                    href={m.docs}
                                                >
                                                    Documentation
                                                </a>
                                            </div>

                                        </div>
                                    </div>)
                               }
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }
}
