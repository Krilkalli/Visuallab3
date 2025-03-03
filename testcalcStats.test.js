const loadfunc = require('./loadfunc');
const calmodule = require('./calcStatsfromAPImodule');

test("test", async () => {
    const fMock = jest.spyOn(loadfunc, "loadData");
    fMock.mockImplementation(() => new Promise(resolve => resolve([
        {
            breed: 'Turkish Van',
            country: 'developed in the United Kingdom (founding stock from Turkey)',
            origin: 'Natural',
            coat: 'Semi-long',
            pattern: 'Van'
        },
        {
            breed: 'York Chocolate',
            country: 'United States (New York)',
            origin: 'Natural',
            coat: 'Long',
            pattern: 'Solid'
        },
        {
            breed: 'York Chocolate',
            country: 'United States (New York)',
            origin: 'Natural',
            coat: 'Long',
            pattern: 'Solid'
        }
       ])));
    let res = await calmodule.calcStatsfromAPI();
    expect(loadfunc.loadData).toHaveBeenCalledTimes(1);
    fMock.mockRestore();
    expect(res).toEqual(
        {
            "developed in the United Kingdom (founding stock from Turkey)": 1,
            "United States (New York)": 2
        }
    );
});

//file: calcStatsFromAPI.test.js
// import { calcStatsfromAPI } from './calcStatsfromAPI';
// import { loadData } from './loadfunc'; // Импортируем функцию loadData

// // Подмена функции loadData
// jest.mock('./loadData');

// describe('calcStatsfromAPI', () => {
//     it('should return correct stats from loaded data', async () => {
//         // Определение тестовых данных
//         const mockData = [
//             { breed: "Siamese", country: "Thailand", origin: "Asia", coat: "Short", pattern: "Colorpoint" },
//             { breed: "Maine Coon", country: "USA", origin: "North America", coat: "Long", pattern: "Solid" },
//             { breed: "Sphynx", country: "Canada", origin: "North America", coat: "Hairless", pattern: "Solid" },
//             { breed: "Bengal", country: "USA", origin: "North America", coat: "Short", pattern: "Spotted" },
//             { breed: "Persian", country: "Iran", origin: "Asia", coat: "Long", pattern: "Solid" },
//         ];

//         // Задаем mock-возвращаемое значение для loadData
//         loadData.mockResolvedValue(mockData);

//         // Выполняем функцию
//         const stats = await calcStatsfromAPI();

//         // Проверяем, что результат соответствует ожидаемому значению
//         expect(stats).toEqual({
//             Thailand: 1,
//             USA: 2,
//             Canada: 1,
//             Iran: 1,
//         });
//     });

//     it('should handle errors properly', async () => {
//         // Настройка mock, чтобы вызвать ошибку
//         loadData.mockRejectedValue(new Error('Network error'));

//         // Проверяем, что функция выбрасывает ошибку
//         await expect(calcStatsfromAPI()).rejects.toThrow('Network error');
//     });
// });