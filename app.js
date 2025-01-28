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
    "re: just one more feature",
];

document.addEventListener('DOMContentLoaded', function () {
    insertRecents();
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