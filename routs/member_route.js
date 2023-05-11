const express = require("express");
const memberController = require("../controllers/member_ctrl");
const memberRouter = express.Router();

memberRouter.route("/")
  .get(memberController.getAllMembers)
  .post(memberController.createMember);

memberRouter.route("/noVaccine/")
  .get(memberController.getAllMembersNoVaccine)


  memberRouter.route("/date/")
  .get(memberController.getCountOfPatientsByDate);
memberRouter.route("/:id")
  .get(memberController.getMemberById);



memberRouter.route("/vaccine/:id")
  .get(memberController.getMembersByVaccineNumber);


module.exports = memberRouter;
