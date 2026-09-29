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
    const search = document.getElementById("websiteSearch").value
        .toLowerCase()
        .trim();

    if (search === "") {
        return;
    }

    const sections = document.querySelectorAll("section, div");

    let found = false;

    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(search)) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            section.style.outline = "3px solid #8a7657";

            setTimeout(() => {
                section.style.outline = "";
            }, 2000);

            found = true;
        }
    });

    if (!found) {
        alert("Sorry, we couldn't find anything matching your search.");
    }
}
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
