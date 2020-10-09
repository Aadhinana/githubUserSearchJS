class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.repoDiv = document.getElementById("repos");
  }

  //   Paint the profile to DOM
  showProfile(user, repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // Add repo to DOM
    this.repoDiv.innerHTML = output;

    // Build profile and paint DOM
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-3" src="${user.avatar_url}"/>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4">View Profile</a>
                </div>
            <div class="col-md-9">
                <p class="lead">${user.name}</p>
                <span class="badge badge-primary">Followers: ${user.followers}</span>
                <span class="badge badge-secondary">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Website : <a href="${user.blog}">${user.blog}</a></li>
                </ul>
            </div>
        </div>
    </div>    
    `;
  }

  //   Clear the profile from DOM if no input
  clearProfile() {
    this.profile.innerHTML = ``;
    this.repoDiv.innerHTML = ``;
  }

  //   Show alert if username does not exits
  showAlert(msg, classes) {
    // Clear any alerts if they exists
    this.clearAlert();

    //   create a div dynamically and insert it before form
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(msg));

    // get search container as parent to add alert
    const container = document.querySelector("#search-container");
    // get form to append before
    const form = document.querySelector("form");
    // Add the alert
    container.insertBefore(div, form);

    // Clear any alert set after 2 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  //   clear alert message
  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
