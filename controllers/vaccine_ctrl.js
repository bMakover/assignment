const VaccineDB = require("../dal/vaccine_dal")
//const Op = db.Sequelize.Op;

class VaccineController {
  
   createVaccine = (req, res) => {
    
    // // if (!req.body.id) {
    // //     res.status(400).send({
    // //       message: "id can not be empty!"
    // //     });
    // //     return;
    //   }


      
 
      const vaccine = req.body;

      VaccineDB.createVaccine(vaccine)
       .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the vaccine."
        });
      });
       
    }

    getAllVaccines = (req, res) => {
      
      
        VaccineDB.getAllVaccines()
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




      getVaccinesByMemberId = (req, res) => {
      
      const id = req.params.id;
      VaccineDB.getVaccinesByMemberId(id)
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
     
}

const vaccineController = new VaccineController();

module.exports = vaccineController;