import UserController from "../../controller/user.controller.js";
const userController = new UserController();

export const userResolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      try {
        response = await userController.user.get(request);
        return response;
      } catch (e) {
        console.log(e);
      }

      return response.user;
    },
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      console.log("resolver is running");
      const { email, firstName, lastName } = args.params;

      const request = {
        firstName,
        lastName,
        email,
      };
      let response;

      try {
        response = await userController.createUser(request);
        console.log("resolvere", response);
      } catch (e) {
        console.log(e);
      }
      return response;
    },
  },
};
