import orgModel from "../models/orgModel.js";

export default class OrgStore {
  async orgCreate(Org) {
    let org;
    try {
      org = await orgModel(Org).save();
    } catch (e) {
      console.log(e);
    }
    return org;
  }
}
