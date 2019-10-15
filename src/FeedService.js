import api from './EarthquakeApi';

class FeedService {
  static async retrieveDaily() {
    const response = await api.get('earthquakes/feed/v1.0/summary/all_day.geojson');
    return response.data;
  }
}

export default FeedService;
