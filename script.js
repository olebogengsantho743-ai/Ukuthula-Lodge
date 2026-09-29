/* =========================================
   MOBILE MENU
========================================= */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("navMenu");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
}

/* Close mobile menu after clicking a link */
const navLinks = document.querySelectorAll("#navMenu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mainNav) {
            mainNav.classList.remove("active");
        }
    });
});

/* =========================================
   WEBSITE SEARCH
========================================= */

function searchWebsite() {
    const searchBox = document.getElementById("websiteSearch");
    if (!searchBox) return;

    const searchTerm = searchBox.value.toLowerCase().trim();
    if (searchTerm === "") {
        alert("Please enter something to search.");
        return;
    }

    // Remove previous highlights
    document
        .querySelectorAll(".search-highlight")
        .forEach(el => el.classList.remove("search-highlight"));

    /*
       Search in key content blocks:
       - cards, activity cards, sustainability cards, team cards
       - contact items, section blocks
    */
    const elements = document.querySelectorAll(
        ".card, " +
        ".activity-card, " +
        ".sustainability-card, " +
        ".team-card, " +
        ".overview-grid > div, " +
        ".contact-grid > div, " +
        ".cta, " +
        "section"
    );

    let firstMatch = null;

    elements.forEach(el => {
        const text = el.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            if (!firstMatch) {
                firstMatch = el;
            }
            el.classList.add("search-highlight");
        }
    });

    if (!firstMatch) {
        alert("No results found for: " + searchTerm);
        return;
    }

    // Scroll to the first matching element
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* Bind search to button and Enter key */
const searchButton = document.getElementById("searchButton");
if (searchButton) {
    searchButton.addEventListener("click", searchWebsite);
}

const searchInput = document.getElementById("websiteSearch");
if (searchInput) {
    searchInput.addEventListener("keyup", event => {
        if (event.key === "Enter") {
            searchWebsite();
        }
    });
}

/* =========================================
   BOOKING / AVAILABILITY
========================================= */
function checkAvailability() {
    const checkInElement = document.getElementById("checkIn");
    const checkOutElement = document.getElementById("checkOut");
    const guestsElement = document.getElementById("guests");

    if (!checkInElement || !checkOutElement || !guestsElement) return;

    const checkIn = checkInElement.value;
    const checkOut = checkOutElement.value;
    const guests = guestsElement.value || "1";

    if (!checkIn || !checkOut) {
        alert("Please select your check-in and check-out dates.");
        return;
    }

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (endDate <= startDate) {
        alert("Check-out must be after check-in.");
        return;
    }

    alert(
        `Thank you! Your enquiry for ${guests} guest(s)\n` +
        `From: ${checkIn}\nTo: ${checkOut}\n\n` +
        "has been prepared. Please contact Ukuthula Lodge to confirm availability."
    );
}

/* Attach to button */
const checkAvailabilityBtn = document.getElementById("checkAvailabilityBtn");
if (checkAvailabilityBtn) {
    checkAvailabilityBtn.addEventListener("click", checkAvailability);
}

/* =========================================
   DATE VALIDATION
========================================= */
const today = new Date().toISOString().split("T")[0];
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

if (checkInInput) {
    checkInInput.setAttribute("min", today);
}

if (checkOutInput) {
    checkOutInput.setAttribute("min", today);
}

/* Update check-out min when check-in changes */
if (checkInInput && checkOutInput) {
    checkInInput.addEventListener("change", function () {
        checkOutInput.setAttribute("min", this.value || today);
        if (checkOutInput.value && checkOutInput.value < this.value) {
            checkOutInput.value = this.value;
        }
    });
}

/* =========================================
   LOYALTY PROGRAMME (optional)
========================================= */
function loyaltyMessage() {
    alert(
        "Thank you for your interest in the Ukuthula Loyalty Programme! " +
        "Please contact Ukuthula Lodge for more information about membership and benefits."
    );
}
