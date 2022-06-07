import { render } from "@testing-library/react";
import { WeatherWidget, WeatherEntity } from "..";

const data: WeatherEntity = {
  current: {
    dt: 1654590718,
    temp: 25.36,
    humidity: 70,
    uvi: 5.86,
    wind_speed: 2.06,
    wind_deg: 220,
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
  },
  daily: [
    {
      dt: 1654599600,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1654686000,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1654772400,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1654858800,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1654945200,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1655031600,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1655118000,
      temp: {
        max: 25.71,
        min: 21.89,
      },
      weather: [
        {
          description: "scattered clouds",
          icon: "03d",
          id: 802,
          main: "Clouds",
        },
      ],
    },
    {
      dt: 1655204400,
      temp: {
        max: 29.2,
        min: 24.63,
      },
      weather: [
        {
          description: "clear sky",
          icon: "01d",
          id: 800,
          main: "Clear",
        },
      ],
    },
  ],
};

describe("Weather Widget", () => {
  it("should be rendered successfully", () => {
    const { container } = render(<WeatherWidget data={data} />);
    expect(container).toMatchSnapshot();
  });
});
