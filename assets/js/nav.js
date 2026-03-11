document.addEventListener("DOMContentLoaded", function() {
    // 1. The Navigation HTML
    const navHTML = `
        <nav>
            <a href="index.html" class="logo"><span class="logo-first">semj</span><span class="logo-second">28.</span></a>
            <div class="nav-links">
                <a href="resources.html" id="nav-resources">Resources</a>
                <a href="index.html" id="nav-connect">Connect</a>
                <a href="about.html" id="nav-about">About Me</a>
            </div>
        </nav>
    `;

    // 2. Inject it into the placeholder
    const placeholder = document.getElementById("nav-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navHTML;
    }

    // 3. Highlight the active page automatically
    const currentPath = window.location.pathname;
    
    if (currentPath.includes("about.html")) {
        document.getElementById("nav-about").classList.add("active");
    } else if (currentPath.includes("resources.html") || currentPath.includes("html")) {
        // We will make the Hub active for all resource sub-pages too!
        if(currentPath.includes("resources.html") || currentPath.includes("-")) {
             document.getElementById("nav-resources").classList.add("active");
        }
    } else {
        document.getElementById("nav-connect").classList.add("active");
    }
});