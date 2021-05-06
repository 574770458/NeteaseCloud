window.onload = function() {
    var btns = document.querySelectorAll('#btn');
    btns[1].onclick = function() {
        $.ajax({
            url: '../page/leftaside/video.html',
            type: 'get',
            dataType: "html",
            success: function(res) {
                $('aside').html($(res));
            }
        });

    }
}