//Selectors
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')
const parentContainer = document.querySelector('.carousel-container')

//ImagesArray


const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']

images.forEach((img, index) => {
    let dots = document.createElement('span')
    dots.style.transform = `translateX(${40 * index}px)`
    dots.addEventListener('click', () => {
        //console.log(index)
        carouselSlide.style.transition = 'all 0.5s ease-in-out'
        carouselSlide.style.transform = `translateX(${-size * index}px)`
    })

    parentContainer.appendChild(dots)

})

//Buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1

const size = carouselImages[0].clientWidth

carouselSlide.style.transform = `translateX(${-size*counter}px)`

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = 'all 0.5s ease-in-out'
    counter++
    carouselSlide.style.transform = `translateX(${-size*counter}px)`
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return
    carouselSlide.style.transition = 'all 0.5s ease-in-out'
    counter--
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
})

carouselSlide.addEventListener('transitionend', () => {

    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - 2
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none'
        counter = 1
            //counter = carouselImages.length - counter
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        if (counter <= 0) return
        carouselSlide.style.transition = 'all 0.5s ease-in-out'
        counter--
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }
    if (e.code === 'ArrowRight') {
        if (counter >= carouselImages.length - 1) return
        carouselSlide.style.transition = 'all 0.5s ease-in-out'
        counter++
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }

});