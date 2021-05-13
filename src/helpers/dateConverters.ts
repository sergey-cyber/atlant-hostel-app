//Принимает дату в формате "2021-05-03 09:41" и превращает ее в "03.05.2021, 09:41"

export const dateConverter = (date:string):string => {
    const convertedDate = new Date(date).toLocaleString().substr(0,17)

    return convertedDate;
}

