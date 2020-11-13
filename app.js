var checkbox = document.getElementsByTagName("input")[0];

checkbox.addEventListener("change", function (event) {
    /* event.target.checked = checkbox.checked; */
    if (event.target.checked) {
        window.localStorage.setItem("darkmode", "true");
    } else {
        window.localStorage.removeItem("darkmode");
    }
})