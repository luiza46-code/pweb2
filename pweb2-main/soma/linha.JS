const textarea = document.getElementById("Texto");

textarea.addEventiListener("input", function() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});

textarea.style.height = (textarea.scrollHeight) + 'px';