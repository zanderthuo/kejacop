import https from '../http-common'

class LandlordDataService {
  create(data) {
    return https.post("/landlords/registration", data);
  }
}

export default new LandlordDataService();
