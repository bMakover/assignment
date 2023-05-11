const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Member=sequelize.define('member',{
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            len:9
            
        },
       
        first_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        city:{
            type:DataTypes.STRING,
            allowNull: false
        },
        street:{
            type:DataTypes.STRING,
            allowNull: false
        },
        building_number:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Date_of_birth:{
            type:DataTypes.DATE,
            allowNull: false,
            isDate:true

        },
        phone:{
            type:DataTypes.STRING,
            allowNull: true,
            isAlphanumeric:true,
            len:9
        },
        mobile:{
            type:DataTypes.STRING,
            allowNull: false,
            isAlphanumeric:true,
            len:10

        },
    
        infection_date:{
            type:DataTypes.DATE,
            allowNull: true,
            isDate:true
        },
        recovery_date:{
            type:DataTypes.DATE,
            allowNull: true,
            isDate:true
        },
    },
    {

        
        timestamps:false
    }

    );
    return Member;

}

