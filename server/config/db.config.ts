import { connect } from "mongoose";
import Colors = require("colors.ts");
Colors.enable();

const DB_URL_STRING = process.env.DB_URL_STRING;

const DBConnector = async (): Promise<void> => {
  connect(DB_URL_STRING)
    .then(() => {
      console.log("Database Connected Successfully.".green);
    })
    .catch((err) => {
      console.log("Database Connection Failed.".red, err);
    });
};

export default DBConnector;
