

"use strict";
var view = document.getElementById('view')
var textarea = document.createElement("textarea");
textarea.innerHTML = 'write here';


document.onkeyup = function key(event) {

    if (event.ctrlKey && event.keyCode === 69) {
        event.preventDefault();
        view.parentElement.replaceChild(textarea, view);
    }

    if (event.ctrlKey && event.keyCode === 83) {
        event.preventDefault();
        var text = textarea.value;
        textarea.parentElement.replaceChild(view, textarea);
        view.innerHTML = text;


    }


    if (event.keyCode === 27) {
        event.preventDefault();
        textarea.parentElement.replaceChild(view, textarea);


    }
}

