var bttn = document.querySelectorAll('.bttn');
bttn.forEach(bttn => {
bttn.onmousemove = function(e){
    var x = e.pageX - bttn.offsetLeft;
    var y = e.pageY - bttn.offsetTop;

    bttn.style.setProperty('--x', x + 'px');
    bttn.style.setProperty('--y', y + 'px');
}
});