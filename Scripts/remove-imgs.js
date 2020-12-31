var listImgs = document.getElementsByTagName("img");

var i;
for (i = 0; i < listImgs.length; i++) {
    listImgs[i].className += " remove-opacity"
}