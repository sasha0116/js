$(document).ready(function () {

    $('.ratings').click(function () {
        $('.all_view').hide().css('display','none')
        $('.all_view_two').show().css('display','flex')
       $('.all_view_three').hide().css('display','none')

    })
    $('.info').click(function () {
        $('.all_view').show().css('display','flex')
        $('.all_view_two').hide().css('display','none')
        $('.all_view_three').hide().css('display','none')
    })

    $('.where_bye').click(function () {
        $('.all_view_three').show().css('display','flex')
        $('.all_view').hide().css('display','none')
        $('.all_view_two').hide().css('display','none')
    })
})

