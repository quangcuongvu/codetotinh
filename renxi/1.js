document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('nhac').play();
    document.removeEventListener('click', musicPlay);
}
// bắt nhạc chạy khi click