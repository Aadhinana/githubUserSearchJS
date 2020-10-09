// Init github
const git = new GitHub();
// Init ui
const ui = new UI();

// Get ref to input text
const inputText = document.querySelector("#search-text");

// Listen to type events
inputText.addEventListener("keyup", function (e) {
  e.preventDefault();

  if (inputText.value !== "") {
    // call the getUser from GitHub
    git
      .getUser(inputText.value)
      .then(({ profile, repos }) => {
        // Check if user exists for given username
        if (profile.message === "Not Found") {
          ui.showAlert(`${inputText.value} Not Found!`, "alert alert-danger");
        } else {
          ui.showProfile(profile, repos);
        }
      })
      .catch((e) => {});
  } else {
    //   No input. Clear the profile in the DOM.
    ui.clearProfile();
  }
});
