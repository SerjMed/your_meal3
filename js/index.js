
import {modalProduct,
    catalogList
    } 
    from './elements.js'
//нужно включить модульную поддержку в index.html внутри script

import { openModal } from './openModal.js';


import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';
import { cartInit } from './cart.js';

/*const burgerMax = {
    title: 'Бургер Макс',
    price: 2000,
    weight: 1500,
    calories: 1800,
    description: 'Огромный бургер с картошкой по деревенски',
    image: 'img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка',
        'Мега котлета из говядины',
        'Много сыра',
        'Картошка',
        'Чипотл'
    ]
};*/




//сделаем чтобы при клике на бургер открывалось окно с ним
catalogList.addEventListener('click', (event) => {
    const target = event.target;

    //выберем класс для таргета
    if (target.closest('.product__detail') || target.closest('.product__image')) {
        const id = target.closest('.product').dataset.idProduct;
        
        openModal(id);
 
    }
});
/*=> чтобы не писать function*/ 


/*сделаем чтобы click срабатывал на всем модальном окне*/
modalProduct.addEventListener('click', (event) => {
    const target = event.target

    /*для закрытия используем делегирование, чтобы можно было закрыть окно нажатием на серую область, а не только на крестик*/
    if (target.closest('.modal__close') || target === modalProduct) {
    modalProduct.classList.remove('modal_open');/*удаляем созданный класс*/
    }
    
});

const init = () => {
    renderListProduct();
    navigationListController(renderListProduct);
    cartInit();

};

init();
