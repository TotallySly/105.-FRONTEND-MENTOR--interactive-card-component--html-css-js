'use strict'

const submitBtn = document.querySelector('.btn--submit')
const hideContainer = document.querySelector('.vanish')
const showContainer = document.querySelector('.invisible')
const ratings = document.querySelectorAll('.btn')
const showRating = document.querySelector('.show--rating')

ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        showRating.innerHTML = rating.innerHTML
        rating.classList.toggle('active')
    })
    rating.classList.remove('active')
})

submitBtn.addEventListener('click', () => {
    hideContainer.classList.add('display--none')
    showContainer.classList.remove('display--none')
})
