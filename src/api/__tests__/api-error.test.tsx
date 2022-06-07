import { isApiError, ApiError } from "../api-error";

const mockData: ApiError = {
  code: 500,
  message: "server error",
};

describe("ApiError", () => {
  it("should return message", () => {
    expect(isApiError(mockData)).toBe(true);
  });
});
