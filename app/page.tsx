import Image from "next/image";

export default async function Home() {

    return (
        <>
            <div className="w-100 mx-auto">

                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Timezone Checker App
                    </h1>
                    <p className="text-gray-600 mb-5">
                        No more converting times mentally
                    </p>

                    <Image
                        src="/clock.png"
                        width={300}
                        height={300}
                        alt="Image of a clock"
                        className="m-auto mb-6 p-5 w-80% h-auto"
                    />

                    <p className="text-l text-gray-700">
                        Click Check to check time of another location.
                    </p>
                    <p className="text-l text-gray-700">
                        Click Compare to compare time of two locations.
                    </p>
                </div>
            </div>
        </>
    );
}