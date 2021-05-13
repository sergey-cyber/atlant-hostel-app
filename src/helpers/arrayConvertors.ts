//Преобразовывает массив массивов в единый массив
//Пример [[1,2],[3,4],[5,6]] -> [1,2,3,4,5,6]
export const arrayConvertor = (array:Array<any>):Array<any> => {
    let result:Array<any> = [];
    array.forEach((el) => {
        if(Array.isArray(el)) {
            result = [...result, ...arrayConvertor(el)]
        } else {
            result.push(el);
        }
    });
    return result;
}

//Хэлпер для установки периода дат бронирования для выбранного места
//Принимает массив beds, номер места в котором нужно установить период бронирования 
//и массив с датами начала и конца периода бронирования/
//Возвращает обновленный массив beds
export const changeHardArrayInsides = (array:Array<any>, id: string, dateRange:[string,string]):Array<any> => { 
    let result:Array<any> = []; 
    array.forEach((obj) => { 
        obj.places.forEach((el:any) => { 
            if(String(el.id) === id) { 
                el.bookingPeriod = [...dateRange]; 
            }  
        }); 
        result.push(obj);     
    }) 
    return result; 
} 