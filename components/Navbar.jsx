import { NAV } from "../config";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Navbar() {
    const [session] = useSession();

    return (
        <section>
            <nav className="relative py-6 bg-gray-800">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/">
                        <a className="text-3xl font-bold leading-none">
                            <img className="h-12" src="/images/logo.png" alt="logo" width="auto" />
                        </a>
                    </Link>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center text-gray-400 p-3" onClick={() => document.getElementById("mobileNav").classList.remove("hidden")}>
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        {NAV.map((m, i) => (
                            <li key={i}>
                                {m.external ? (
                                    <a className="text-sm text-gray-200 font-semibold hover:text-gray-400" key={i} href={m.path}>
                                        {m.label}
                                    </a>
                                ) : (
                                    <Link href={m.path}>
                                        <a className="text-sm text-gray-200 font-semibold hover:text-gray-400" key={i}>
                                            {m.label}
                                        </a>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <a
                        className="hidden lg:inline-block py-2 px-6 blurple text-sm text-white font-semibold rounded-sm transition duration-200"
                        href={!session ? "/api/auth/signin" : "/me"}
                        onClick={(e) => {
                            if (!session) {
                                e.preventDefault();
                                signIn();
                            }
                        }}
                    >
                        {session ? session.user.name : "Login"}
                    </a>
                </div>
            </nav>

            <div className="hidden navbar-menu relative z-50" id="mobileNav">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 overflow-y-auto bg-gray-800">
                    <div className="flex items-center mb-8">
                        <Link href="/">
                            <a className="mr-auto text-3xl font-bold leading-none">
                                <img className="h-10" src="/images/logo.png" alt="logo" width="auto" />
                            </a>
                        </Link>
                        <button className="navbar-close" onClick={() => document.getElementById("mobileNav").classList.add("hidden")}>
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            {NAV.map((m, i) =>
                                m.external ? (
                                    <li className="mb-1" key={i}>
                                        <a key={i} className="block p-4 text-sm font-semibold text-gray-200 hover:bg-gray-200 hover:text-gray-600 rounded" href={m.path}>
                                            {m.label}
                                        </a>
                                    </li>
                                ) : (
                                    <li className="mb-1" key={i}>
                                        <Link href={m.path}>
                                            <a key={i} className="block p-4 text-sm font-semibold text-gray-200 hover:bg-gray-200 hover:text-gray-600 rounded">
                                                {m.label}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a
                                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold rounded-sm blurple"
                                href={!session ? "/api/auth/signin" : "/me"}
                                onClick={(e) => {
                                    if (!session) {
                                        e.preventDefault();
                                        signIn();
                                    }
                                }}
                            >
                                {session ? session.user.name : "Login"}
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}
