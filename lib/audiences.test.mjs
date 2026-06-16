import assert from "node:assert";
import { AUDIENCES, resolveAudience } from "./audiences.ts";

assert.strictEqual(AUDIENCES.length, 3);
assert.strictEqual(resolveAudience("/para-empresas")?.key, "empresa");
assert.strictEqual(resolveAudience("/passeador/x")?.key, "passeador");
assert.strictEqual(resolveAudience("/"), null);
assert.strictEqual(resolveAudience("/contato"), null);

console.log("ok");
