"use client";

import { getCheckData } from "@/app/api/get-time-data/action";
import {useState} from "react";
import {LocationData} from "@/types";
import Card from "@/app/components/card";

export default function CheckTime(){

    const [location, setLocation] = useState<LocationData | null>(null);

    const checkSearch = async (formData : FormData) => {
        const location = formData.get("location") as string;
        const { data } = await getCheckData(location);
        console.log(data);

        if (data) {
            setLocation(data);
        }

    }
    return (
        <div className="w-100 mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Check Time At Another Location
                </h1>
                <p className="text-gray-600">
                    Enter any location to see current time
                </p>
            </div>

            <form action={checkSearch} className="mb-6">
                <div className="flex mb-6">
                    <input
                        name="location"
                        type="text"
                        placeholder="e.g. Paris, London, Tokyo"
                        className="flex-1 p-2 bg-white border border-gray-300 rounded-lg"
                        required
                    />

                    <button
                        type="submit"
                        className="m-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        See Time
                    </button>
                </div>
            </form>
            <Card location={location} />
        </div>
    )
}