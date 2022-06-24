import shortid from "shortid"

export default {
	_id: {
		type: String,
		default: shortid.generate,
	},
	name: {
		type: String,
		required: true,
	},
	ownerName: {
		type: String,
		required: false,
        default: ""
	},
	createdAt: {
		type: Number,
		required: true,
	},
	

}