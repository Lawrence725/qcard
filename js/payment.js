window.onload = function() {
    // popNotice();
    // popError();
    // popRefund();
    // popOrder();
    // popConfirm();
    // popCredit();
    // popApple();
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

// 訊息popup
function popNotice() {
    document.getElementById("popNotice").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 公告popup
function popError() {
    document.getElementById("popError").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 點餐須知popup
function popOrder() {
    document.getElementById("popOrder").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 退款popup
function popRefund() {
    document.getElementById("popRefund").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Apple Pay popup
function popApple() {
    document.getElementById("popApple").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 確認popup
function popConfirm() {
    document.getElementById("popConfirm").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 信用卡popup
function popCredit() {
    document.getElementById("popCredit").style.display = "flex";
    document.body.style.overflow = "hidden"; }