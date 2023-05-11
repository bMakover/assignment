require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 2000; 
app.use(express.json());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const memberRouter = require("./routs/member_route");
const vaccinRouter = require("./routs/vaccine_route");

app.use("/member", memberRouter);
app.use("/vaccine", vaccinRouter);
