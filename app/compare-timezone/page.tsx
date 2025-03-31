"use client";

import { getCompareData } from "@/app/api/get-time-data/action";
import { useState } from "react";
import { LocationData } from "@/types";
import Card from "@/app/components/card";

export default function CompareTime() {
    const [locations, setLocations] = useState<{ myLoc: LocationData|null; targetLoc: LocationData|null }>({myLoc: null, targetLoc: null});

    const compareSearch = async (formData: FormData) => {
        const myLoc = formData.get("myLoc") as string;
        const targetLoc = formData.get("targetLoc") as string;

        const { data } = await getCompareData(myLoc, targetLoc);

        if (data && data.base_location.datetime && data.target_location.datetime) {
            setLocations({myLoc: data.base_location, targetLoc: data.target_location});
        } else {
            setLocations({myLoc: null, targetLoc: null});
        }
    };

    return (
        <div className="w-100 m-auto">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Compare Time Between Locations
                </h1>
                <p className="text-gray-600">
                    Enter two locations to compare their times
                </p>
            </div>

            <form action={compareSearch} className="mb-6">

                <div>
                    <label htmlFor="myLoc" className="block font-medium text-gray-700 mb-3">
                        Location 1:
                    </label>
                    <input
                        name="myLoc"
                        type="text"
                        placeholder="e.g. Boston"
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg mb-3 "
                        required
                    />
                </div>

                <div>
                    <label htmlFor="targetLoc" className="block font-medium text-gray-700 mb-3">
                        Location 2:
                    </label>
                    <input
                        name="targetLoc"
                        type="text"
                        placeholder="e.g. Shanghai"
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg mb-3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Compare Times
                </button>
            </form>
            <Card location={locations.myLoc} />
            <Card location={locations.targetLoc} />
        </div>
    );
}