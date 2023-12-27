import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { ingredientsList,
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    modalProductPriceCount,
    modalProduct, 
    modalProductBtn
} from "./elements.js";
    

import { getData } from "./getData.js";

export const openModal = async (id) => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`) //getData(`${API}${PREFIX_PRODUCT}/${id}`) получаем товар, сохраняем его в product и далее формируется модальное окно
    modalProductTitle.textContent = product.title;
    modalProductTitle.textContent = product.title;
    modalProductImage.src = `${API_URL}/${product.image}`;
    ingredientsList.textContent = '';

    const ingredientsListItems = product.ingredients.map((item) => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = item;
        return li
    });

    ingredientsList.append(...ingredientsListItems)

    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
    modalProductPriceCount.textContent = product.price;

    modalProductBtn.dataset.idProduct = product.id;

    modalProduct.classList.add('modal_open');/*для открытия модального окна (карточки с бургером)*/

    
};