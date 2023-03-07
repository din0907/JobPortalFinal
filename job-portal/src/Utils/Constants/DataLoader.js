import { stateUrl,districtUrl,cityUrl } from "./constant";

export const stateDataLoader = async() => {
    const stateData = await fetchStateData();
    const districtData = await featchDistrictData(stateData[0].id);
    const cityData = await featchCityData(districtData[0].id);
    return {
        stateData,
        districtData,
        cityData
    }
}

export const fetchStateData = async() => {
    const response = await fetch(stateUrl);
    if (!response.ok) {
        //return { isError: true, message:'could not featch data!'}
       /*  throw new Response(JSON.stringify({message:'could not featch'}),{status:500}) */
       return json({message:"could not featch"}, {
        status:500
       })
    } else {
        const data = await response.json();
        return data;
    }
}

export const featchDistrictData = async(id) => {
    const url = districtUrl + id;
    const response = await fetch(url);
    if (!response.ok) {
        //return { isError: true, message:'could not featch data!'}
       /*  throw new Response(JSON.stringify({message:'could not featch'}),{status:500}) */
       return json({message:"could not featch"}, {
        status:500
       })
    } else {
        const data = await response.json();
        return data;
    }
}

export const featchCityData = async(id) => {
    const url = cityUrl + id;
    const response = await fetch(url);
    if (!response.ok) {
        //return { isError: true, message:'could not featch data!'}
       /*  throw new Response(JSON.stringify({message:'could not featch'}),{status:500}) */
       return json({message:"could not featch"}, {
        status:500
       })
    } else {
        const data = await response.json();
        return data;
    }
}