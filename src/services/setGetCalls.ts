import { WEATHER_API_KEY } from "@env";

export const allGetCalls = {
  lisbonData: `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${WEATHER_API_KEY}`,
  madridData: `https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=${WEATHER_API_KEY}`,
  parisData: `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=${WEATHER_API_KEY}`,
  berlinData: `https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=${WEATHER_API_KEY}`,
  copenhagenData: `https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&appid=${WEATHER_API_KEY}`,
  romeData: `https://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=${WEATHER_API_KEY}`,
  londonData: `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${WEATHER_API_KEY}`,
  dublinData: `https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=${WEATHER_API_KEY}`,
  pragueData: `https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&appid=${WEATHER_API_KEY}`,
  viennaData: `https://api.openweathermap.org/data/2.5/weather?q=Vienna&units=metric&appid=${WEATHER_API_KEY}`,
}
