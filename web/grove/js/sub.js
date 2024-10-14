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