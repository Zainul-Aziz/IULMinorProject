const express = require("express");
const router = express.Router();
const signupTemplate = require("../models/signupmodels");
const registrationTemplate = require("../models/registrationmodels");
const eventTemplate = require("../models/events");
const adminTemplate = require("../models/admin");
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
  console.log(request.body);
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.post("/ADMlogin", (request, response) => {
  //console.log(request.body);
  adminTemplate
    .findOne({ email: request.body.email })
    .then((data) => {
      //console.log(data);
      if (data != null && data.pass === request.body.pass) {
        //imp concept of AND operator
        response.json({ status: "Ok" });
      } else {
        response.json({ status: "No" });
      }
    })
    .catch((err) => {
      console.log(err);
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

router.get("/loginadmin", async (req, res) => {
  try {
    adminTemplate.find({}).then((data) => {
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
    //console.log(req.body);
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

router.post("/adminlogin", (request, response) => {
  const adminLogin = new adminTemplate({
    email: request.body.email,
    pass: request.body.pass,
  });
  adminLogin
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// router.post("/checkAddEvent", async (req, res) => {
//   console.log(req.body);
// });

// router.post("/checkAdmin", (req, res) => {
//   console.log(req.body);
//   adminTemplate
//     .findOne({ email: req.body.email })
//     .then((data) => {
//       //console.log(data);
//       // console.log(data.pass);
//       //console.log(req.body.pass);
//       if (data != null && data.pass === req.body.pass) {
//         //imp concept of AND operator
//         res.json({ status: "Ok" });
//       } else {
//         res.json({ status: "No" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log(req.body.email);
//   //res.send(req);
// });
module.exports = router;
