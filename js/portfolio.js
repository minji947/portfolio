import webPort from "./web_portfolio_list.js";
import designPort from "./design_portfolio_list.js";

/* header fixed drop */
window.onscroll = function () {
    const header = document.querySelector('header')
    const scrollHeight = window.scrollY
    const headerHeight = header.offsetHeight

    if (scrollHeight >= headerHeight) {
        header.classList.add('drop')
    } else if (scrollHeight < headerHeight) {
        header.classList.remove('drop')
    }
}

/* gnb open btn */
const btnMenuOpen = document.querySelector('#btnMenuOpen')
const btnMenuClose = document.querySelector('#btnMenuClose')
const gnb = document.querySelector('#gnb')

btnMenuOpen.addEventListener('click', ()=>{
    gnb.classList.add('open')
    btnMenuOpen.classList.remove('active')
    btnMenuClose.classList.add('active')
    document.body.classList.add('active_gnb')
})
btnMenuClose.addEventListener('click', ()=>{
    gnb.classList.remove('open')
    btnMenuOpen.classList.add('active')
    btnMenuClose.classList.remove('active')
    document.body.classList.remove('active_gnb')
})

/* background animation */
const blurBgs = document.querySelectorAll('.blurBg')

blurBgs.forEach(blurBg => {
    const random = Math.floor(Math.random() * 8) + 2
    const random2 = Math.floor(Math.random() * 8) + 2
    const random3 = Math.floor(Math.random() * 8) + 2
    const random4 = Math.floor(Math.random() * 8) + 2

    const keyframes = {
        borderRadius: [
            `${random3}0% ${random2}0% ${random}0% ${random}0%/${random2}0% ${random4}0% ${random}0% ${random}0%`,
            `${random}0% ${random4}0% ${random2}0% ${random3}0%/${random}0% ${random}0% ${random}0% ${random}0%`,
            `${random}0% ${random2}0% ${random}0% ${random3}0%/${random}0% ${random4}0% ${random2}0% ${random2}0%`,
            `${random}0% ${random2}0% ${random4}0% ${random}0%/${random2}0% ${random2}0% ${random}0% ${random}0%`
            /* leftTop rightTop rightBottom leftBottom */
        ]
    }
    const options = {
        duration: 10000,
        direction: 'alternate',
        iterations: Infinity
    }
    blurBg.animate(keyframes, options)
})

/* click and drag item */
var dragItems = document.querySelectorAll(".dragItem");
var container = document.querySelector("#draggable_area");

dragItems.forEach(dragItem => {
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
            active = true;
        }

    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
})

/* web 포트폴리오 component 생성&삽입*/
const webArea = document.getElementById('portWeb_area')
const webPortfolioInfos = webPort
console.log(webPortfolioInfos)

webPortfolioInfos.forEach(webPortfolioInfo => {
    const portfolioComponent =
        `<div class="portfolio_component fadeIn">
            <figure class="portfolio_tumbnail"><img src="${webPortfolioInfo.imgSrc}" alt="${webPortfolioInfo.title}" ${webPortfolioInfo.tumbnail_size}></figure>
            <div class="portfolio_info_area">
                <p class="portfolio_title">${webPortfolioInfo.title}</p>
                <span class="web_category web_original">${webPortfolioInfo.category}</span>
                <p class="web_desc">${webPortfolioInfo.info}</p>
                <table>
                    <caption class="blind">${webPortfolioInfo.title}</caption>
                    <colgroup>
                    </colgroup>
                    <tr>
                                <th class="th_stroke_right">타입</th>
                                <td>${webPortfolioInfo.response}</td>
                    </tr>
                    <tr>
                                <th class="th_stroke_right">사용언어</th>
                                <td>${webPortfolioInfo.lang}</td>
                    </tr>
                </table>
                <table>
                    <caption class="blind">${webPortfolioInfo.title}</caption>
                    <colgroup>
                    </colgroup>
                    <tr>
                                <th class="th_stroke_right">디자인컨셉</th>
                                <td>${webPortfolioInfo.concept}</td>
                    </tr>
                    <tr>
                                <th class="th_stroke_right">자세히보기</th>
                                <td>
                                    <a href="../web/${webPortfolioInfo.btn01_link}" class="btnViewMore ${webPortfolioInfo.btn01}">
                                        ${webPortfolioInfo.btn01}
                                    </a> 
                                    <a href="../web/${webPortfolioInfo.btn02_link}" class="btnViewMore ${webPortfolioInfo.btn02}">
                                        ${webPortfolioInfo.btn02}
                                    </a>
                                    <a href="../web/${webPortfolioInfo.btn03_link}" class="btnViewMore ${webPortfolioInfo.btn03}">
                                        ${webPortfolioInfo.btn03}
                                    </a>
                                    <a target="_blank" href="../web/${webPortfolioInfo.btn04_link}" class="btnViewMore ${webPortfolioInfo.btn04}">
                                        ${webPortfolioInfo.btn04}
                                    </a>
                                </td>
                    </tr>
                </table>
            </div>
        </div>`;
    webArea.insertAdjacentHTML('beforeend', portfolioComponent)
})

/* fixed_toTopBtn */
const btnTop = document.querySelector('.fixed_toTopBtn')

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }
    )
})

/* scroll fadeIn */
const animateFade = (entries, obs) => { 
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0,1],
                    filter: ['blur(0.4rem)', 'blur(0)'],
                },
                {
                    duration: 1000,
                    easing: 'ease',
                    fill: 'forwards'
                }
            )
            
            obs.unobserve(entry.target)
        }
        
    });
}

const fadeObsever = new IntersectionObserver(animateFade)
const fadeElements = document.querySelectorAll('.fadeIn')

fadeElements.forEach((fadeElement)=>{
    fadeObsever.observe(fadeElement)
})


/* design 포트폴리오 component 생성&삽입 */
/* const designArea = document.getElementById('portDesign_area')
const designPortfolioInfos = designPort


designPortfolioInfos.forEach(designPortfolioInfo => {
    const DesignComponent =
        `<div class="portfolio_component">
            <figure class="portfolio_tumbnail"><img src="${designPortfolioInfo.imgSrc}" alt=""></figure>
            <div class="portfolio_info_area">
                <p class="portfolio_title">${designPortfolioInfo.title}</p>
                <table>
                    <caption class="blind">${designPortfolioInfo.title}</caption>
                    <colgroup>
                        <col width="20%">
                    </colgroup>
                    <tr>
                                <th class="th_stroke_right">타입</th>
                                <td>${designPortfolioInfo.type}</td>
                    </tr>
                    <tr>
                                <th class="th_stroke_right">디자인컨셉</th>
                                <td>${designPortfolioInfo.concept}</td>
                    </tr>
                    <tr>
                                <th class="th_stroke_right">반응형 디자인여부</th>
                                <td>${designPortfolioInfo.response_design}</td>
                    </tr>
                    <tr>
                                <th class="th_stroke_right">설명</th>
                                <td>${designPortfolioInfo.info}</td>
                    </tr>
                    <tr>
                                <th class="th_stroke_right">자세히보기</th>
                                <td>
                                    <a href="../web/${designPortfolioInfo.btn01_link}" class="btnViewMore">
                                        와이어프레임
                                    </a> 
                                    <a href="../web/${designPortfolioInfo.btn02_link}" class="btnViewMore">
                                        디자인시안
                                    </a>
                                </td>
                    </tr>
                </table>
            </div>
        </div>`;
    designArea.insertAdjacentHTML('beforeend', DesignComponent)
})
 */