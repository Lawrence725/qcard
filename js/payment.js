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
                    document.body.style.overflow = "scroll";
                }, 500); }}
    else if (!(e.classList.contains('popBody'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popup";
            document.body.style.overflow = "scroll";
        }, 500); }}

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

// 點數popup
function popPoints() {
    document.getElementById("popPoints").style.display = "flex";
    document.body.style.overflow = "hidden"; }
function pointCard(e) {
    var cards = document.getElementsByClassName("point__card");
    var isOpened = e.closest('.point__card').style.animationName == "openCard"
    for (var i = 0; i < cards.length; i++) {
        var card = cards.item(i);
        card.style.animationDelay = "0s"
        if (card.style.animationName == "openCard")
            card.style.animationName = "closeCard";
        card.style.height = "90px";
        card.style.minHeight = "90px"; }
    if (isOpened) {
        e.closest('.point__card').style.animationName = "closeCard";
        e.closest('.point__card').style.height = "90px";
        e.closest('.point__card').style.minHeight = "90px"; }
    else {
        e.closest('.point__card').style.animationName = "openCard";
        e.closest('.point__card').style.height = "400px";
        e.closest('.point__card').style.minHeight = "400px";
        setTimeout(function(){
            e.closest('.point__card').scrollIntoView({ behavior: 'smooth' });
        }, 300); }}

// 票券popup
function popCoupons() {
    document.getElementById("popCoupons").style.display = "flex";
    document.body.style.overflow = "hidden"; }
function couponCard(e) {
    var cards = document.getElementsByClassName("coupon__card");
    var isOpened = e.closest('.coupon__card').style.animationName == "openCard"
    for (var i = 0; i < cards.length; i++) {
        var card = cards.item(i);
        card.style.animationDelay = "0s"
        if (card.style.animationName == "openCard")
            card.style.animationName = "closeCard";
        card.style.height = "90px";
        card.style.minHeight = "90px"; }
    if (isOpened) {
        e.closest('.coupon__card').style.animationName = "closeCard";
        e.closest('.coupon__card').style.height = "90px";
        e.closest('.coupon__card').style.minHeight = "90px"; }
    else {
        e.closest('.coupon__card').style.animationName = "openCard";
        e.closest('.coupon__card').style.height = "400px";
        e.closest('.coupon__card').style.minHeight = "400px";
        setTimeout(function(){
            e.closest('.coupon__card').scrollIntoView({ behavior: 'smooth' });
        }, 300); }}