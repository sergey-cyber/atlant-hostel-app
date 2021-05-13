/* import { createSelector } from "reselect"; */

//К простым селекторам не нужно подключать библиотеку reselect

export const getBeds = (state) => {
    return state.hostelData.beds;
}

export const getSelectedDates = (state) => {
    return state.hostelData.selectedDates;
}

//Пример селектора, созданного с помощью библеотеки reselect (Lesson 83)
//Нужен для создания сложных селекторов которые , например фильтруют массив.
//А фильтрация создает новый массив, поэтому в mapStateToProps прийдет новый объект и вызовет ненужную перересовку
//mapStateToProps вызывается всегда, независимо в какой ветке в стэйте что то изменилось
//А перересовку вызывается то что приходит в компонент через пропсы. 
//Фильтр массива вернет новый объект и даже если в массиве ничего не поменяется компонент перересуется
//Этот селектор принимает зависимости и только при их изменении вызывается
/* export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter((u) => true);
});  */
