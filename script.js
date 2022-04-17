'use strict'

const submitBtn = document.querySelector('.btn--submit')
const hideContainer = document.querySelector('.vanish')
const showContainer = document.querySelector('.invisible')

submitBtn.addEventListener('click', () => {
    hideContainer.classList.add('display--none')
    showContainer.classList.remove('display--none')
})
