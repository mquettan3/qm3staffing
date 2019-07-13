// Using express to simplify node.js routing and server creation
const express = require('express');

// Adding body-parser to simplify obtaining the body of POST HTTP requests
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

// Used to allow for Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
const cors = require('cors');
const fs = require('fs');

// Import the emailer
var nodemailer = require('nodemailer');

// File uploader
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({storage: storage}).any();

// Constants
var requestStaffEmailTemplate = `
To QM3 Solutions,

IMPORTANT:  This is an automated message sent to you because someone on the website submitted a request for staff!  Details for their request can be seen below:

Request For Staff Form Information:

First Name:  {{FirstName}}
Last Name:  {{LastName}}
Title: {{Title}}
Email Address: {{Email}}
Phone Number: {{PhoneNumber}}
Company Name: {{CompanyName}}
City: {{City}}
State: {{State}}
Zip Code: {{ZipCode}}
Skills of Interest: {{Skills}}
Hire Types of  Interest: {{HireTypes}}

Details:
{{Details}}

-----

Please respond to the requestor as soon as possible!

Sincerely,
The robot who runs the QM3 Solutions website!
`

var positionsInquireEmailTemplate = `
To QM3 Solutions,

IMPORTANT:  This is an automated message sent to you because someone on the website submitted an inquiry about future positions!  Details for their request can be seen below:

Inquire about Future Positions Form Information:

First Name:  {{FirstName}}
Last Name:  {{LastName}}
Email Address: {{Email}}
Phone Number: {{PhoneNumber}}
Fields of Interest: {{Interests}}

Details:
{{Details}}

-----

** Resume Attached

Please respond to the requestor as soon as possible!

Sincerely,
The robot who runs the QM3 Solutions website!
`

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD
    }
});
  
// Define configuration variables
const PORT = process.env.PORT || 4000;
const app = express();

// Apply all middlewares to our server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Begin listening on our chosen PORT for our server.
app.listen(PORT, function() {
    console.log('Server is running on Port: ', PORT);
});

app.post('/fileUpload', function(req, res) {
    upload(req, res, function(err) {
        if(err) {
            return res.status(400).send("Error uploading file.");
        } else {
            return res.status(200).send("File is uploaded.");
        }
    })
});

app.post('/requestStaff', async function (req, res) {
    var requestStaffEmailComplete = requestStaffEmailTemplate;
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{FirstName}}", req.body.firstName);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{LastName}}", req.body.lastName);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Title}}", req.body.title);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Email}}", req.body.email);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{PhoneNumber}}", req.body.phone);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{CompanyName}}", req.body.companyName);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{City}}", req.body.city);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{State}}", req.body.state);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{ZipCode}}", req.body.zip);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Skills}}", req.body.skillTypes.join(",  "));
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{HireTypes}}", req.body.hireTypes.join(",  "));
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Details}}", req.body.details);

    console.log(requestStaffEmailComplete);

    var mailOptions = {
        from: process.env.EMAIL_NAME,
        to: req.body.email,
        bcc: "",
        subject: 'IMPORTANT: Automated Staff Request from ' + req.body.firstName.value + ' ' + req.body.lastName.value,
        text: requestStaffEmailComplete
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error(error);
            return res.status(400).send('Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.');
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // 7. Return a successful response to the client
    return res.sendStatus(200);
});

app.post('/positionsInquire', async function (req, res) {
    var positionsInquireEmailComplete = positionsInquireEmailTemplate;
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{FirstName}}", req.body.firstName);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{LastName}}", req.body.lastName);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Title}}", req.body.title);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Email}}", req.body.email);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{PhoneNumber}}", req.body.phone);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Interests}}", req.body.interests.join(",  "));
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Details}}", req.body.details);

    console.log(positionsInquireEmailComplete);

    var mailOptions = {
        from: process.env.EMAIL_NAME,
        to: req.body.email,
        bcc: "",
        subject: 'IMPORTANT: Automated Future Positions Inquiry from ' + req.body.firstName.value + ' ' + req.body.lastName.value,
        text: positionsInquireEmailComplete,
        attachments: [
            {
                path: "./uploads/" + req.body.resume
            }
        ]
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error(error);

            //Remove the file sent from the server file system
            fs.unlinkSync("./uploads/" + req.body.resume);

            return res.status(400).send('Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.');
        } else {
            console.log('Email sent: ' + info.response);

            //Remove the file sent from the server file system
            fs.unlinkSync("./uploads/" + req.body.resume);
        }
    });

    // 7. Return a successful response to the client
    return res.sendStatus(200);
});

  // Serve static assets if in productions
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
  
    // If we hit any paths that aren't otherwise specified - serve the index.html built by react npm build
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}

