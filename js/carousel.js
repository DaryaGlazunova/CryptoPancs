
let cardLists = document.querySelectorAll('.carousel'); 

cardLists.forEach((item, index) => {
console.log(item);
let width = item.querySelector('.carousel__item').clientWidth; // ширина картинки
let count; // видимое количество изображений

if ($(window).width() < 1400) {
    count = 2; 
 }
 else {
    count = 3; 
 }


let shift = 1;// на сколько изображений сдвигать
let list = item.querySelector('.carousel__item');
let listElems = item.querySelectorAll('.carousel__item');
let countElem = listElems.length;
let position = 0; // положение ленты прокрутки
let prev = item.querySelector('.carousel__btn_prev'); // Кнопка назад
let next = item.querySelector('.carousel__btn_next'); // Кнопка вперед

next.onclick = function() {
    position -= width*shift;
    position = Math.max(position, - width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    console.log(position, - width * (listElems.length - count));
    console.log(width, listElems.length);
}


prev.onclick = function() {
    // сдвиг влево
    position += width * shift;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

});


