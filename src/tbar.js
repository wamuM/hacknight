var fn;
function setbar(progress, total) {
    var element = document.getElementById("tbar");
    element.style.width = progress;
}

function updatebar(step, total, fullEvent) {
    var element = document.getElementById("tbar");
    element.style.width += step/total*window.innerWidth + "px"; 
    if (element.style.width >= window.innerWidth) {
        fullEvent();
        element.style.width = 0;
    }
}

export default {
    setbar,updatebar
}