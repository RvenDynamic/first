function toggleDropdown() {
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdown = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
