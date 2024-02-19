# JOSE Node.js / Browser discrepancy reproduction

Steps to reproduce:

1. `pnpm install`
2. Run `node src/node.mjs` – expected result is `OK`
3. Run `pnpm dev` – wait for Cloudflare Worker to start
4. In another terminal, run `curl http://localhost:3000` – you'll see `ERR_JWS_INVALID`
