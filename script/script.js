const sectionItemsMulti = document.querySelectorAll('.section-item-multi');

sectionItemsMulti.forEach(item => {
    item.addEventListener('click', () => {
        const compoundList = item.querySelector('.compound-list');
        const compounditem = item.querySelector('.compound-item');
        
        compounditem.classList.toggle('compound-item-active');
        compoundList.classList.toggle('compound-list-active');
        item.classList.toggle('section-item-multi-open');
    });
});