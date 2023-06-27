window.onload = function() {
    // popInvite();
    // popBarcode();
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

// 載具條碼popup
function popBarcode() {
    document.getElementById("popBarcode").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 邀請好友popup
function popInvite() {
    document.getElementById("popInvite").style.display = "flex";
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