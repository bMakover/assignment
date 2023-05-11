const db = require("../models/index");
const VaccineDB = db.vaccine;
const MemberDB = db.member;

exports.createVaccine = async (vaccine) => {
  return await VaccineDB.create(vaccine);
};

exports.getAllVaccines = async () => {
 
  const data = await VaccineDB.findAll();

  return data;
};

exports.getVaccinesByMemberId = async (id) => {
  console.log(id, "member");
  const data = await VaccineDB.findAll({ where: { member_id: id } });

  return data;
};


