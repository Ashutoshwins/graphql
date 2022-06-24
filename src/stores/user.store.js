import mongoose from "mongoose";
import userModel from "../models/user.model.js";
// import UserStore from "../models/user.model.js"


export default class UserStore{
    async createUser(attributes) {
        try {
          if (attributes.password) {
            attributes.passwordHash = await this.hashPassword(attributes.password);
          }
        } catch (e) {
          console.error(e);
          return Promise.reject(new UserStore.OPERATION_UNSUCCESSFUL());
        }
        delete attributes.password;
    
        const params = Joi.object().keys({
          email: Joi.string().email().optional(),
          password: Joi.any().forbidden(),
          passwordHash: Joi.string().optional(),
          firstName: Joi.string().optional(),
          lastName: Joi.string().optional(),
          phoneNumber: Joi.string().required(),
          createdAt: Joi.number().required(),
        }).validate(attributes);
    
        const {
          email,
          passwordHash,
          firstName,
          lastName,
          phoneNumber,
          createdAt,
        } = params.value;
    
        if (params.error) {
          return Promise.reject(params.error);
        }
    
        const newUserFields = {
          email,
          passwordHash,
          firstName,
          lastName,
          phoneNumber,
          createdAt,
        };
    
        let savedUser;
        const user = new User(newUserFields);
    
        try {
          savedUser = await user.save();
        } catch (e) {
          console.error(e);
          return Promise.reject(new UserStore.OPERATION_UNSUCCESSFUL());
        }
    
        return savedUser;
      }


}