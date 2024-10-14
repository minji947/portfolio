$(function() {
    $('.classMenu_click').on('click', function() {
        $(this).siblings('.dim').addClass('open')
        $(this).siblings('.classInfo').addClass('openInfo')
    })
    $('.btnPopClose').on('click', function() {
        $(this).parent().siblings('.dim').removeClass('open')
        $(this).parent().removeClass('openInfo')
    })
    $('.dim').on('click', function() {
        $(this).removeClass('open')
        $(this).siblings('div').removeClass('openInfo')
    })
})