"use strict";

const apps = require("../app");
const PORT = 3001;

apps.listen(PORT, () => {
    console.log("서버 가동");
});