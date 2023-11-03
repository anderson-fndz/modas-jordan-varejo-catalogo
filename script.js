const produto = document.querySelectorAll('.produto')

produto.forEach((e) => {
    let container = e.querySelector('.container-slider')
    let slider = e.querySelectorAll('.slider')
    let btnPrev = e.querySelector('#prev-button')
    let btnNext = e.querySelector('#next-button')

    let currentSlide = 0;
    btnNext.addEventListener('click', nextSlider)
    btnPrev.addEventListener('click', prevSlider)
    
    function hideSlider() {
        slider.forEach(item => item.classList.remove('on'))
    }
    
    function showSlider() {
        slider[currentSlide].classList.add('on')
    }
    
    function nextSlider() {
        hideSlider()
        if (currentSlide === slider.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++
        }
        showSlider()
    }
    
    function prevSlider() {
        hideSlider()
        if (currentSlide === 0) {
            currentSlide = slider.length - 1;
        } else {
            currentSlide--
        }
        showSlider()
    }
})

const buttonOpen = document.querySelector('.icon-open')
const modal = document.querySelector('.modal-wrapper')
const buttonClose = document.querySelector('.icon-close')

buttonOpen.addEventListener("click", function(){
    modal.style.display = 'block'
})

buttonClose.addEventListener("click", function(){
    modal.style.display = 'none'
})