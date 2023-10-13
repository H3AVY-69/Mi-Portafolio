let mainImg = document.getElementById("mainImg");
let IconLeft = document.getElementById("iconLeft");
let iconRigth = document.getElementById("iconRigth");
let mainImgFixed1 = document.getElementById("mainImgFixed1");
let mainImgFixed2 = document.getElementById("mainImgFixed2");
let mainImgFixed3 = document.getElementById("mainImgFixed3");
let mainImgFixed4 = document.getElementById("mainImgFixed4");



iconRigth.addEventListener("click", function() {
    if (!mainImgFixed1.classList.contains("img-hidden")) {
        mainImgFixed1.classList.add("img-hidden");
        mainImgFixed2.classList.remove("img-hidden");
    }
    else if (!mainImgFixed2.classList.contains("img-hidden")) {
        mainImgFixed2.classList.add("img-hidden");
        mainImgFixed3.classList.remove("img-hidden");
    }
    
});
