export default function Card({ image, description, title }) {
    return (
        <div class="lg:w-1/3 w-full p-4">
            <div class="border border-gray-300 p-6 rounded-lg w-full">
                <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-4">
                    <img
                        src={image ?? "/images/logo.png"}
                        draggable="false"
                        className="rounded-xl"
                    />
                </div>
                <h2 class="text-lg  font-medium title-font mb-2">
                    {title ?? "Card"}
                </h2>

                <div class="text-center mt-2 leading-none flex justify-between w-full">
                    <span class=" mr-3 inline-flex items-center leading-none text-sm py-1 ">
                        {description}
                    </span>
                </div>
            </div>
        </div>
    );
}
