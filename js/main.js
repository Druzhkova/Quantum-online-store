const selectElement = document.querySelector('[data-select]');
const selectReal = document.querySelector('#select-real');

// Прослушиваем клик внутри контейнера с селектом
selectElement.addEventListener('click', function(evt){
  
  if (evt.target.hasAttribute('data-select-title')) {

    // Скрываем или открываем дропдаун
    this.querySelector('.header-select__dropdown').classList.toggle('hidden');
    
  } else if (evt.target.hasAttribute('data-select-item')) {

    // Находим заголовок и меняем его текст на значение из выбранного пункта
    const itemTitle = evt.target.dataset.selectItem // evt.target.getAttribute('data-select-item');
    evt.target
      .closest('[data-select]')
      .querySelector('[data-select-title]').textContent = itemTitle;

    // Скрываем или открываем дропдаун
    evt.target
      .closest('[data-select]')
      .querySelector('.header-select__dropdown')
      .classList.toggle('hidden');

    // Связка с реальным селектом
    selectReal.value = itemTitle

  }
})