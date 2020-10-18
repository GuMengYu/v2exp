import { hfXhr } from '@/util/xhr';
const hfKey = '95d5078dd7f0478fb42a0365644a4251';

export default {
  forecast: params => hfXhr.get(`weather/${params.day}d?key=${hfKey}&location=${params.locationId}`),
  now: id => hfXhr.get(`weather/now?key=${hfKey}&location=${id}`),
  city: (lon, lat) => hfXhr.get(`https://geoapi.heweather.net/v2/city/lookup?key=95d5078dd7f0478fb42a0365644a4251&location=${lon},${lat}`).then(({location}) => location?.[0]),
};
