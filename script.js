'use strict'

const submitBtn = document.querySelector('.btn--submit')
const hideContainer = document.querySelector('.vanish')
const showContainer = document.querySelector('.invisible')
const formRating = document.querySelector('form')
let rating = document.querySelectorAll('input')
let showValue = document.querySelector('.show--rating')

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', function () {
        showValue.innerHTML = rating[i].value
    })
}
submitBtn.addEventListener('click', () => {
    hideContainer.classList.add('display--none')
    showContainer.classList.remove('display--none')
})
