import {ApolloServer} from 'apollo-server-express'

import UserController from '../../controller/user.controller.js'


export const userResolvers = {
    Query: {
        createUser: async (parent, _args, context) => {
          const { currentUser } = context;
    
          if (!currentUser) {
            throw new AuthenticationError(
              'Authentication is required',
            );
          }
    
          const userId = (parent && parent.userId ? parent.userId : currentUser._id).toString();
          const request = {
            userId,
          };
          let response;
    
          try {
            response = await UserController.user.get(request);
            return response
          } catch (e) {
            console.log(e)
            
          }
    
          return response.user;
        },
      },
      Mutation: {
        register: async (_parent, args, context) => {
          const {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
          } = args;
    
          const request = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
          };
          let response;
    
          try {
            response = await UserController.user.register(request);
            return response
          } catch (e) {
            help.catchThrow(e);
          }
    
          return response;
        },
}

}