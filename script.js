// Unsplash API
const count=10;
cons apiKey='QqNr1EyschtHEyNwv0eR09kmd3d2fBoRE63Axq7JtbIt8H0ajyK9781kO5TSWj5uddWftcw1uYXrT_Jj-PSxT4';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
        const data=await response.json();
        console.log(data);
    }catch(error){
        // Catch error here
    }
}

// On load
getPhotos();