const toggleBtn = document.getElementById("theme-toggle");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
});

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".main-date");
    
    if (dateElement) {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        
        dateElement.textContent = currentDate;
    }
});


