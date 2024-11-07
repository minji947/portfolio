$(function () {
    let windowWidth = $(window).width();

    if (windowWidth <= 576) {
        $('.classMenu_li .dim').remove()
        /* $('a.classMenu_click').click(function(){

            $('html, body').animate({scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
          
            return false;
        }) */
    }
    /* 수업안내 클릭 시 모달(pc,tablet)/아코디언메뉴(mobile)) */
    $('.classMenu_click').on('click', function () {
        if (windowWidth > 576) {
            $('body').addClass('scrollBlock')
            $(this).siblings('.modal').stop().fadeIn()
        } else if (windowWidth <= 576) {
            $(this).siblings('.modal').slideToggle()
            $(this).parent().siblings('li').children('.modal').stop().slideUp()
            $(this).stop().toggleClass('arrowUp')
            $(this).parent().siblings('li').children('.classMenu_click').removeClass('arrowUp')
        }
    })
    /* post_click 클릭 시 모달 */
    $('.post_click').on('click', function (e) {
        e.preventDefault()
        $('body').addClass('scrollBlock')
        $(this).siblings('.modal').stop().fadeIn()
    })

    /* 모달 닫기 버튼 */
    $('.btnPopClose').on('click', function () {
        $('body').removeClass('scrollBlock')
        $(this).parents('.modal').stop().fadeOut()
    })
    $('.dim').on('click', function () {
        $('body').removeClass('scrollBlock')
        $(this).parents('.modal').stop().fadeOut()
    })


})

