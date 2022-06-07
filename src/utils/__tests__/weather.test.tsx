import {
  getWindDirectionByDegree,
  getMpsToKmph,
  getTimestampToWeekday,
} from "../weather";

describe("Weather Utils - getWindDirectionByDegree", () => {
  it("should be get Northerly", () => {
    expect(getWindDirectionByDegree(337.7)).toEqual("N");
  });

  it("should be get North Westerly", () => {
    expect(getWindDirectionByDegree(292.7)).toEqual("NW");
  });

  it("should be get Westerly", () => {
    expect(getWindDirectionByDegree(247.7)).toEqual("W");
  });

  it("should be get South Westerly", () => {
    expect(getWindDirectionByDegree(202.7)).toEqual("SW");
  });

  it("should be get Southerly", () => {
    expect(getWindDirectionByDegree(157.7)).toEqual("S");
  });

  it("should be get South Easterly", () => {
    expect(getWindDirectionByDegree(122.7)).toEqual("SE");
  });

  it("should be get Easterly", () => {
    expect(getWindDirectionByDegree(67.7)).toEqual("E");
  });

  it("should be get North Easterly", () => {
    expect(getWindDirectionByDegree(22.7)).toEqual("NE");
  });

  it("should be get Northerly.", () => {
    expect(getWindDirectionByDegree(10.7)).toEqual("N");
  });
});

describe("Weather Utils - getMpsToKmph", () => {
  it("should be get North Easterly", () => {
    expect(getMpsToKmph(1.03)).toEqual(3.708);
  });
});

describe("Weather Utils - getTimestampToWeekday", () => {
  it("should be get North Easterly", () => {
    expect(getTimestampToWeekday(1654686000)).toEqual("Wednesday");
  });
});
