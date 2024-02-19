import { run } from "./common.mjs";

export default {
	async fetch() {
		try {
			await run();
			return Response.json("OK");
		} catch (error) {
			return Response.json({code: error.code, name: error.name, message: error.message}, { status: 500 });
		}
	},
};
