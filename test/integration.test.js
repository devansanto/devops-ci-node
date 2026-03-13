const request = require("supertest");
const app = require("../index");

describe("Integration Test API", () => {

  test("GET / harus return status 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("GET / harus return message", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("Hello DevOps - Devan Santo");
  });

});