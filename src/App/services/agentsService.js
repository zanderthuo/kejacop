import https from '../http-common'

class AgentsDataService {
  get(id) {
    return https.get(`//login`);
  }

  createAgent(data) {
    return https.post("/agents/registration", data);
  }
}

export default AgentsDataService();
