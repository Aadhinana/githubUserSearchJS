// Have the client Id and secret to attach to every request
class GitHub {
  constructor() {
    this.client_id = "7ad0fe3b4aef82c2ed40";
    this.client_secret = "ae546f52200474a36f2e42a18ac62040f1e58723";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  //   Fetch user data using fetch and call ui to paint DOM
  async getUser(user) {
    const response = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // Get repo data for user
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sorts}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await response.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
