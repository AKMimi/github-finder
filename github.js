class Github {
  constructor() {
    this.client_id = "Iv1.4246ce1d46508208";
    this.client_secret = "34220c5915a074426315dd13c8b5654b5e120261";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse =
      await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
            &client_secret=${this.client_secret}`);
    const repoResponse =
      await fetch(`https://api.github.com/users/${user}/repos?
      per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
            &client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
