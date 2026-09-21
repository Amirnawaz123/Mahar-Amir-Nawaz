/**
 * Toggle the mobile navigation panel open and closed.
 *
 * @returns {void}
 */
function toggleMobileMenu() {
    if (!navLinks) {
        return;
    }

    navLinks.classList.toggle("open");
}

/**
 * Close the mobile navigation panel after a nav link is selected.
 *
 * @returns {void}
 */
function closeMobileMenu() {
    if (!navLinks) {
        return;
    }

    navLinks.classList.remove("open");
}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", toggleMobileMenu);
}

document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});
