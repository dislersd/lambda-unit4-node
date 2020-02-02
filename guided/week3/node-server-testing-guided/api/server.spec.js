const request = require("supertest");
const server = require("./server");

describe("server", () => {
  it("runs the tests", () => {
    expect(true).toBe(true);
  });

  describe("GET /", () => {
    it("should return 200 ok", () => {
      //  make a get req
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
        });
    });
  });

  describe("GET /hobbits", () => {
    it("should return 200 ok", () => {
      return request(server)
        .get("/hobbits")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
