/*
1-> MODULOS NATIVOS DE NODE JS
*/
import { platform, release, arch, cpus, freemem, totalmem } from "node:os";
const { createHash } = await import("node:crypto");

const hash = createHash("sha256");
console.log("Sistema operativo: ", platform());
console.log("release: ", release());
console.log("arch: ", arch());
console.log("cpus: ", cpus());
console.log("freemem: ", freemem());
console.log("totalmem: ", totalmem());
console.log("hash: ", hash.digest("123456"));
