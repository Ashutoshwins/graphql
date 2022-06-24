import UserStore from "../stores/user.store";

export default class UserController {
  async register(request) {
    const params = Joi.object()
      .keys({
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        email: Joi.string().email().optional(),
        phoneNumber: Joi.string().required(),
        password: Joi.string().optional(),
      })
      .validate(request);

    const { email, password, firstName, lastName, phoneNumber } = params.value;

    const user = schema.validate(req.body, { abortEarly: false });
    if (params.error) {
      return res.status(400).send({ msg: params.error.message });
    }

    let emailExist = await model.find({ email: params.value.email });
    if (emailExist?.length != 0) {
      return res.status(404).send({ msg: "email already exist" });
    }
    user.save();
    if (!user) {
      return res.status(400).send({ msg: "not found" });
    } else {
      return res.status(200).send({ msg: "student created", id: user._id });
    }
  }
}
