import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js";
import { getData } from "./getData.js"

//создадим функцию для рендера товаров на странице
export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`); //объединяем переменные из Const для запроса с сервера
    
    const listCard = listProduct.map(createCardProduct);
    //console.log('listCard: ', listCard);
    catalogList.append(...listCard);
}