let $ = document.querySelector.bind(document);


window.onload = function() {
    setTimeout(function() {
        $("#title").classList.remove("is-loading");
      }, 100);
};

