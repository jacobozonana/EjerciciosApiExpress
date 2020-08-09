// Los imports siempre deben ir hasta arriba, antes de esto, se debe dar en consola npm init (tambien se puede "npm init --yes" y te da todos los valores por default) y npm install axios y npm install request
const request = require('request');
const axios = require ('axios');


const getswapi = ()=>{
    const URL = 'https://swapi.dev/api/people/40/'
    axios.get(URL)
    .then((res)=>{
        console.log(res.data.name)
    })
    .catch((err)=>{
        console.log(err)
    })
}

getswapi()


const getaudioDB = ()=>{
    const KEY = 1
    const URL = `https://theaudiodb.com/api/v1/json/${KEY}/search.php?s=coldplay`
    axios.get(URL)
    .then((res)=>{
        console.log(res.data.artists[0].strArtist)
    })
    .catch ((err)=>{
        console.log(err)
    })
}

getaudioDB()