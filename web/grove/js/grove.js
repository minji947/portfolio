//Initialize Swiper
var swiper = new Swiper(".main_visual_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: 'fade'
});

/* header_fixed */
let $headerFixed = document.querySelector('.header_fixed')
let headerHeight = $headerFixed.offsetHeight

document.addEventListener('scroll', function () {
    let scrollNow = window.scrollY
    if (scrollNow >= headerHeight) {
        $headerFixed.classList.add("on")
    } else {
        $headerFixed.classList.remove("on")
    }
})

//OpenSnb
const snbArea = document.querySelector('.snb')
const btnMenus = document.querySelectorAll('.menu_ico')
const btnOpens = document.querySelectorAll('.menu_open_ico')
const btnCloses = document.querySelectorAll('.menu_close_ico')
const headerFixed = document.querySelector('.header_fixed')



btnMenus[0].addEventListener('click', () => {
    document.body.classList.toggle('active_snb')
    btnOpens[0].classList.toggle('active')
    btnCloses[0].classList.toggle('active')
    if (btnOpens[0].classList.contains('active')) {
        snbArea.style.right = '-100%'
        headerFixed.style.background = "#fff"
    } else {
        snbArea.style.right = 0
        headerFixed.style.background = "none"
    }
})
//header_fixed 버튼
btnMenus[1].addEventListener('click', () => {
    document.body.classList.toggle('active_snb')
    btnOpens[1].classList.toggle('active')
    btnCloses[1].classList.toggle('active')
    if (btnOpens[1].classList.contains('active')) {
        snbArea.style.right = '-100%'
        headerFixed.style.background = "#fff"
    } else {
        snbArea.style.right = 0
        headerFixed.style.background = "none"
    }
})

/* btnTop_fiexd */
const btnTop = document.querySelector('.btnTop_fixed')

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }
    )
})