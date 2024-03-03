const { request, response } = require("express");
const { req, res } = require("express");
const express = require("express");
const router = express.Router();
const signupTemplate = require("../models/signupmodels");
const registrationTemplate = require("../models/registrationmodels");
const eventTemplate = require("../models/events");
const multer = require("multer");
//const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log(path.dirname);
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//RegistrationData

router.post("/signup", (request, response) => {
  const signedUpUser = new signupTemplate({
    username: request.body.username,
    email: request.body.email,
    mob: request.body.mob,
    pass: request.body.pass,
    cpass: request.body.cpass,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});
//Registration Collection

router.post("/registration", (request, response) => {
  const regDetails = new registrationTemplate({
    fname: request.body.fname,
    lname: request.body.lname,
    uname: request.body.uname,
    ucity: request.body.ucity,
    ustate: request.body.ustate,
    university: request.body.university,
    ucourse: request.body.ucourse,
    ubranch: request.body.ubranch,
    uyear: request.body.uyear,
    uevent: request.body.uevent,
    tname: request.body.tname,
    tsize: request.body.tsize,
  });
  regDetails
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/get-image", async (req, res) => {
  try {
    eventTemplate.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get("/registrationData", async (req, res) => {
  try {
    registrationTemplate.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

router.post("/upload-event-data", upload.single("image"), async (req, res) => {
  //console.log("displaying form data");
  //console.log(req.body);
  const imageName = req.file.filename;
  if (!req.file) {
    res.status(413).send("File not uploaded!!!");
    return;
  }
  try {
    const eventDetails = new eventTemplate({
      image: imageName,
      name: req.body.ename,
      description: req.body.edesc,
      team_size: req.body.eteamSize,
      fee: req.body.eParticipationFee,
    });
    await eventDetails
      .save()
      .then((data) => {
        //window.alert("event details added...");
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
    //res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: error });
  }
});

module.exports = router;
