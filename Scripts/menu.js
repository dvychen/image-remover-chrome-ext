// function removeImgOpacity(listImgs) {
//     var i;
//     for (i = 0; i < listImgs.length; i++) {
//         listImgs[i].style.opacity = "0"
//     }
// }

// function restoreImgOpacity(listImgs) {
//     var i;
//     for (i = 0; i < listImgs.length; i++) {
//         listImgs[i].style.opacity = "1"
//     }
// }

// function toggleImgOpacity() {
//     var listImgs = document.getElementsByTagName("img");
//     var arbImg = listImgs[0]; // arbitrary image
//     if (arbImg.style.opacity == "" || arbImg.style.opacity == 1) { // if not removed
//         removeImgOpacity(listImgs);
//     }
//     else {
//         restoreImgOpacity(listImgs);
//     }
// }

function myTest() {
    alert("My test function!");
}

// document.getElementById("test-button").addEventListener("click", toggleImgOpacity);

document.getElementById("test-button").addEventListener("click", myTest);