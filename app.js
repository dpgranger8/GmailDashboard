const menu = document.getElementById("popupMenu");
const actualSearchBar = document.getElementById("searchActualInput");
const fakeSearchBar = document.getElementById("searchInput");

function focusedSearchBar() {
    menu.style.display = "flex";
    actualSearchBar.focus();
}

function unFocusedSearchBar() {
    menu.style.display = "none";
}

const recentSearches = [
    "expired coupon refund",
    "exit strategy 2025",
    "therapy appointment",
    "investor feedback 'just make it simpler'",
    "sugar-free gummy bears",
    "re: just one more feature"
];

class Spacer extends HTMLElement {
    constructor() {
        super();
        this.style.display = "block"; // Ensures it behaves like a block-level element
        this.style.width = "100%";
        this.style.height = "5px";
        this.style.background = "transparent";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    insertRecents();
    customElements.define('custom-spacer', Spacer);
    insertEmails();
})


function insertRecents() {
    const recentsContainer = document.querySelector('.recents');
    recentSearches.forEach(search => {
        const recentDiv = document.createElement('div');
        recentDiv.classList.add('recent');

        const scheduleIcon = document.createElement('span');
        scheduleIcon.classList.add('material-symbols-outlined');
        scheduleIcon.textContent = 'schedule';

        const recentText = document.createElement('span');
        recentText.classList.add('recentText');
        recentText.textContent = search;

        const closeIcon = document.createElement('span');
        closeIcon.classList.add('material-symbols-outlined');
        closeIcon.textContent = 'close';

        recentDiv.appendChild(scheduleIcon);
        recentDiv.appendChild(recentText);
        recentDiv.appendChild(closeIcon);

        recentsContainer.appendChild(recentDiv);
    });
}

const mainContent = document.getElementById("mainContent");
const mailBoxButtons = document.getElementById("mailboxButtons");

function clickedHamburger() {
    const currentMarginLeft = window.getComputedStyle(mainContent).marginLeft;

    if (currentMarginLeft === "-290px") {
        mailBoxButtons.style.opacity = "1";
        mainContent.style.marginLeft = "0px";
    } else {
        mailBoxButtons.style.opacity = "0";
        mainContent.style.marginLeft = "-290px";
    }
}

const emails = [
    ["Toaster Corp", "Your toaster just signed up for a dance class! Check it out!", "Jan 28"],
    ["Breakfast Innovations", "Start your day with the new Breakfast Jetpack! Limited offer!", "Jan 26"],
    ["Shelf Wizards", "Three books you’ll never read but totally need on your shelf!", "Jan 26"],
    ["Alien HQ", "Aliens called—your lunchbox was their leader all along!", "Jan 26"],
    ["Dino Times", "Dinosaurs are back! But only for the next 24 hours.", "Jan 24"],
    ["Magic Wand Co.", "Magic wand recall: Turns things into ducks unexpectedly.", "Jan 23"],
    ["Avocado News", "Avocado toast prices plummet. Millennials rejoice!", "Jan 22"],
    ["Taco Tech", "Tacos that double as Wi-Fi hotspots? Yes, please.", "Jan 20"],
    ["Octopus Advocacy", "Your octopus wants a raise. Read their compelling argument.", "Jan 20"],
    ["Sock Innovators", "Virtual reality socks: Finally, a reason to love laundry day!", "Jan 19"],
    ["Cat Couture", "Sunglasses for your cat? A fashion revolution is here!", "Jan 16"],
    ["Mars Travel Co.", "Vacation on Mars? It's cheaper than you think!", "Jan 15"],
    ["Unicorn Networks", "A unicorn stole your Wi-Fi password. Here's what to do.", "Jan 14"],
    ["UFO Daily", "Donut-shaped UFO spotted. Are they friendly?", "Jan 13"],
    ["Bubble Wrap HQ", "Job offer: CEO of Bubble Wrap Popping. Apply now!", "Jan 12"],
    ["Safety Innovations", "Lightning-proof umbrellas: Because safety is shocking.", "Jan 11"],
    ["Smart Fridges", "Your fridge is hosting a podcast. Tune in tonight.", "Jan 10"],
];

function insertEmails() {
    const emailsContainer = document.querySelector('#mainContent');
    if (!emailsContainer) {
        console.error("mainContent container not found!");
        return;
    }

    emails.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.classList.add('emailItem');

        const checkSpan = document.createElement('span');
        checkSpan.classList.add('material-symbols-outlined');
        checkSpan.textContent = "check_box_outline_blank";

        const starSpan = document.createElement('span');
        starSpan.classList.add('material-symbols-outlined');
        starSpan.textContent = "star";

        const sender = document.createElement('p');
        sender.classList.add('sender')
        sender.textContent = email[0];

        const content = document.createElement('p');
        content.textContent = email[1];

        const date = document.createElement('p');
        date.textContent = email[2];

        const spacer = document.createElement('div'); // Use a div for spacing
        spacer.classList.add('spacer');

        emailsContainer.appendChild(emailItem);
        emailItem.appendChild(checkSpan);
        emailItem.appendChild(starSpan);
        emailItem.appendChild(sender);
        emailItem.appendChild(spacer.cloneNode());
        emailItem.appendChild(content);
        emailItem.appendChild(spacer.cloneNode());
        emailItem.appendChild(date);
    });
}
