import {gql} from "apollo-server";

const typeDefs=gql`
	type User{
		_id: String!
		email: String
		firstName: String
		lastName: String
	}

	type UserInput{
		_id: String!
		email: String
		firstName: String
		lastName: String
		password:String
		

	}

	type Organization {
		_id: String!
		name: String!
		ownerName: String
		createdAt: Int!
		address: String
	}
	type OrganizationInput{
		_id: String!
		name: String!
		ownerName: String
		createdAt: Int!
		address: String

	}
	

	type Query{
		#User
		getUser(id:String): User
		getCurrentOrganization: Organization

	}
	type Mutation {
		# USER
		register(
			email: String!
			firstName: String!
			lastName: String!
			password: String!

		): User
	}




`;


export default typeDefs
