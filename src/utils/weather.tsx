export function getWindDirectionByDegree(degree: number) {
  if (degree > 337.5) return "N"; //Northerly
  if (degree > 292.5) return "NW"; //North Westerly
  if (degree > 247.5) return "W"; //Westerly
  if (degree > 202.5) return "SW"; //South Westerly
  if (degree > 157.5) return "S"; //Southerly
  if (degree > 122.5) return "SE"; //South Easterly
  if (degree > 67.5) return "E"; //Easterly
  if (degree > 22.5) {
    return "NE"; //North Easterly
  }
  return "N"; //Northerly
}

// function to convert speed in m/sec to km/hr
export function getMpsToKmph(mps: number) {
  return 3.6 * mps;
}

// function to convert Timestamp in m/sec to Weekday
export function getTimestampToWeekday(timestamp: number) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayNumber = new Date(timestamp * 1000).getDay();
  return days[dayNumber];
}
