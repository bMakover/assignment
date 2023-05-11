const db = require("../models/index");
const MemberDB = db.member;
const VaccineDB = db.vaccine;
const moment = require('moment');
const { Op } = require("sequelize");

exports.createMember = async (member) => {
  return await MemberDB.create(member);
};

exports.getAllMembers = async () => {
  const data = await MemberDB.findAll();

  return data;
};
exports.getMemberById = async (id) => {
  const data = await MemberDB.findByPk(id);

  return data;
};

exports.getMembersByVaccineNumber = async (number) => {
  const data = await VaccineDB.findAll({ where: { type: number } });
  const arr = [];
  for (const vaccine of data) {
    let members = await MemberDB.findOne({ where: { id: vaccine.member_id } });
    arr.push(members);
  }

  return arr;
};
exports.getAllMembersNoVaccine = async () => {
  const data = await VaccineDB.count({
    distinct: true,
    col: "member_id",
  });

  const d = await MemberDB.count({
    col: "id",
  });
  const s = d - data;
  return s.toString();
};



exports.getCountOfPatientsByDate = async () => {
  const startDate = moment().subtract(1, "month").startOf("month");
  const endDate = moment().subtract(1, "month").endOf("month");

  const data = await MemberDB.findAll({
    where: {
      infection_date: { [Op.lte]: endDate.toDate() },
      recovery_date: { [Op.gt]: startDate.toDate() }
    }
  });

  const result = {};

  for (let m = moment(startDate); m.diff(endDate, "days") <= 0; m.add(1, "day")) {
    const dateStr = m.format("YYYY-MM-DD");
    const count = data.filter(d => moment(d.infection_date).isSameOrBefore(m) && moment(d.recovery_date).isAfter(m)).length;
    result[dateStr] = count.toString();
  }

  return result;
};


