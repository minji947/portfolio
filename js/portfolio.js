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

    /* dragItem array */
    const mainVisual = document.querySelector('#mainVisual')
    const mainVisualHeight = mainVisual.offsetHeight

    for (let i = 0; i < dragItems.length; i++) {
        if (scrollHeight >= mainVisualHeight) {
            dragItems[i].classList.add('array')
        } else if (scrollHeight < mainVisualHeight) {
            dragItems[i].classList.remove('array')
        }
    }
}

/* gnb open btn */
const btnMenuOpen = document.querySelector('#btnMenuOpen')
const btnMenuClose = document.querySelector('#btnMenuClose')
const gnb = document.querySelector('#gnb')
const gnbLists = document.querySelectorAll('#gnb li a')

btnMenuOpen.addEventListener('click', () => {
    gnb.classList.add('open')
    btnMenuOpen.classList.remove('active')
    btnMenuClose.classList.add('active')
    document.body.classList.add('active_gnb')
    for (let i = 0; i < gnbLists.length; i++) {
        gnbLists[i].animate(
            {
                top: [0, 81 * i + 'px'],
            },
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }
})
btnMenuClose.addEventListener('click', () => {
    gnb.classList.remove('open')
    btnMenuOpen.classList.add('active')
    btnMenuClose.classList.remove('active')
    document.body.classList.remove('active_gnb')
})
gnbLists.forEach(gnbList => {
    gnbList.addEventListener('click', () => {
        gnb.classList.remove('open')
        btnMenuOpen.classList.add('active')
        btnMenuClose.classList.remove('active')
        document.body.classList.remove('active_gnb')
    })
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

webPortfolioInfos.forEach(webPortfolioInfo => {
    const portfolioComponent =
        `<div class="portfolio_component fadeIn">
            <figure class="portfolio_tumbnail"><img src="${webPortfolioInfo.imgSrc}" alt="${webPortfolioInfo.title}" ${webPortfolioInfo.tumbnail_size}></figure>
            <div class="portfolio_info_area">
                <p class="portfolio_title">${webPortfolioInfo.title}</p>
                <span class="category web_cate">${webPortfolioInfo.category}</span>
                <p class="web_desc">${webPortfolioInfo.info}</p>
                <table>
                    <caption class="blind">${webPortfolioInfo.title}</caption>
                    <tr>
                            <th class="th_stroke_right">타입</th>
                            <td>${webPortfolioInfo.response}</td>
                    </tr>
                    <tr>
                            <th class="th_stroke_right">사용언어</th>
                            <td>${webPortfolioInfo.lang}</td>
                    </tr>
                    <tr>
                            <th class="th_stroke_right">디자인컨셉</th>
                            <td>${webPortfolioInfo.concept}</td>
                    </tr>
                    <tr>
                            <th class="th_stroke_right">자세히보기</th>
                            <td>
                                <a target='_blank' href="${webPortfolioInfo.plan_link}" class="btnViewMore plan ${webPortfolioInfo.plan}">
                                    ${webPortfolioInfo.plan}
                                </a> 
                                <a href="${webPortfolioInfo.btn02_link}" class="btn02 btnViewMore ${webPortfolioInfo.folder} ${webPortfolioInfo.btn02}">
                                    ${webPortfolioInfo.btn02}
                                </a>
                                <a target='_blank' href="${webPortfolioInfo.btn03_link}" class="btnViewMore ${webPortfolioInfo.btn03}">
                                    ${webPortfolioInfo.btn03}
                                </a>
                                <a target="_blank" href="${webPortfolioInfo.btn04_link}" class="btnViewMore ${webPortfolioInfo.btn04}">
                                    ${webPortfolioInfo.btn04}
                                </a>
                            </td>
                    </tr>
                </table>
            </div>
        </div>`;
    webArea.insertAdjacentHTML('beforeend', portfolioComponent)

    document.querySelector(`.btn02.${webPortfolioInfo.folder}`).addEventListener('click', function () {
        const modal = document.querySelector('.modalDim')
        modal.classList.add(webPortfolioInfo.folder)

        if (modal.classList.contains(webPortfolioInfo.folder)) {
            const wireframeArea = document.querySelector('.wireframe_area')
            const designSampleArea = document.querySelector('.designSample_area')
            const wireframeImgs = webPortfolioInfo.wireframe_imgs
            const designSampleImgs = webPortfolioInfo.designSample_imgs

            /* modal inner contents 삽입 */
            const modalTitle = document.querySelector('.modal_title')
            modalTitle.innerText = webPortfolioInfo.title
            const replaceFigure = document.querySelectorAll('.replaceFigure')

            const wireframeFigure = document.createElement('figure')
            wireframeFigure.className='replaceFigure'
            wireframeImgs.forEach(wireframeImg => {
                wireframeFigure.insertAdjacentHTML('beforeend', `<img src="design/${webPortfolioInfo.folder}/wireframe/${wireframeImg}" alt='${webPortfolioInfo.title} 와이어프레임'>`)
            })
            wireframeArea.replaceChild(wireframeFigure, replaceFigure[0])

            const designSampleFigure = document.createElement('figure')
            designSampleFigure.className='replaceFigure'
            designSampleImgs.forEach(designSampleImg => {
                designSampleFigure.insertAdjacentHTML('beforeend', `<img src="design/${webPortfolioInfo.folder}/designSample/${designSampleImg}" alt='${webPortfolioInfo.title} 디자인시안'>`)
            })
            designSampleArea.replaceChild(designSampleFigure, replaceFigure[1])
        } else {
            return false
        }
    })

})

/* design 포트폴리오 component 생성&삽입 */
const designArea = document.getElementById('portDesign_area')
const designPortfolioInfos = designPort


designPortfolioInfos.forEach(designPortfolioInfo => {
    const DesignComponent =
        `<div class="portfolio_component fadeIn">
            <figure class="portfolio_tumbnail"><img src="${designPortfolioInfo.imgSrc}" alt="${designPortfolioInfo.title}" ${designPortfolioInfo.tumbnail_size}></figure>
            <div class="portfolio_info_area">
                <p class="portfolio_title">${designPortfolioInfo.title}</p>
                <span class="category design_cate">${designPortfolioInfo.category}</span>
                <p class="web_desc">${designPortfolioInfo.info}</p>
                <table>
                    <caption class="blind">${designPortfolioInfo.title}</caption>
                    <tr>
                        <th class="th_stroke_right">타입</th>
                        <td>${designPortfolioInfo.response}</td>
                    </tr>
                    <tr>
                        <th class="th_stroke_right">디자인툴</th>
                        <td>${designPortfolioInfo.lang}</td>
                    </tr>
                    <tr>
                        <th class="th_stroke_right">디자인컨셉</th>
                        <td>${designPortfolioInfo.concept}</td>
                    </tr>
                    <tr>
                        <th class="th_stroke_right">자세히보기</th>
                        <td>
                            <a target="_blank" href="${designPortfolioInfo.btn01_link}" class="btnViewMore ${designPortfolioInfo.btn01}">
                                ${designPortfolioInfo.btn01}
                            </a> 
                            <a href="${designPortfolioInfo.btn02_link}" class="btn02 btnViewMore ${designPortfolioInfo.btn02} ${designPortfolioInfo.folder}">
                                ${designPortfolioInfo.btn02}
                            </a>
                            <a target='_blank' href="${designPortfolioInfo.btn03_link}" class="btnViewMore ${designPortfolioInfo.btn03}">
                                ${designPortfolioInfo.btn03}
                            </a>
                            <a target="_blank" href="${designPortfolioInfo.btn04_link}" class="btnViewMore ${designPortfolioInfo.btn04}">
                                ${designPortfolioInfo.btn04}
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;
    designArea.insertAdjacentHTML('beforeend', DesignComponent)

    document.querySelector(`.btn02.${designPortfolioInfo.folder}`).addEventListener('click', function () {
        const modal = document.querySelector('.modalDim')
        modal.classList.add(designPortfolioInfo.folder)

        const wireframeArea = document.querySelector('.wireframe_area')
        const designSampleArea = document.querySelector('.designSample_area')
        const wireframeImgs = designPortfolioInfo.wireframe_imgs
        const designSampleImgs = designPortfolioInfo.designSample_imgs

        if (modal.classList.contains(designPortfolioInfo.folder)) {
            const wireframeArea = document.querySelector('.wireframe_area')
            const designSampleArea = document.querySelector('.designSample_area')
            const wireframeImgs = designPortfolioInfo.wireframe_imgs
            const designSampleImgs = designPortfolioInfo.designSample_imgs

            /* modal inner contents 삽입 */
            const modalTitle = document.querySelector('.modal_title')
            modalTitle.innerText = designPortfolioInfo.title
            const replaceFigure = document.querySelectorAll('.replaceFigure')

            const wireframeFigure = document.createElement('figure')
            wireframeFigure.className='replaceFigure'
            wireframeImgs.forEach(wireframeImg => {
                wireframeFigure.insertAdjacentHTML('beforeend', `<img src="design/${designPortfolioInfo.folder}/wireframe/${wireframeImg}" alt='${designPortfolioInfo.title} 와이어프레임'>`)
            })
            wireframeArea.replaceChild(wireframeFigure, replaceFigure[0])

            const designSampleFigure = document.createElement('figure')
            designSampleFigure.className='replaceFigure'
            designSampleImgs.forEach(designSampleImg => {
                designSampleFigure.insertAdjacentHTML('beforeend', `<img src="design/${designPortfolioInfo.folder}/designSample/${designSampleImg}" alt='${designPortfolioInfo.title} 디자인시안'>`)
            })
            designSampleArea.replaceChild(designSampleFigure, replaceFigure[1])
        } else {
            return false
        }
    })

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
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
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

fadeElements.forEach((fadeElement) => {
    fadeObsever.observe(fadeElement)
})

/* modal open/close */
const openModals = document.querySelectorAll('.btn02')

openModals.forEach(openModal => {
    const modal = document.querySelector('.modalDim')
    openModal.addEventListener('click', (e) => {
        e.preventDefault()

        document.body.classList.add('active_gnb')
        modal.classList.add('open')
        modal.animate({
            opacity: [0, 1],
        },
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            })
    })
    const closeBtn = document.querySelector('.modalBox button')
    closeBtn.addEventListener('click', () => {
        document.body.classList.remove('active_gnb')
        modal.className='modalDim'

        modal.animate({
            opacity: [1, 0],
        },
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            })
        setTimeout(() => {
            modal.classList.remove('open')
        }, 500)
    })
})

/* modal tap */
const wireframeArea = document.querySelector('.wireframe_area')
const designSampleArea = document.querySelector('.designSample_area')
const tapMenu1 = document.querySelector('.tapMenu1')
const tapMenu2 = document.querySelector('.tapMenu2')

tapMenu1.addEventListener('click', function (e) {
    e.preventDefault()
    this.classList.add('active')
    document.querySelector('.tapMenu2').classList.remove('active')
    wireframeArea.classList.add('active')
    designSampleArea.classList.remove('active')
})
tapMenu2.addEventListener('click', function (e) {
    e.preventDefault()
    this.classList.add('active')
    document.querySelector('.tapMenu1').classList.remove('active')
    wireframeArea.classList.remove('active')
    designSampleArea.classList.add('active')
})