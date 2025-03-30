"use server";

export async function getCheckData(location:string){
    const apiKey = process.env.TIMEZONE_API_KEY;
    try{
        const res = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey}&location=${location}`);
        const data = await res.json();
        return { data };
    } catch (error) {
        console.error(error);
        return {}
    }
}

export async function getCompareData(myLoc: string, targetLoc: string){
    const apiKey = process.env.TIMEZONE_API_KEY;
    try {
        const res = await fetch(
            `https://timezone.abstractapi.com/v1/convert_time?api_key=${apiKey}&base_location=${myLoc}&target_location=${targetLoc}`
        );
        const data = await res.json();
        return { data };
    } catch (error) {
        console.error(error);
        return {};
    }
}