import React from "react";
import { signOut } from "next-auth/client";

export default function UserProfile({ user }) {
    return (
        <div className="mt-10">
            <div className="container mx-auto px-8">
                <div className="px-10">
                    <div className="mb-4">
                        <img className="rounded-lg ml-auto mr-auto" src={`${user.image_url.replace(".gif", ".webp").replace(".png", ".webp")}?size=256`} onMouseOver={(e) => (e.target.src.includes("a_") ? (e.target.src = e.target.src.replace(".webp", ".gif")) : null)} onMouseOut={(e) => (e.target.src = e.target.src.replace(".gif", ".webp"))} draggable="false" />
                    </div>
                    <div className="mb-4">
                        <div className="text-3xl font-semibold text-gray-200">{user.username}</div>
                        <div className="text-xl text-gray-200 font-medium opacity-50">#{user.discriminator}</div>
                    </div>
                    <div className="pb-6 text-center border-b border-gray-500">
                        <h3 className="no-underline text-md text-gray-300">
                            My ID: <code className="bg-gray-600 px-1 text-white">{user.id}</code>
                        </h3>
                    </div>
                    <div className="mt-4">
                        <button
                            className="blurple p-3 text-white rounded-sm cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                signOut();
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
