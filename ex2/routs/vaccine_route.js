const express = require("express");
const vaccineController = require("../controllers/vaccine_ctrl");
const vaccineRouter = express.Router();

vaccineRouter.route("/")
    .get(vaccineController.getAllVaccines)
    .post(vaccineController.createVaccine)
   
vaccineRouter.route("/:id")
    .get(vaccineController.getVaccinesByMemberId)


module.exports = vaccineRouter;