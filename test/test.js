'use strict';

let i = require("../api");

console.time("Runtime");

i.getRecord("76980626", (data) => {
    console.log(data);
    console.timeEnd("Runtime");
    process.exit(0);
});