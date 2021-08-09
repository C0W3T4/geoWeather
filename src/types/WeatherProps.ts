export default interface WeatherProps {
  weather?: [
    {
      description?: string;
      icon?: string;
    }
  ]
  main?: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
  }
  clouds?: {
    all?: number;
  }
  sys?: {
    country?: string;
  }
  id?: number;
  name?: string;
}
