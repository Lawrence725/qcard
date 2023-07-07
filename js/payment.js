// On load
window.onload = function() {
    // popNotice();
    // popError();
    // popRefund();
    // popOrder();
    // popConfirm();
    // popCredit();
    // popApple();
}

// iFrame close
window.onmessage = function (event) {
    if (event.data === "closed") {
        document.getElementById("popIframe").style.display = "none";
        document.body.style.overflow = "scroll"; }};

// iFrame open
function popIframe() {
    document.getElementById("popIframe").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.getElementById("popIframe").contentWindow.postMessage("opened", "*"); }

// Popup close
function popClose(e) {
    if (e.classList.contains('pop'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    if (e.classList.contains('points'))
                        e.children[0].style.animationName = "popupDiscount";
                    else
                        e.children[0].style.animationName = "popup";
                    document.body.style.overflow = "scroll";
                }, 500); }}
    else if (!(e.classList.contains('popBody'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            if (e.closest('.pop').classList.contains('points'))
                e.closest('.pop').children[0].style.animationName = "popupDiscount";
            else
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

// 登出popup
function popLogout() {
    document.getElementById("pop__logout").style.display = "flex";
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
function couponMore(e) {
    var cards = document.getElementsByClassName("coupon--ddp");
    var isOpened = e.closest('.coupon--ddp').style.animationName == "cardMore"
    for (var i = 0; i < cards.length; i++) {
        var card = cards.item(i);
        card.style.animationDelay = "0s"
        if (card.style.animationName == "cardMore")
            card.style.animationName = "cardLess";
        card.style.height = "172px";
        card.style.minHeight = "172px"; }
    if (isOpened) {
        e.querySelector('.card__arrow').style.animationName = 'arrowDown';
        e.closest('.coupon--ddp').style.animationName = "cardLess";
        e.closest('.coupon--ddp').style.height = "172px";
        e.closest('.coupon--ddp').style.minHeight = "172px";
        setTimeout(function(){
            e.querySelector('.card__arrow').style.transform = 'rotate(0deg)';
        }, 500);
    } else {
        e.querySelector('.card__arrow').style.animationName = 'arrowUp';
        e.closest('.coupon--ddp').style.animationName = "cardMore";
        e.closest('.coupon--ddp').style.height = "300px";
        e.closest('.coupon--ddp').style.minHeight = "300px";
        setTimeout(function(){
            e.querySelector('.card__arrow').style.transform = 'rotate(180deg)';
        }, 500);
        setTimeout(function(){
            e.closest('.coupon--ddp').scrollIntoView({ behavior: 'smooth' });
        }, 300); }}
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