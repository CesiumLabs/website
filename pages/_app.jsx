import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../public/styles/global.css";
import "../public/styles/loader.css";
import { Provider } from "next-auth/client";

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

                <meta property="og:url" content="https://snowflakedev.org" />
                <meta property="og:title" content="SnowflakeDev Community ❄" />
                <meta property="og:description" content="Lets code together in language we love" />
                <meta property="og:image" content="/images/logo.png" />

                <meta property="url" content="https://snowflakedev.org" />
                <meta property="title" content="SnowflakeDev Community ❄" />
                <meta name="description" content="Lets code together in language we love" />
                <meta property="image" content="/images/logo.png" />

                <meta property="twitter:url" content="https://snowflakedev.org" />
                <meta property="twitter:title" content="SnowflakeDev Community ❄" />
                <meta property="twitter:description" content="Lets code together in language we love" />
                <meta property="twitter:image" content="/images/logo.png" />

                <script async src="https://arc.io/widget.min.js#pz4jzKoL"></script>

                <title>SnowflakeDev Community ❄</title>
            </Head>
            <Provider options={{ clientMaxAge: 0, keepAlive: 0 }} session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
