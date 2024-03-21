/* Script starts */
function pointerMove(e){
    let pointer =  document.querySelector('.pointer');
    let x = e.clientX;
    let y = e.clientY;
    pointer.style.left = eval(x - 10) + 'px';
    pointer.style.top = eval(y - 10) + 'px';
}