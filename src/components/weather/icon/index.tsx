import Thunderstorm from "../../icons/thunderstorm";
import ShowerRain from "../../icons/shower-rain";
import Rain from "../../icons/rain";
import Snow from "../../icons/snow";
import Mist from "../../icons/mist";
import ClearSky from "../../icons/clear-sky";
import ScatteredClouds from "../../icons/scattered-clouds";
import FewClouds from "../../icons/few-clouds";

export function Icon({ id }: { id: number }) {
  if (id >= 200 && id <= 232) {
    return <Thunderstorm />;
  } else if (id >= 300 && id <= 321) {
    return <ShowerRain />;
  } else if (id >= 500 && id <= 531) {
    return <Rain />;
  } else if (id >= 600 && id <= 622) {
    return <Snow />;
  } else if (id >= 701 && id <= 781) {
    return <Mist />;
  } else if (id === 800) {
    return <ClearSky />;
  } else if (id === 801) {
    return <FewClouds />;
  } else if (id >= 802 && id <= 804) {
    return <ScatteredClouds />;
  }
  return null;
}

export default Icon;
