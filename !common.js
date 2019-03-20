$(document).ready(function () {
    
});

function post(url, params, s) {
    $.ajax({
        url: url,
        type: 'POST',
        traditional: true,
        data: params,
        success: function (data) {
            enable();
            if (data.r == 'error') er(data.m);
            else if (s !== undefined) s(data);
        },
        error: function (request, status, error) {
            enable();
            notify(request.responseText, 'error');
        }
    });
}

function notify(text, type) {
    console.log(text);
}

function info(text) {
    notify(text, 'success');
}

function er(text) {
    notify(text, 'error');
}

function inputs(el) {
    var o = {};
    $(el).find(':input').each(function () {
        if (this.id != '') {
            var val = $(this).val();
            if ($(this).attr('type') == 'checkbox') val = $(this).prop('checked');
            o[this.id] = val;
        }
    });
    return o;
}

function enable() {

}
