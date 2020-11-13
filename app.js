var checkbox = document.getElementsByTagName("input")[0];

checkbox.addEventListener("change", function (event) {
    /* event.target.checked = checkbox.checked; */
    if (event.target.checked) {
        window.localStorage.setItem("darkmode", "true");
        document.body.classList.add("darkmode");
    } else {
        window.localStorage.removeItem("darkmode");
        document.body.classList.remove("darkmode");
    }
});

if (window.localStorage.getItem("darkmode")) {
    checkbox.checked = true;
    document.body.classList.add("darkmode");
}