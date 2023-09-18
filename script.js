document.addEventListener("DOMContentLoaded", function () {
    const rotateButton = document.getElementById("rotateButton");
    const rotateTarget = document.getElementsByTagName("html");
    let isRotated = false;

    rotateButton.addEventListener("click", function () {
        if (!isRotated) {
            for(var i = 0; i < rotateTarget.length; ++i){
                rotateTarget[i].style.transition = "transform 0.5s";
                rotateTarget[i].style.transform = "rotate(180deg)";
            }
        } else {
            for(var i = 0; i < rotateTarget.length; ++i){
                rotateTarget[i].style.transition = "transform 0.5s";
                rotateTarget[i].style.transform = "rotate(0deg)";
            }
        }

        isRotated = !isRotated;
    });
});
