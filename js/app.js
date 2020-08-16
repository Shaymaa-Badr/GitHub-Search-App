const github = new Github();
const ui = new UI();
const userSearch = document.getElementById("search-user");
userSearch.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        // Show repose
        ui.showRepos(data.repos);
        console.log(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
