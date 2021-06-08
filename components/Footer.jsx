import Link from "next/link";
import { LINKS } from "../config";

export default function Footer() {
    return (
        <div className="bg-gray-800 py-10">
            <div className="container mx-auto">
                <h1 className="text-center text-gray-300 text-2xl">
                    <Link href="/">SnowflakeDev Community ❄</Link>
                </h1>
                <p className="text-center text-gray-300">Community of Developers and Creators.</p>
                <p className="text-center text-gray-300 mt-10">
                    © <a href={LINKS.GITHUB}>SnowflakeDev Community ❄</a> - {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}
