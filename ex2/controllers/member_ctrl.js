const MemberDB = require("../dal/member_dal");
//const Op = db.Sequelize.Op;

class MemberController {
  createMember = (req, res) => {
    // if (!req.body.id) {
    //     res.status(400).send({
    //       message: "id can not be empty!"
    //     });
    //     return;
    //}

    const member = req.body;

    MemberDB.createMember(member)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding the member.",
        });
      });
  };

  getAllMembers = (req, res) => {
    MemberDB.getAllMembers()
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find all members .`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving members",
        });
      });
  };
  getMemberById = (req, res) => {
    const id =req.params.id
    MemberDB.getMemberById(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find all members .`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving members",
        });
      });
  };
  getMembersByVaccineNumber = (req, res) => {
    const number = req.params.id;
    MemberDB.getMembersByVaccineNumber(number)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find members .`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving members",
        });
      });
  };
  getAllMembersNoVaccine = (req, res) => {
      
    
    MemberDB.getAllMembersNoVaccine()
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find all vaccines .`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving vaccines" 
          });
        });
    };
  getCountOfPatientsByDate = (req, res) => {
    //const date = req.params.id;//date
    MemberDB.getCountOfPatientsByDate()
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find all members .`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving members",
        });
      });
  };
}

const memberController = new MemberController();

module.exports = memberController;
