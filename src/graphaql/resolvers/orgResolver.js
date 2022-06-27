import OrgController from "../../controller/orgController.js";

const orgController = new OrgController()

export const orgResolvers={

    Mutation: {
        orgCreate: async (parent, args, context) => {
          console.log('resolver is running');
          const {
            name,
            ownerName,
            email,
          } = args.params;
    
          const request = {
            name,
            ownerName,
            email,
          };
          let response;
    
          try {
            response = await orgController.orgCreate(request);
            console.log("resolvere",response);
          } catch (e) {
            console.log(e);
          }
          return response;
        }
      }
};
    


