import Link from "next/link";
import { LINKS } from "../config";

export default function Footer() {
    return (
        <div className="bg-gray-800 py-10">
            <div className="container mx-auto">
                <h1 className="text-center text-gray-300 text-2xl">
                    <Link href="/">CesiumLab Community</Link>
                </h1>
                <p className="text-center text-gray-300">Community of Developers and Creators.</p>
                <p className="text-center text-gray-300 mt-10">
                    <img
                        src="/images/vercel.svg"
                        alt="Powered by Vercel"
                        className="mx-auto mb-4 cursor-pointer"
                        draggable="false"
                        onClick={() => {
                            window.location.href = "https://vercel.com/?utm_source=snowflakedev&utm_campaign=oss";
                        }}
                    />
                    © <a href={LINKS.GITHUB}>CesiumLab Community</a> - {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}
