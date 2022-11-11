function drop(e) {
    if (e.parentElement.classList.contains('dropup')) {
        e.parentElement.classList.remove('dropup');
        e.parentElement.classList.add('dropdown'); }
    else if (e.parentElement.classList.contains('dropdown')) {
        e.parentElement.classList.remove('dropdown');
        e.parentElement.classList.add('dropup'); }
}