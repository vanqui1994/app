export async function getData(apiURL) {
    try{
        let response = await fetch(apiURL);
        let responseJson = await response.json();
        return responseJson.data;
    }catch(error){
        console.error(`Error : ${error}`)
    }
}