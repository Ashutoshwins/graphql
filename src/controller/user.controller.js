import Joi from "joi";
import UserStore from "../stores/user.store.js";
const userStore = new UserStore();
export default class UserController {
  async createUser(req, res) {
    const schema = Joi.object().keys({
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      email: Joi.string().email().optional(),
    });
    const params = schema.validate(req, { abortEarly: false });
    console.log("aa", params);
    const { email, firstName, lastName } = params.value;

    const attribute = {
      email,
      firstName,
      lastName,
    };

    if (params.error) {
      return res.status(400).send({ msg: params.error.message });
    }
    try {
      let user = await userStore.createUser(attribute);
      console.log("controller userrr", user);
      return user;
    } catch (e) {
      console.log(e);
    }
  }


}
