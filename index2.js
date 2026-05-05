
        function render() {
            const route = window.location.hash.replace(/^#/, "");
            const countent = routes[route] || "<h1>404 Not Found</h1>";
            document.getElementById("app").innerHTML = countent;
        }


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        history.pushState({}, "", href);
        render(href);
        event.preventDefault();
        
    })
})


window.addEventListener("popstate", () => {
    render(location.pathname);
})

history.replaceState({}, "", "/home");