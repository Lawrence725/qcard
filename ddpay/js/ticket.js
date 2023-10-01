window.onload = function() {
    // popConfirm();
    // popBarcode();
    popGift();
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

// 確認popup
function popConfirm() {
    document.getElementById("popConfirm").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 會員條碼popup
function popBarcode() {
    document.getElementById("popBarcode").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 集章獎品popup
function popGift() {
    document.getElementById("popGift").style.display = "flex";
    document.body.style.overflow = "hidden"; }