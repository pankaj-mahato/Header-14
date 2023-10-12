document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const contentDiv = document.getElementById("content");
    function loadContent(targetHref) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", targetHref + ".html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                contentDiv.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    loadContent("home");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetHref = link.getAttribute("href").slice(1);
            loadContent(targetHref);
        });
    });
});

