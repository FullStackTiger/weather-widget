import { render } from "@testing-library/react";
import { Icon } from "..";

describe("WeatherIcon", () => {
  it("should return Thunderstorm Icon", () => {
    const { container } = render(<Icon id={200} />);
    expect(container).toMatchSnapshot();
  });

  it("should return ShowerRain Icon", () => {
    const { container } = render(<Icon id={300} />);
    expect(container).toMatchSnapshot();
  });

  it("should return Rain Icon", () => {
    const { container } = render(<Icon id={500} />);
    expect(container).toMatchSnapshot();
  });

  it("should return Snow Icon", () => {
    const { container } = render(<Icon id={600} />);
    expect(container).toMatchSnapshot();
  });

  it("should return Mist Icon", () => {
    const { container } = render(<Icon id={701} />);
    expect(container).toMatchSnapshot();
  });

  it("should return ClearSky Icon", () => {
    const { container } = render(<Icon id={800} />);
    expect(container).toMatchSnapshot();
  });

  it("should return FewClouds Icon", () => {
    const { container } = render(<Icon id={801} />);
    expect(container).toMatchSnapshot();
  });

  it("should return ScatteredClouds Icon", () => {
    const { container } = render(<Icon id={802} />);
    expect(container).toMatchSnapshot();
  });

  it("should return null", () => {
    const { container } = render(<Icon id={102} />);
    expect(container).toMatchSnapshot();
  });
});
