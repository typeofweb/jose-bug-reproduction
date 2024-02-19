import { createLocalJWKSet, flattenedVerify } from "jose";

const signature =
	"eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vbWljaGFsLXN0b3JlLTk3MDIuZXUuc2FsZW9yLmNsb3VkL2dyYXBocWwvIiwia2lkIjoiMm96ZFh6aG5pb1ViUTRxOU9DT3QtTHZmTnFrU2J5QTFuRC10Q1VtY1p2SSIsInR5cCI6IkpXVCJ9..VEhCigg31dl-IQ_xb8-trpPQcXxKpirz5hAo58_0F2IDISnBTMbwB0xV7lLVKwxEry0_sdnjpsLOKU0ri1Ak5LwDrWbh41IBBOyvO-TBmPjKFIdPI3yMeyxe2zM9RL_MMUhz32b4KbZf_ahDWBw4hkBk3xHtmuLFDPOYrL4YuL_OPyCjE2lnr1e4zoZALOv2yxVSDP-WvqVY4rXop1l0ydz1WM9V5JOPczG0FXulgR6FLCoi9ZNS79jXeG_CZn1QqakeT8ks_04-8A_Zz1SaIOyqGbrnQG3GQWvYMGMxZQDcCCQ8Rj_Db-MP7gpyq1KRJV4sq9nHz7_q1GfFxRD4zA";
const text = '{"__typename": "ProductUpdated", "product": {"id": "UHJvZHVjdDoxNTI="}}';

const jwks = {
	keys: [
		{
			kty: "RSA",
			key_ops: ["verify"],
			n: "mv4XerD8Kg1-LHgJmQGsrGkmmA4uWFdVRNSpmiXy2blGWZe5PYQWJU45XQTLgtSZs5vJAg4INWPKXc0Lcl7gXB9EmezZbOYjFKsjZwz1ddlVodr9fUPH8uNNG65nMVhLGvM0PhetAzPFM41R-QYUnnXRUfouThPUYciz7NR0n85_dDwA8J3x7hJgZvp9SGgI2hYXy71hlitXy2hq9EfxmSIR0BPNRt6jQzZA_FKV7Mvrwf7E_21gJ3mvUPDbkaJHikbPa4E_rgUiilK0k70G0XI-9Ir3L1kpOzF_utCRpHlU_K1L1dqOryulertOHLAo432gwjFwSyph5dcMLtUhvw",
			e: "AQAB",
			use: "sig",
			kid: "2ozdXzhnioUbQ4q9OCOt-LvfNqkSbyA1nD-tCUmcZvI",
		},
	],
};

export const run = async () => {
	const [header, , jwsSignature] = signature.split(".");
	const jws = {
		protected: header,
		payload: text,
		signature: jwsSignature,
	};
	const localJwks = createLocalJWKSet(jwks);
	await flattenedVerify(jws, localJwks);
};
