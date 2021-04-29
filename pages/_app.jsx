import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../public/styles/global.css";
import "../public/styles/loader.css";

export default function Application({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#4D5E94" />
                <meta
                    name="apple-mobile-web-app-status-bar"
                    content="#4D5E94"
                />
                <link rel="apple-touch-icon" href="/images/logosm.png" />
                <link
                    rel="shortcut icon"
                    href="/images/logotrans.png"
                    type="image/x-icon"
                />
                <title>Snowflake Studio ❄</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
