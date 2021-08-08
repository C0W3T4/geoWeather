import Icon01d from '../assets/weather/01d/01d.png';
import Icon01n from '../assets/weather/01n/01n.png';
import Icon09d from '../assets/weather/09d/09d.png';
import Icon09n from '../assets/weather/09n/09n.png';
import Icon10d from '../assets/weather/10d/10d.png';
import Icon10n from '../assets/weather/10n/10n.png';
import Icon11d from '../assets/weather/11d/11d.png';
import Icon11n from '../assets/weather/11n/11n.png';
import Icon13d from '../assets/weather/13d/13d.png';
import Icon13n from '../assets/weather/13n/13n.png';
import Icon0203d from '../assets/weather/0203d/0203d.png';
import Icon0203n from '../assets/weather/0203n/0203n.png';
import Icon0450 from '../assets/weather/0450/0450.png';

export default function weatherIcons(iconId: string) {
  switch (iconId) {
    case '01d':
      return Icon01d;
    case '01n':
      return Icon01n;
    case '02d':
      return Icon0203d;
    case '02n':
      return Icon0203n;
    case '03d':
      return Icon0203d;
    case '03n':
      return Icon0203n;
    case '04d':
      return Icon0450;
    case '04n':
      return Icon0450;
    case '09d':
      return Icon09d;
    case '09n':
      return Icon09n;
    case '10d':
      return Icon10d;
    case '10n':
      return Icon10n;
    case '11d':
      return Icon11d;
    case '11n':
      return Icon11n;
    case '13d':
      return Icon13d;
    case '13n':
      return Icon13n;
    case '50d':
      return Icon0450;
    case '50n':
      return Icon0450;

    default:
      break;
  }
}