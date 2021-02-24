import https from '../http-common'

class TenantDataService {
  get(id) {
    return https.get(`/tenant/login`);
  }

  create(data) {
    return https.post("/tenant/registration", data);
  }
}

export default new TenantDataService();
