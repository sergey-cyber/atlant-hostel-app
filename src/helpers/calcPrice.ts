// Принимает массив строк с выбранными датами бронирования и возвращает число - стоимоть за эти дни

export const calcPrice = (datesRange: Array<Date>, bedId: string): number => {
  const bedNumber = Number(bedId);
  const price = bedNumber === 9 ? 42 : 21;
  const t2 = new Date(datesRange[1]).getTime();
  const t1 = new Date(datesRange[0]).getTime();

  const diff = (t2 - t1) / (3600 * 1000);
  const result = Math.ceil(diff) * price;
  console.log(diff);
  return result;
};
