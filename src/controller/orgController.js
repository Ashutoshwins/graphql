// import orgStore from "../stores/orgStore.js";
import Joi from "joi";
import OrgStore from "../stores/orgStore.js";
const orgStore = new OrgStore();

export default class OrgController {
  async orgCreate(req, res) {
    const schema = Joi.object.keys({
      name: Joi.string().optional(),
      ownerName: Joi.string().optional(),
      email: Joi.email().optional(),
    });
    const params = schema.validate(req, { abortEarly: false });

    const { name, ownerName, email } = params.value;

    const attribute = {
      name,
      ownerName,
      email,
    };

    if (params.error) {
      return res.status(400).send({ msg: params.error.message });
    }
    try {
      let org = await orgStore.orgCreate(attribute);
      console.log("controller org", org);
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
