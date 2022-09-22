window.onload = popCredit();

// Popup close
function popClose(e) {
    if (e.classList.contains('popup'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('body'))) {
        e.closest('.popup').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.popup').style.display = "none";
            e.closest('.popup').children[0].style.animationName = "popup";
        }, 500); }
    document.body.style.overflow = "scroll"; }

// 信用卡popup
function popCredit() {
    document.getElementById("popCredit").style.display = "flex";
    document.body.style.overflow = "hidden"; }