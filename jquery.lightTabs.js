(function ($) {

    $.fn.lightTabs = function (options) {

        return this.each(function () {
            var tabs = this;
            i = 0;

            var showPage = function (i) {
                $(tabs).children('div').hide();
                $(tabs).children('div').eq(i).show();
                $(tabs).children('ul').children('li').removeClass('active');
                $(tabs).children('ul').children('li').eq(i).addClass('active');
            }

            showPage(0);

            $(tabs).children('ul').children('li').each(function (index, element) {
                $(element).attr('data-page', i);
                i++;
            });

            $(tabs).children('ul').children('li').click(function () {
                showPage(parseInt($(this).attr('data-page')));
            });
        });
    };
})(jQuery);


$(document).ready(function () {
    $('.tabs').lightTabs();
});

function openTab(tab, selector) {
    $(selector + ' ul li[data-page="' + tab + '"]').click();
}