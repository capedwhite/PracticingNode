import { DataTypes, STRING } from "sequelize";
import { sequelize } from "../Database/db.js";


 export const Customer = sequelize.define("customer",{
    customerId:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    },
    customerName:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    customerAddress:{
         type: DataTypes.STRING,
        allowNull:false,
    },
    customerNumber:{
  type: DataTypes.STRING,
        allowNull:false,
    },
    customerPassword:{
  type: DataTypes.STRING,
        allowNull:false,
    }

})