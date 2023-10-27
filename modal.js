document.addEventListener("DOMContentLoaded", function () {
  if (!getCookie("modalShown")) {
    // The modal has not been shown during this visit, so display it.
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Close the modal when the "X" is clicked
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      setCookie("modalShown", "true", 1); // Set a cookie to track that the modal has been shown
    });
  }
});

// Helper function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Helper function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
