function menuShow() {
    let menuDropDown = document.querySelector('.filtros');
    if (menuDropDown.classList.contains('open', 'open-filtro')) {
        menuDropDown.classList.remove('open', 'open-filtro',);
        document.querySelector('.icon-arrow').src = "Assets/chevron-down-solid.svg";
    } else {
        menuDropDown.classList.add('open', 'open-filtro',);
        document.querySelector('.icon-arrow').src = "Assets/chevron-up-solid.svg"
    }
}

function menuLogado() {
    let menuOptionsLogado = document.querySelector('.btn-logado');
    if (menuOptionsLogado.classList.contains('open-menu-logado', 'menu-btn-logado')) {
        menuOptionsLogado.classList.remove('open-menu-logado', 'menu-btn-logado');
    } else {
        menuOptionsLogado.classList.add('open-menu-logado', 'menu-btn-logado');
    }
}

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)



const slider2 = document.querySelectorAll('.slider2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

let currentSlide2 = 0;

function hideSlider2() {
  slider2.forEach(item => item.classList.remove('on'))
}

function showSlider2() {
  slider2[currentSlide2].classList.add('on')
}

function nextSlider2() {
  hideSlider2()
  if(currentSlide2 === slider2.length -1) {
    currentSlide2 = 0
  } else {
    currentSlide2++
  }
  showSlider2()
}

function prevSlide2() {
  hideSlider2()
  if(currentSlide2 === 0) {
    currentSlide2 = slider2.length -1
  } else {
    currentSlide2--
  }
  showSlider2()
}

btnNext2.addEventListener('click', nextSlider2)
btnPrev2.addEventListener('click', prevSlider2)

function menuMobileShow() {
  let menuMobShow = document.querySelector('.mobile-menu');
  if (menuMobShow.classList.contains('openMenuMob')) {
      menuMobShow.classList.remove('openMenuMob');
      document.querySelector('.icon-menu').src = "Assets/bars-solid.svg";
  } else {
      menuMobShow.classList.add('openMenuMob');
      document.querySelector('.icon-menu').src = "Assets/xmark-solid.svg"
  }
}