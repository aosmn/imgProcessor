import request from "supertest";
import { app } from "../index";

describe("image processing route", () => {
  it("should respond with an image if valid params are sent", async () => {
    const response = await request(app).get(
      "/api/images?filename=palmtunnel.jpg&width=200&height=100"
    );
    expect(response.status).toBe(200);
  });

  it("should respond with an error if file is not found", async () => {
    const response = await request(app).get(
      "/api/images?filename=palmtnel.jpg&width=200&height=100"
    );
    expect(response.status).toBe(404);
    expect(response.text).toBe("File not found");
  });

  it("should respond with an error if invalid params are sent", async () => {
    const response = await request(app).get(
      "/api/images?filename=palmtunnel.jpg&height=100"
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe("Missing parameter");
  });
});
