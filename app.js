const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => handleClick('up'))
downBtn.addEventListener('click', () => handleClick('down'))

let activeSlideIndex = 0

function handleClick(direction) {
  if (direction === 'up') {
    activeSlideIndex += 1
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex -= 1
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }
  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`
  sideBar.style.transform = `translateY(${height * activeSlideIndex}px)`
}
