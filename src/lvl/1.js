var count=0;

function ruSure() {
    if (count == 0) {
    document.getElementById("sure").innerText="Are you sure?"
    }
    else {
        document.getElementById("sure").innerHTML+=" sure? <br>"
        if (count >= 15) window.location.href = "./2.html";
    }
    count++;
}