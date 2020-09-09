const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.post('/sendFormData', (req, res) => {
  console.log(req.body, 'data of form');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '587',
    auth: {
      user: 'mkokitto@gmail.com', // must be Gmail
      pass: 'yjvqiflizxncehot'
    }
  });

  var mailOptions = {
    from: req.body.email,
    to: 'mkokitto@gmail.com', // must be Gmail
    cc:`${req.body.name} <${req.body.email}>`,
    subject: 'New mail from your site.',
    html: `
            <h1 >${req.body.name}</h1>
            <h2 >${req.body.email}</h2>
            <p>${req.body.message}</p>
          `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!'
      })
    }
  });

});


app.post('/quotationRequest', (req, res) => {
  console.log(req.body, 'data of form');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '587',
    auth: {
      user: 'mkokitto@gmail.com', // must be Gmail
      pass: 'yjvqiflizxncehot'
    }
  });

  var mailOptions = {
    from: req.body.email,
    to: 'mkokitto@gmail.com', // must be Gmail
    cc:`${req.body.name} <${req.body.email}>`,
    subject: 'Demande de devis.',
    html: `
    <div style="
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #00000020;
    border-radius: 0.25rem;
    width: 60%
  ">
    <div style="  -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;">
        <div style="margin-bottom: 0.75rem;">DEMANDE DEVIS</div>
        <hr class="cell-divide-hr">
        <h4>Nom et prenom</h4>
        <p>${req.body.name}</p>
        <h4>Email</h4>
        <p>${req.body.email}</p>
        <h4>Phone</h4>
        <p>${req.body.phone}</p>
        <h4>Address</h4>
        <p>${req.body.address}</p>
        <h4>Message</h4>
        <p>${req.body.message}</p>
    </div>
</div>
          `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Request sent: ' + info.response);
      res.status(200).json({
        message: 'Votre demande est envoyé avec succée'
      })
    }
  });

});
app.listen(3000, () => {
  console.log("server run!!!");
});
