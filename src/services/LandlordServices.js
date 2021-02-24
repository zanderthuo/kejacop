import https from '../http-common'

class LandlordDataService {
  get(id) {
    return https.get(`/landlord/${id}`);
  }

  create(data) {
    return https.post("/landlord/registration", data);
  }
}

export default new LandlordDataService();
