const { DataTypes } = require("sequelize");
const { sequelize,member } = require(".");
//const member = require("./member");

module.exports=(sequelize,DataTypes)=>{
    
    const Vaccine=sequelize.define('vaccine',{
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        member_id:{
            type:DataTypes.INTEGER,
            references:member,
            referenceskey:'id',
            unique: 'actions_unique'
        },
        type:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: 'actions_unique',
            validate: {
            isIn: [['first','second','third','fourth' ]]
            }
        },
        manufacturer:{
            type:DataTypes.STRING,
            allowNull: false,
            
        },
        date:{
            type:DataTypes.DATE,
            allowNull: false,
            isDate:true
        },
        
    },
    {

        //freezeTableNmae:true
        timestamps:false,
        
    },
  
    );
  
    return Vaccine;

}

