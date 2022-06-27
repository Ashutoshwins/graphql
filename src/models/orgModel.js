
import mongoose from "mongoose";

export const schema = mongoose.Schema;

const orgSchema = new schema({
  name: {
    type: String,
    required: false,
  },
  ownerName: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: false,
  },
});
const orgModel = mongoose.model("org", orgSchema);
export default orgModel;
