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

    if (!searchBox) {
        return;
    }

    const searchTerm = searchBox.value.toLowerCase().trim();

    if (searchTerm === "") {

        alert("Please enter something to search.");

        return;
    }


    /*
       Search smaller elements first.
       This helps the search find the exact
       room, activity, meal, etc.
    */

    const elements = document.querySelectorAll(
        ".card, " +
        ".activity-card, " +
        ".sustainability-card, " +
        ".platform, " +
        ".overview-grid > div, " +
        ".team-card, " +
        ".package-card, " +
        ".package-list-item, " +
        ".room-card, " +
        ".included-accommodation, " +
        ".catering-box, " +
        ".video-content, " +
        ".uniform-section, " +
        ".loyalty-card, " +
        ".contact-grid > div, " +
        ".partnership-box > div, " +
        ".about"
    );


    let foundElement = null;


    for (const element of elements) {

        const text = element.innerText.toLowerCase();

        if (text.includes(searchTerm)) {

            foundElement = element;

            break;
        }
    }


    if (foundElement) {

        foundElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


        /*
           Highlight the result
        */

        foundElement.style.transition = "0.3s ease";

        foundElement.style.boxShadow =
            "0 0 30px rgba(138, 118, 87, 0.9)";

        foundElement.style.transform = "scale(1.02)";


        setTimeout(() => {

            foundElement.style.boxShadow = "";
            foundElement.style.transform = "";

        }, 2500);


    } else {

        alert(
            "Sorry, we couldn't find '" +
            searchTerm +
            "' on the website."
        );

    }

}


/* =========================================
   ENTER KEY FOR SEARCH
========================================= */

const searchBox = document.getElementById("websiteSearch");

if (searchBox) {

    searchBox.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

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


    if (!checkInElement || !checkOutElement || !guestsElement) {
        return;
    }


    const checkIn = checkInElement.value;
    const checkOut = checkOutElement.value;
    const guests = guestsElement.value;


    if (!checkIn || !checkOut) {

        alert(
            "Please select your check-in and check-out dates."
        );

        return;
    }


    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);


    if (endDate <= startDate) {

        alert(
            "Check-out must be after check-in."
        );

        return;
    }


    alert(
        `Thank you! Your enquiry for ${guests} guest(s) has been prepared. Please contact Ukuthula Lodge to confirm availability.`
    );

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


/* =========================================
   UPDATE CHECK-OUT DATE
========================================= */

if (checkInInput && checkOutInput) {

    checkInInput.addEventListener("change", function() {

        checkOutInput.setAttribute(
            "min",
            this.value
        );

    });

}


/* =========================================
   LOYALTY PROGRAMME
========================================= */

function loyaltyMessage() {

    alert(
        "Thank you for your interest in the Ukuthula Loyalty Programme! Please contact Ukuthula Lodge for more information about membership and benefits."
    );

}
