const BASE_URL= 'https://swapi.dev/api/starships'

async function index(){
    try{
        const res= await fetch(BASE_URL)
        const data= await res.json();
        return data;
    }catch(error){
        console.log(error)
    }
}
index()

export {
    index,
}