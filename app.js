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