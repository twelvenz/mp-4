import { LocationData } from "@/types";

export default function Card({ location }: { location: LocationData | null }) {
    if (!location) return null;

    return (
        <div className="bg-white rounded-lg p-4 mb-6 shadow text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2 capitalize">
                {location.requested_location}
            </h2>

            <p className="text-lg text-gray-700 mb-1">
                {location.datetime}
            </p>

            <p className="text-gray-600">
                {location.timezone_name} ({location.timezone_abbreviation})
            </p>
        </div>
    );
}