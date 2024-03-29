window.onload = function() {
    // popBarcode();
    // popNotification();
    // popIntro();
    // popVisit();
}

// Popup close
function popClose(e) {
    if (e.classList.contains('pop'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('popBody'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popup";
        }, 500); }
    document.body.style.overflow = "scroll"; }

// 會員條碼popup
function popBarcode() {
    document.getElementById("popBarcode").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 通知popup
function popNotification() {
    document.getElementById("popNotification").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 首次加入popup
function popIntro() {
    document.getElementById("popIntro").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 訪客模式popup
function popVisit() {
    document.getElementById("popVisit").style.display = "flex";
    document.body.style.overflow = "hidden"; }