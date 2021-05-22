import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Me() {
    const [session] = useSession();

    if (!session)
        return (
            <div className="bg-gray-900">
                <Navbar />
                <div className="container mx-auto text-center min-h-screen">
                    <h1 className="text-center cursor-pointer blurple-txt font-semibold text-3xl mt-10">
                        You are not logged in!{" "}
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                signIn();
                            }}
                        >
                            Login Here
                        </a>
                    </h1>
                </div>
                <Footer />
            </div>
        );

    return (
        <div className="bg-gray-900">
            <Navbar login={true} />
            <div className="container mx-auto text-center min-h-screen">
                <UserProfile user={session.data} />
            </div>
            <Footer />
        </div>
    );
}
