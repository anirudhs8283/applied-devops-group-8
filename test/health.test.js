import request from "supertest";
import app from "../src/app.js";
import { expect } from "chai";

describe("Health API", () => {
  it("should return ok true", async () => {
    const res = await request(app).get("/health");

    expect(res.status).to.equal(200);
    expect(res.body.ok).to.equal(true);
  });
});