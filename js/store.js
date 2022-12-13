window.onload = function() {
    // popBarcode();
    // popNotification();
    // popIntro();
    // popVisit();
    // popPointRule();
    // popInvite();
    popBanner();
}

// Safari防止左右滑上下頁
const elements = ['html', 'body', '.main', '.foot', '.pop'];
elements.forEach(
    element => { ele = document.querySelector(element);
        ele.addEventListener('touchstart', (e) => {
            if (e.pageX > 20 && e.pageX < window.innerWidth - 20) return;
            e.preventDefault(); })});

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

// 小通知popup
function popBanner() {
    document.getElementById("popBanner").style.display = "flex";
    setTimeout(function(){
        document.getElementById("popBanner").closest('.pop').children[0].style.animationName = "bannerUp";
        setTimeout(function(){
            document.getElementById("popBanner").closest('.pop').style.display = "none";
            document.getElementById("popBanner").closest('.pop').children[0].style.animationName = "bannerDown";
        }, 500);
    }, 5000); }
function popBannerClose(e) {
    e.closest('.pop').children[0].style.animationName = "bannerUp";
    setTimeout(function(){
        e.closest('.pop').style.display = "none";
        e.closest('.pop').children[0].style.animationName = "bannerDown";
    }, 500); }

// 點數規則popup
function popPointRule() {
    document.getElementById("popPointRule").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 會員條碼popup
function popBarcode() {
    document.getElementById("popBarcode").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 通知popup
function popNotification() {
    document.getElementById("popNotification").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 集點獎品popup
function popGift() {
    document.getElementById("popGift").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 確認兌換popup
function popConfirm() {
    document.getElementById("popConfirm").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 確認兌換popup
function popSuccess() {
    document.getElementById("popSuccess").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 邀請禮popup
function popInvite() {
    document.getElementById("popInvite").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 首次加入popup
function popIntro() {
    document.getElementById("popIntro").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 訪客模式popup
function popVisit() {
    document.getElementById("popVisit").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Carousel
// https://flickity.metafizzy.co
var flkty = new Flickity( '.menus', {
    cellAlign: 'left',
    contain: true,
    pageDots: false
});
var flkty = new Flickity( '.carousel', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true
});

// Tab切換
function switchTab(e, type) {
    let getSiblings = function (e) {
        let siblings = []; 
        if(!e.parentNode) { return siblings; }
        let sibling  = e.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                siblings.push(sibling); }
            sibling = sibling.nextSibling;}
        return siblings; };
    let siblings = getSiblings(e);
    siblings.forEach(e => { e.classList.remove("active"); });
    e.classList.add("active");
    switch (type) {
        case 'point':
            document.querySelectorAll('section.point')[0].style.display = "flex";
            document.querySelectorAll('section.coupon')[0].style.display = "flex";
            document.querySelectorAll('section.coupon')[1].style.display = "flex";
            break;
        case 'ticket':
            document.querySelectorAll('section.point')[0].style.display = "none";
            document.querySelectorAll('section.coupon')[0].style.display = "flex";
            document.querySelectorAll('section.coupon')[1].style.display = "none";
            break;
        case 'stamp':
            document.querySelectorAll('section.point')[0].style.display = "none";
            document.querySelectorAll('section.coupon')[0].style.display = "none";
            document.querySelectorAll('section.coupon')[1].style.display = "flex";
            break; }}