export type Weather = {
  id: number;
  name: string;
  wind: {
    gust: number;
    speed: number;
  };
  main: {
    humidity: number;
    pressure: number;
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    type: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
};
