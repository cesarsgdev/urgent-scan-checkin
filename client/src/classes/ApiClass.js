export class API {
  constructor() {
    this.baseUrl = "/api/";
    this.auth = "/auth/";
    this.token = localStorage.getItem("token");
    this.headers = {
      "Content-Type": "application/json",
      "x-access-token": this.token,
    };
  }

  createQuery(params) {
    let query = "";
    if (params) {
      query = Object.keys(params).map((key) => `${key}=${params[key]}`);
      query = query.join("&");
    }
    return query;
  }

  options(method, payload) {
    const options = {
      method: method || "GET",
      headers: this.headers,
      body: JSON.stringify(payload) || null,
    };
    return options;
  }

  async get(type, filters) {
    const query = await fetch(
      `${this.baseUrl}/${type}?${this.createQuery(filters)}`,
      this.options()
    );
    const data = await query.json();
    return data;
  }

  async getSingle(type, id) {
    const query = await fetch(`${this.baseUrl}/${type}/${id}`, this.options());
    const data = await query.json();

    return data;
  }

  async create(type, payload) {
    const query = await fetch(
      `${this.baseUrl}/${type}`,
      this.options("POST", payload)
    );

    const data = await query.json();
    return data;
  }

  async edit(type, id, payload) {
    const query = await fetch(
      `${this.baseUrl}/${type}/${id}`,
      this.options("PUT", payload)
    );

    const data = await query.json();
    return data;
  }

  async delete(type, id) {
    const query = await fetch(
      `${this.baseUrl}/${type}/${id}`,
      this.options("DELETE")
    );

    const data = await query.json();
    return data;
  }

  async login(userDetails) {
    const query = await fetch(
      `${this.auth}/login`,
      this.options("POST", userDetails)
    );

    const data = await query.json();
    return data;
  }
}
