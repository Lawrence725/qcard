// On open
window.addEventListener('message', function(event) {
    if (event.data === "opened") {
        popLogin();
        // popVerify();
    }});

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
                    parent.postMessage('closed', '*');
                }, 500); }}
    else if (!(e.classList.contains('pop__body'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popup";
            document.body.style.overflow = "scroll";
            parent.postMessage('closed', '*');
        }, 500); } }

// 會員登入popup
function popLogin() {
    document.getElementById("pop__login").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 會員認證popup
function popVerify() {
    document.getElementById("pop__verify").style.display = "flex";
    document.body.style.overflow = "hidden"; }