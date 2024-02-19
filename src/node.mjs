// @ts-check
import { run } from "./common.mjs";

try {
	await run();
	console.log("OK");
} catch (error) {
	console.error(error);
}
