import mongoose from "mongoose";
import orgModel from "../models/orgModel.js";

export default class OrganizationStore {
    async createOrganization(attributes) {
        let savedOrg;
        const org = new Organization(attributes);
        try {
            savedOrg = await org.save();
        } catch (e) {
            console.error(e);
            return Promise.reject(new OrganizationStore.OPERATION_UNSUCCESSFUL());
        }
        return savedOrg;
    }

}