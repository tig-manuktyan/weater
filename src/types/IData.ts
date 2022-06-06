export interface IList {
  clonds: {
    all: number;
  };
  dt: string;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {pod: string};
  visibility: number;
  weather: [{
    description: string;
    icon: string;
    id: number;
    main: string;
  }];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export interface IData {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: number | string;
  list: IList[];
  message: number;
}
