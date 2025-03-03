// file: calcStatsFromAPI.js
// import { loadData } from './loadfunc';
// import { calcStats } from './calcStats'; 
const loadfunc = require('./loadfunc');
const calcStats = require('./calcStats');
async function calcStatsfromAPI() {
    let results = await loadfunc.loadData();
    return calcStats(results);
}
//     try {
        
//         const catsInfo = await loadData();

        
//         return calcStats(catsInfo);
//     } catch (error) {
//         console.error("Ошибка при загрузке данных или расчете статистики:", error);
//         throw error;
//     }
// }

module.exports.calcStatsfromAPI = calcStatsfromAPI;