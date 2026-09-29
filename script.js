/* =====================================================
UKUTHULA LODGE
WHEN NATURE MEETS BEAUTY
===================================================== */

:root {
--dark: #30291f;
--dark-brown: #493b2b;
--brown: #695640;
--khaki: #a99b7d;
--light-khaki: #d8cfbc;
--cream: #f7f3eb;
--white: #ffffff;
--border: #dcd4c5;
--text: #40392f;
}

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
scroll-behavior: smooth;
}

body {
font-family: Arial, Helvetica, sans-serif;
background: var(--cream);
color: var(--text);
line-height: 1.6;
}

img {
max-width: 100%;
}

a {
text-decoration: none;
color: inherit;
}

/* DOPE SEARCH BAR */
.search-container {
display: flex;
justify-content: center;
align-items: center;
max-width: 600px;
margin: 25px auto;
background: rgba(255, 255, 255, 0.95);
border: 1px solid #d6c7ad;
border-radius: 50px;
padding: 6px;
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.search-container input {
flex: 1;
border: none;
outline: none;
background: transparent;
padding: 14px 20px;
font-size: 16px;
color: #4a4035;
}

.search-container input::placeholder {
color: #8c8172;
}

.search-container button {
border: none;
border-radius: 50%;
width: 48px;

.section-image img {
height: 350px;
}

.section-content h2 {
font-size: 34px;
}

.features {
grid-template-columns: 1fr;
padding: 45px 8%;
}

.feature {
border-right: none;
border-bottom: 1px solid rgba(73, 59, 43, 0.2);
}

.feature:last-child {
border-bottom: none;
}

.card-grid,
.activity-grid {
grid-template-columns: 1fr;
}

/* SAME IMAGE SIZE ON MOBILE TOO */

.card img,
.activity-card img {
height: 250px;
width: 100%;
object-fit: cover;
}

.image-break {
min-height: 350px;
}

.image-break h2 {
font-size: 34px;
}

.sustainability {
width: 100%;
}

.sustainability-grid {
grid-template-columns: 1fr;
}

.video-section {
padding: 70px 6%;
}

.video-content h2 {
font-size: 34px;
}

.video-placeholder {
height: 280px;
}

.overview-grid {
grid-template-columns: 1fr;
}

.loyalty-section {
padding: 70px 6%;
}

.loyalty-card {
padding: 35px 25px;
flex-direction: column;
text-align: center;
}

.loyalty-card h2 {
font-size: 32px;
}

.partnership-box {
grid-template-columns: 1fr;
}

.uniform-section {
grid-template-columns: 1fr;
}

.uniform-content {
padding: 70px 8%;
}

.uniform-content h2 {
font-size: 34px;
}

.uniform-image {
height: 350px;
}

.team-grid {
grid-template-columns: 1fr;
}

.cta {
padding: 80px 6%;
}

.cta h2 {
font-size: 35px;
}
}
