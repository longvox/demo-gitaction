const request = require("supertest");
const app = require("../index");

// eslint-disable-next-line no-undef
describe("GET /", () => {
  // eslint-disable-next-line no-undef
  it("respond with Hello World via Github Actions", (done) => {
    request(app)
      .get("/")
      .expect("Hello World via Github Actions", done);
  });
});
