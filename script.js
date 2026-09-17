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
