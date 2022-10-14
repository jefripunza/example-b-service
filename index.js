const express = require("express");
const app = express();
app.all("*", (_, res) => res.json({ ok: true, port: 8081 }));
app.listen(8081, () => console.log("listen 8081"));
