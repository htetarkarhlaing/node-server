import { Response } from "express";
import moment from "moment";
import Colors = require("colors.ts");
Colors.enable();

interface IResponser {
  res: Response;
  status: number;
  body: any;
  message: string;
  devMessage: any;
}

const current = moment().format("YYYY/MMMM/DD hh:mm:ss A");

const responser = ({ res, status, body, message, devMessage }): IResponser => {
  var success: boolean, log: string, dataBody: any;

  if (status >= 200 && status <= 300) {
    success = true;
    log = "[ SUCCESS ]".bg_green.white;
    log += ` - ${devMessage}\n${message}\nTime: ${current}`.green;
    if (body && body !== null) {
      dataBody = body;
    } else {
      dataBody = null;
    }
  } else if (status >= 400 && status < 500) {
    success = false;
    log = "[ CLIENT ERROR ]".bg_yellow.white;
    log += ` - ${devMessage}\n${message}\nTime: ${current}`.yellow;
    dataBody = null;
  } else {
    success = false;
    log = "[ SERVER ERROR ]".bg_red.white;
    log += ` - ${devMessage}\n${message}\nTime: ${current}`.red;
    dataBody = null;
  }

  var dataModel = {
    meta: {
      success: success,
      message: message,
      devMessage: devMessage,
    },
    body: dataBody,
  };

  console.log(`${log}`);
  return res.status(status).json(dataModel);
};

export default responser;
