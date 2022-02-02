import jwt from 'jsonwebtoken';
import data from '../config/jwt.js';
import { loadUserinfo } from '../models/users.model.js';

let jwtSecret = data.secret;

const check = (req, res, next) => {
  try {  
    let token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({status:0,msg:"토큰 실종"})
    }
  

    let decoded = jwt.verify(token, jwtSecret);
    let user_id = decoded.user_id;
    next()
  } catch (error) {
    res.status(401).json({status:0,msg:"증명 에러"})
  }
}

const checkWithCookie = async (req, res, next) => {
  try {  
    let token = req.cookies.user
    if (!token) {
      return res.status(401).redirect("/")
    }
  

    let decoded = jwt.verify(token, jwtSecret);
    let user_id = decoded.user_id;
    let user_data = await loadUserinfo(user_id);
    if (user_data.user_auth > 1) {
      next()
    } else {
      res.status(401).redirect("/")
    }
  } catch (error) {
    res.status(401).redirect("/")
  }
}

const checkAdmin = async (req, res, next) => {
  try {  
    let token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({status:0,msg:"토큰 실종"})
    }
  

    let decoded = jwt.verify(token, jwtSecret);
    let user_id = decoded.user_id;

    let user_data = await loadUserinfo(user_id);
    if (user_data.user_auth > 1) {
      next()
    } else {
      res.status(401).json({status:0,msg:"권한 없음"})

    }
  } catch (error) {
    res.status(401).json({status:0,msg:"증명 에러"})
  }
}


export { check, checkWithCookie, checkAdmin };
