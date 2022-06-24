import orgModel from "../models/orgModel";
import OrganizationStore from "../stores/orgStore";

export default class OrganizationController {
  async createOrganization(request) {
    const params = Joi.object()
      .keys({
        userId: Joi.string().required(),
        name: Joi.string().required(),
        address: Joi.object().keys({
          address1: Joi.string().allow("").optional(),
          address2: Joi.string().allow("").optional(),
          city: Joi.string().allow("").optional(),
          state: Joi.string().allow("").optional(),
          zip: Joi.string().allow("").optional(),
          country: Joi.string().allow("").optional(),
        }),
      })
      .validate(request);

    const { name, address, ownerName } = params.value;

    if (params.error) {
      return res.status(400).send({ msg: params.error.message });
    }
    const attributes = {
      name,
      address,
      createdAt: Time.now(),
      ownerName,
    };
    let organization;
    try {
      organization = await orgModel.createOrganization(attributes);
    } catch (e) {
      console.log(e);
      organization.save();
    }
  }
}
