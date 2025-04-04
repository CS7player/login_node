const pbkdf = require("@cs7player/scrap-node-lib").pbkdf;
const time = require("./../../utils/helper");
const queryData = require("./../../utils/query");
const nodemailer = require('nodemailer');
const { google } = require("googleapis");

exports.sign_up = async (reqParams) => {
 try {
  let username = reqParams['username'];
  let password = reqParams['password'];
  let mail = reqParams['mail'];
  let hashPassword = await pbkdf.hashPassword(password);
  let created_at = time.getCurrentTimestamp();
  const query = 'INSERT INTO login (username, password, mail,created_at) VALUES (?, ?, ?,?)';
  const data = [username,hashPassword,mail,created_at];
  const result = queryData.dbDater(query,data);
  return result
 } catch (error) {
  console.log(error);
  throw error;
 }
};

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token:REFRESH_TOKEN});

async function sendMail(reqParams){
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                type : 'OAuth2',
                user : 's.chandrasekhar.h@gmail.com',
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken : REFRESH_TOKEN,
                accessToken : accessToken
            }
        })

        const userMail = reqParams['mail'] || '';
        const subject = reqParams['subject'] || '';
        const text = reqParams['text'] || '';
        const html = reqParams['html'] || '';

        const mailOptions = {
            from : 'chandra <s.chandrasekhar.h@gmail.com>',
            to: userMail,
            subject:subject,
            text:text,
            html:html
        }

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

exports.mail_verfication = async (reqParams) => {
 try{
  let otp = generateOTP();
  const html = `<h4> your login verfication code is ${otp} </h4>`;
  reqParams['html'] = html;
  let result = await sendMail(reqParams);
  if(result['accepted'][0]==reqParams['mail']){
   return {msg : "check your mail"};
  } else{
   return {msg : "something went wrong"};
  }
 } catch(error){
  console.log(error);
  throw error
 }
}

function generateOTP() {
 return Math.floor(100000 + Math.random() * 900000).toString();
}
