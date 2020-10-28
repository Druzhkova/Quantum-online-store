const selectAllElements = document.querySelectorAll('[data-select]');

selectAllElements.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    const realSelect = this.nextElementSibling;

    // Если кликнули по пунктам в дропдауне
    if (evt.target.hasAttribute('data-select-item')) {

      // Находим заголовок и записываем в его значение из выбранного пункта
      let itemTitle = evt.target.getAttribute('data-select-item')

      this.querySelector('[data-select-title]').textContent = itemTitle 

      // Скрываем или открываем дропдаун
      this.querySelector('.header-select__dropdown').classList.toggle('hidden');

      // Связка с реальным селектом
      realSelect.value = itemTitle
    
    } else {
      // Если кликнули по заголовку(методом исключения)
      // Скрываем или открываем дропдаун
      item.querySelector('.header-select__dropdown').classList.toggle('hidden');

    }
  })
})
