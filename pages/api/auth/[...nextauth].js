import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.Discord({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            scope: "identify",
            protection: "state",
        }),
    ],
    secret: process.env.SESSION_SECRET,
    session: {
        jwt: true,
        maxAge: 10 * 60 * 60,
    },
    jwt: {
        encryption: true,
    },
    callbacks: {
        async session(session, userOrToken) {
            return { ...session, data: userOrToken.data ?? null };
        },
        async jwt(token, _user, _account, profile, _isNewUser) {
            if (profile) token.data = profile;
            return token;
        },
    },
};

export default (req, res) => NextAuth(req, res, options);
