```javascript
/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

    });

});
<script>
function searchWebsite() {

    const searchBox = document.getElementById("websiteSearch");
    const searchTerm = searchBox.value.toLowerCase().trim();

    if (searchTerm === "") {
        alert("Please enter something to search.");
        return;
    }

    // Search through the main sections of the website
    const elements = document.querySelectorAll(
        "section, article, .card, .room-card, .activity-card, .menu-item"
    );

    let found = false;

    elements.forEach(element => {

        const text = element.innerText.toLowerCase();

        if (!found && text.includes(searchTerm)) {

            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            element.style.transition = "0.3s";
            element.style.boxShadow = "0 0 25px rgba(138, 118, 87, 0.8)";

            setTimeout(() => {
                element.style.boxShadow = "";
            }, 2500);

            found = true;
        }
    });

    if (!found) {
        alert("Sorry, we couldn't find '" + searchTerm + "' on the website.");
    }
}


// Press ENTER to search
document.getElementById("websiteSearch").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchWebsite();
    }
});
</script>

/* =========================================
   BOOKING / AVAILABILITY
========================================= */

function checkAvailability() {

    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guests = document.getElementById("guests").value;

    const message = document.getElementById("bookingMessage");


    if (!checkIn || !checkOut) {

        message.textContent =
            "Please select your check-in and check-out dates.";

        return;
    }


    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);


    if (endDate <= startDate) {

        message.textContent =
            "Check-out must be after check-in.";

        return;
    }


    message.textContent =
        `Thank you! Your enquiry for ${guests} has been prepared. Please contact Ukuthula Lodge to confirm availability.`;

}


/* =========================================
   DATE VALIDATION
========================================= */

const today = new Date().toISOString().split("T")[0];

document.getElementById("checkIn").setAttribute("min", today);
document.getElementById("checkOut").setAttribute("min", today);


/* =========================================
   UPDATE CHECK-OUT DATE
========================================= */

document.getElementById("checkIn").addEventListener("change", function () {

    document
        .getElementById("checkOut")
        .setAttribute("min", this.value);

});
```
