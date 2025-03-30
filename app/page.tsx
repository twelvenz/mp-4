import Card from "@/app/components/card";
import { getCheckData } from "@/app/api/get-time-data/action";

export default async function Home() {
    const { data } = await getCheckData("Boston, MA");
    if (!data) return <p>loading data...</p>;

    return (
        <>
            <div className="w-100 mx-auto">

                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Current Time in Boston, MA
                    </h1>
                    <p className="text-gray-600 mb-5">
                        Please refresh if this does not load..
                    </p>

                    <Card location={data} />

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