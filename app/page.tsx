import Card from "@/app/components/card";
import { getCheckData } from "@/app/api/get-time-data/action";

export default async function Home() {
    const { data } = await getCheckData("Boston, MA");
    if (!data) return <p>loading data...</p>;

    return (
        <>
            <div className="w-100 mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Current Time in Boston, MA
                    </h1>
                    <p className="text-gray-600">
                        Local time information
                    </p>
                </div>
                <Card location={data} />
            </div>
        </>
    );
}