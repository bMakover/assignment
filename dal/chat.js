const { Op } = require("sequelize");

exports.getCountOfPatientsByDate = async () => {
  const startDate = moment().subtract(1, "month").startOf("day");
  const endDate = moment().endOf("day");

  const data = await MemberDB.findAll({
    attributes: [
      [sequelize.fn('date_trunc', 'day', sequelize.col('infection_date')), 'infection_date'],
      [sequelize.fn('count', sequelize.col('id')), 'count'],
    ],
    where: {
      infection_date: {
        [Op.between]: [startDate.toDate(), endDate.toDate()],
      },
      recovery_time: {
        [Op.gt]: endDate.toDate(),
      },
    },
    group: [sequelize.fn('date_trunc', 'day', sequelize.col('infection_date'))],
    raw: true,
  });

  const result = {};

  data.forEach(({infection_date, count}) => {
    result[moment(infection_date).format('YYYY-MM-DD')] = count.toString();
  });

  const lastMonth = {};

  for (let m = moment().subtract(1, 'month'); m.diff(moment(), 'days') <= 0; m.add(1, 'days')) {
    const dateStr = m.format('YYYY-MM-DD');
    lastMonth[dateStr] = result[dateStr] || '0';
  }

  return lastMonth;
};
