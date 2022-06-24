import OrganizationController from "../../controller/orgController";
import {ApolloServer} from 'apollo-server-express'


export const organizationResolvers = {
    Query: {
        getCurrentOrganization: async (parent, args, context) => {
            const {
                currentUser
            } = context;

            
            const organizationId = (parent && parent.organizationId ? parent.organizationId : currentUser.organizationId).toString();
            if (!currentUser || !organizationId) {
                throw new AuthenticationError(
                    'Authentication is required',
                );
            }

            const request = {
                organizationId,
            };
            let response;

            try {
                response = await controller.organization.getOrganization(request);
                if (response.status !== StatusCodes.OK) {
                    throw new ApolloError(
                        response.error.message,
                        response.status.toString(),
                    );
                }
            } catch (e) {
                console.error(e);
                throw e;
            }
            return response.organization;
        },

    }    
}