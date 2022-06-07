import { render } from "@testing-library/react";
import { WeatherData, useWeatherData } from "../";
import { useApi } from "../../../../api/use-api";

jest.mock("../../../../api/use-api", () => ({
  useApi: jest.fn(),
}));

beforeEach(() => jest.clearAllMocks());

describe("useWeatherData", () => {
  it("should call Weather Data endpoint", () => {
    useWeatherData();
    expect(useApi).toHaveBeenCalledTimes(1);
  });
});

describe("WeatherData", () => {
  it("should return false", () => {
    (useApi as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const { baseElement } = render(<WeatherData />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should return error", () => {
    (useApi as jest.Mock).mockReturnValue({
      isLoading: false,
      error: new Error('foobar'),
    });
    const { baseElement } = render(<WeatherData />);
    expect(baseElement).toMatchSnapshot();
  });
});
