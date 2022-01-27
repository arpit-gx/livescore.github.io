//const API_KEY = "";

export const getMatches = () => {
    const url= `https://cricapi.com/api/matches?apikey=JpOkehYBrFcbjfhcFLk4dGDCKar2`;

    return fetch(url).then((response) => response.json()).catch((error)=>console.log("ERROR:", error));
}

export const getMDetails=(id)=>{
    const url = `https://cricapi.com/api/cricketScore?apikey=JpOkehYBrFcbjfhcFLk4dGDCKar2&unique_id=${id}`
return fetch(url).then((response) => response.json()).catch((error)=>console.log(error));
}