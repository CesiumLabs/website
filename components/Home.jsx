import { LINKS, YOUTUBE_CHANNEL_ID } from "../config";
import { Component } from "react";

export default class Home extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            video: "https://www.youtube.com/embed/SYKT8r4fSCA?controls=1&showinfo=0&rel=0",
        };
    }

    componentDidMount() {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`)}`)
            .then((res) => res.json())
            .then((data) => {
                const videoData = data.items[0];
                const id = videoData.link.substr(videoData.link.indexOf("=") + 1);
                const videoURL = `https://youtube.com/embed/${id}?controls=1&showinfo=0&rel=0`;
                this.setState({ video: videoURL });
            })
            .catch((e) => {});
    }

    render() {
        return (
            <div className="container mx-auto text-center min-h-screen">
                <div className="lg:hidden pb-10 pt-3 border-b border-gray-600">
                    <div className="flex items-center text-center px-8 md:px-12">
                        <div>
                            <img src="/images/logotrans.png" alt="logo" className="w-28 h-28 mx-auto" />
                            <h2 className="text-3xl font-semibold text-gray-200 md:text-4xl">
                                Welcome To <span className="blurple-txt">Snowflake Studio</span>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 md:text-base">We are a community focused on programming; No matter if we know how to provide support or not, we may be able to redirect you somewhere that might!</p>
                            <div className="flex justify-center lg:justify-start mt-6">
                                <a className="mx-4 px-6 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded-sm hover:bg-gray-400" href={LINKS.GITHUB}>
                                    GitHub
                                </a>
                                <a className="mx-4 px-6 py-3 blurple text-gray-200 text-xs font-semibold rounded-sm" href={LINKS.DISCORD}>
                                    Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block pb-10 pt-3 border-b border-gray-600">
                    <div className="flex bg-gray-900 h-96" style={{ height: "600px" }}>
                        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-200 md:text-4xl">
                                    Welcome To <span className="blurple-txt">Snowflake Studio</span>
                                </h2>
                                <p className="mt-2 text-sm text-gray-500 md:text-base">We are a community focused on programming; No matter if we know how to provide support or not, we may be able to redirect you somewhere that might!</p>
                                <div className="flex justify-center lg:justify-start mt-6">
                                    <a className="mx-4 px-6 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded-sm hover:bg-gray-400" href={LINKS.GITHUB}>
                                        GitHub
                                    </a>
                                    <a className="mx-4 px-6 py-3 blurple text-gray-200 text-xs font-semibold rounded-sm" href={LINKS.DISCORD}>
                                        Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 hbs">
                            <div className="h-full object-cover coverpg">
                                <div className="h-full bg-black opacity-25"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10">
                    <div className="border-b border-gray-600">
                        <div className="text-center pb-5">
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-200 md:text-4xl">
                                    About <span className="blurple-txt">Snowflake Studio</span>
                                </h2>
                                <p className="mt-2 text-sm text-gray-500 md:text-base">We are a community focused on programming.</p>
                                <p className="text-sm text-gray-500 md:text-base">We help in Discord Bot Development, Web Development, Discord Bot Hosting, etc.</p>
                                <p className="text-sm text-gray-500 md:text-base">
                                    We also make{" "}
                                    <a className="blurple-txt font-semibold cursor-pointer" href="https://www.youtube.com/channel/UCvklmpoAZntoOpr7EyTierA">
                                        YouTube
                                    </a>{" "}
                                    videos related to Discord Bot Development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-semibold text-gray-200 md:text-4xl py-3">
                            Latest <span className="blurple-txt">Video</span>
                        </h2>
                        <iframe className="mx-auto" src={this.state.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: "80%", height: "65vh" }}></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
