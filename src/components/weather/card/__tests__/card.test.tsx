import { render } from "@testing-library/react";
import { WeatherCard } from "..";

describe("WeatherIcon", () => {
  it("should be rendered successfully", () => {
    const { baseElement } = render(
      <WeatherCard
        temperature={19}
        humidity={69}
        uvi={1.223}
        windSpeed={2.34}
        windDeg={270}
        weatherIconId={200}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
