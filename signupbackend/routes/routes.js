const { request, response } = require("express");
const { req, res } = require("express");
const express = require("express");
const router = express.Router();
const signupTemplate = require('../models/signupmodels');
const registrationTemplate = require('../models/registrationmodels');
//RegistrationData

router.post('/signup',(request,response)=>{
    const signedUpUser = new signupTemplate({
        username:request.body.username,
        email:request.body.email,
        mob :request.body.mob,
        pass: request.body.pass,
        cpass : request.body.cpass,
         
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
//Registration Collection

router.post('/registration',(request,response)=>{
    const regDetails = new registrationTemplate({
            fname:request.body.fname,
            lname:request.body.lname,
            uname:request.body.uname,
            ucity:request.body.ucity,
            ustate:request.body.ustate,
            university:request.body.university,
            ucourse:request.body.ucourse,
            ubranch:request.body.ubranch,
            uyear:request.body.uyear,
            uevent:request.body.uevent,
            tname:request.body.tname,
            tsize:request.body.tsize
    })
    regDetails.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
module.exports = router