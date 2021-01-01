function removeImgOpacity(listImgs) {
    var i;
    for (i = 0; i < listImgs.length; i++) {
        listImgs[i].style.opacity = "0"
    }
}

function restoreImgOpacity(listImgs) {
    var i;
    for (i = 0; i < listImgs.length; i++) {
        listImgs[i].style.opacity = "1"
    }
}

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

function toggleImgOpacity(isRemoved) {
    var listImgs = document.getElementsByTagName("img");
    if (isRemoved) { 
        restoreImgOpacity(listImgs);
    }
    else {
        removeImgOpacity(listImgs);
    }
}

var isRemoved = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            toggleImgOpacity(isRemoved);
            isRemoved = !isRemoved;
            console.log("isRemoved: " + isRemoved);
        }
    }
);