export default function Card({ image, description, title, uid }) {
    const getanimated = (i) => {
        i.src = i.src.includes("a_") ? i.src.replace(".webp", ".gif") : i.src;
    };

    return (
        <div
            className="lg:w-1/3 w-full p-4"
            onMouseOver={(e) => {
                try {
                    getanimated(document.getElementById(`avatar_${uid}`));
                } catch {}
            }}
            onMouseOut={(e) => {
                try {
                    document.getElementById(`avatar_${uid}`).src = image;
                } catch {}
            }}
        >
            <div className="border border-gray-300 p-6 rounded-lg w-full hover:bg-gray-800 cursor-pointer">
                <div className="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-4">
                    <a href={image} target="_blank">
                        <img src={image ?? "/images/logo.png"} draggable="false" className="rounded-xl cursor-pointer" id={`avatar_${uid}`} />
                    </a>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">{title ?? "Card"}</h2>

                <div className="text-center mt-2 leading-none flex justify-between w-full">
                    <span className=" mr-3 inline-flex items-center leading-none text-sm py-1">{description}</span>
                </div>
            </div>
        </div>
    );
}
