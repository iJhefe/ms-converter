import { ms, fromMs } from "../src/main";

console.log(ms(10, "days"));
console.log(fromMs(180000, "minutes"));
console.log(fromMs(ms(1, "year"), "year"));
