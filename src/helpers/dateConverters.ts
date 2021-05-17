//Принимает дату в формате "2021-05-03 09:41" и превращает ее в "03.05.2021, 09:41"

export const dateConverter = (date:string):string => {
    //Приводим дату к читаемому формату и обрезаем секунды
    const convertedDate = new Date(date).toLocaleString();
    console.log(convertedDate.substring(0, convertedDate.length - 3))
    return convertedDate.substring(0, convertedDate.length - 3);
}

