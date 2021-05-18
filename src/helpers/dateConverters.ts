import { format } from 'date-fns';

//Принимает дату и превращает ее в строку формата "03.05.2021, 09:41"
export const dateConverter = (date:string):string => {
    //Приводим дату к читаемому формату и обрезаем секунды
    const convertedDate = format(new Date(date), 'dd.MM.yyyy, HH:mm'); 
    return convertedDate;
}

