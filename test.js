const screenLog = document.querySelector('#screen-log');
const dot = document.querySelector('#dot');
document.addEventListener('mousemove', dotMove);

function dotMove(e) {
    let clX = e.clientX;
    let clY = e.clientY;
    dot.style.left = clX + 'px';
    dot.style.top = clY + 'px';

}