import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../public/styles/global.css";
import "../public/styles/loader.css";
import { Provider } from "next-auth/client";
import Script from "next/script";

export default function Application({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#20245D" />
                <meta name="apple-mobile-web-app-status-bar" content="#20245D" />
                <link rel="apple-touch-icon" href="/images/logosm.png" />
                <link rel="shortcut icon" href="/images/logotrans.png" type="image/x-icon" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />

                <meta property="og:url" content="https://cesiumlabs.xyz" />
                <meta property="og:title" content="Cesium Labs" />
                <meta property="og:description" content="Lets code together in language we love" />
                <meta property="og:image" content="/images/logo.png" />

                <meta property="url" content="https://cesiumlabs.xyz" />
                <meta property="title" content="Cesium Labs" />
                <meta name="description" content="Lets code together in language we love" />
                <meta property="image" content="/images/logo.png" />

                <meta property="twitter:url" content="https://cesiumlabs.xyz" />
                <meta property="twitter:title" content="Cesium Labs" />
                <meta property="twitter:description" content="Lets code together in language we love" />
                <meta property="twitter:image" content="/images/logo.png" />

                <script async src="https://arc.io/widget.min.js#pz4jzKoL"></script>

                <title>Cesium Labs</title>
            </Head>
            <Script src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{'token': '875d5bef213248eab3f9a6c3c1c3d546'}"></Script>
            <Provider options={{ clientMaxAge: 0, keepAlive: 0 }} session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
