window.onload = function() {
    
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

// 授權條款popup
function popTerm() {
    document.getElementById("popTerm").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 綁定成功popup
function popSuccess() {
    document.getElementById("popSuccess").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 確認解除綁定popup
function popConfirm() {
    document.getElementById("popConfirm").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 解除綁定成功popup
function popUnbindSuccess() {
    document.getElementById("popUnbindSuccess").style.display = "flex";
    document.body.style.overflow = "hidden"; }