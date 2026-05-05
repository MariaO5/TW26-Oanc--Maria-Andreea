        const routes = {
            "/home": "<h1>Home</h1>",
            "/products": "<h1>Products</h1>",
            "/contact": "<h1>Contact</h1>"
        }

        function render() {
            const route = window.location.hash.replace(/^#/, "");
            const countent = routes[route] || "<h1>404 Not Found</h1>";
            document.getElementById("app").innerHTML = countent;
        }

        window.addEventListener('hashchange', render);
        window.addEventListener('DOMContentLoaded', render);
        render();