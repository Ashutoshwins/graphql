import shortid from "shortid"

export default {
    _id: {
      type: String,
      default: shortid.generate,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    }
}