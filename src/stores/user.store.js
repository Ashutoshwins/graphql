// import { Mongoose } from "mongoose";
import userModel from "../models/user.model.js";

export default class UserStore {
  async createUser(User) {
    let user;
    try {
      user = await userModel(User).save();
      console.log("store", user);
    } catch (e) {
      console.log(e);
    }
    return user;
  }

  
}
