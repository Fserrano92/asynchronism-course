const fetchData = require('../Util/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFuntion = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(url_api + '/' + data.results[0].id);
        const dimension = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(dimension.dimension);
    } catch (error){
        console.error(error);
    }
}

console.log('Antes');
anotherFuntion(API);
console.log('Despues');