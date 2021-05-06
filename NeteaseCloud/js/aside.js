$(document).ready(function() {
    var arry = ['../imgs/轮播图1.png',
        '../imgs/轮播图2.png',
        '../imgs/轮播图3.png',
        '../imgs/轮播图4.png',
        '../imgs/轮播图5.png',
        '../imgs/轮播图6.png',
        '../imgs/轮播图7.png',
        '../imgs/轮播图8.png',
        '../imgs/轮播图9.png',
        '../imgs/轮播图10.png'
    ];
    var i = 0
    var list = document.querySelectorAll("#list");
    var img = document.getElementById('tupian');
    list[0].style.backgroundColor = 'red';

    function change() {
        for (var j = 0; j < 10; j++) {
            list[j].style.backgroundColor = 'white';
        }
        list[i].style.backgroundColor = 'red';
        img.src = arry[i++];
        if (i == arry.length) {
            i = 0;
        }
    }
    window.setInterval(change, 4000);
    for (let j = 0; j < list.length; j++) {
        list[j].onclick = function() {
            img.src = arry[j]
            for (var s = 0; s < 10; s++) {
                list[s].style.backgroundColor = 'white';
            }
            list[j].style.backgroundColor = 'red';

        }
    }
});