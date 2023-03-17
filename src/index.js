const css = require('/src/index.css');

const blob = document.getElementById('blob');

window.onmousemove = event => {
    const {pageX, pageY} = event;

    blob.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
    }, {duration: 3000, fill: "forwards"});
}