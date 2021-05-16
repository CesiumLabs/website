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
                <meta name="apple-mobile-web-app-status-bar" content="#4D5E94" />
                <link rel="apple-touch-icon" href="/images/logosm.png" />
                <link rel="shortcut icon" href="/images/logotrans.png" type="image/x-icon" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />

                <meta property="og:url" content="https://snowflakedev.xyz" />
                <meta property="og:title" content="Snowflake Studio ❄" />
                <meta property="og:description" content="We are a community focused on programming; No matter if we know how to provide support or not we may be able to redirect you somewhere that might!" />
                <meta property="og:image" content="/images/logo.png" />

                <meta property="url" content="https://snowflakedev.xyz" />
                <meta property="title" content="Snowflake Studio ❄" />
                <meta name="description" content="We are a community focused on programming; No matter if we know how to provide support or not we may be able to redirect you somewhere that might!" />
                <meta property="image" content="/images/logo.png" />

                <meta property="twitter:url" content="https://snowflakedev.xyz" />
                <meta property="twitter:title" content="Snowflake Studio ❄" />
                <meta property="twitter:description" content="We are a community focused on programming; No matter if we know how to provide support or not we may be able to redirect you somewhere that might!" />
                <meta property="twitter:image" content="/images/logo.png" />

                <script async src="https://arc.io/widget.min.js#6TjnmPuK"></script>

                <title>Snowflake Studio ❄</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
