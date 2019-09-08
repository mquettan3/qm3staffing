// Using express to simplify node.js routing and server creation
const express = require('express');

// Compression for express ervers
const compression = require('compression');

// Adding body-parser to simplify obtaining the body of POST HTTP requests
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

// Used to allow for Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
const cors = require('cors');
const fs = require('fs');

// Import the emailer
const nodemailer = require('nodemailer');

// Unique ID Generator
const uniqid = require('uniqid');

// Mailchimp API Wrapper: https://github.com/thorning/node-mailchimp
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
// Cyrpto needed for Mailchimp.  All emails are to be sent as MD5 hashes instead of plain text.
const crypto = require('crypto');
const list_id = "b7fb7971b3";

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

const upload = multer({storage: storage, limits: {fileSize: 25 * 1024 * 1024, fieldSize: 25 * 1024 * 1024}}).any();

// Constants
const requestStaffEmailTemplate = `
To QM3 Solutions,
IMPORTANT:  This is an automated message sent to you because someone on the website submitted a request for staff!  Details for their request can be seen below:

Request ID: {{RequestID}}

Request For Staff Form Information:
First Name:  {{FirstName}}
Last Name:  {{LastName}}
Title: {{Title}}
Email Address: {{Email}}
Phone Number: {{PhoneNumber}}
Preferred Contact Method: {{ContactMethod}}
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

const positionsInquireEmailTemplate = `
To QM3 Solutions,
IMPORTANT:  This is an automated message sent to you because someone on the website submitted an inquiry about future positions!  Details for their request can be seen below:

Request ID: {{RequestID}}

Inquiry about Future Positions Form Information:
First Name:  {{FirstName}}
Last Name:  {{LastName}}
Email Address: {{Email}}
Phone Number: {{PhoneNumber}}
Preferred Contact Method: {{ContactMethod}}
Fields of Interest: {{Interests}}
Did this person Opt to subscribe to our mailing list?: {{Subscribed}}

Details:
{{Details}}


-----

** Resume Attached

Please respond to the requestor as soon as possible!

Sincerely,
The robot who runs the QM3 Solutions website!
`

const genericConfirmationEmailTemplate = "\
<h1>{{FirstName}}, thank you for submitting your {{RequestType}}!</h1>\
<p>A QM3 Solutions representative will be reaching out to you shortly to help you bridge the gap between talent and opportunity!<br>\
<br>\
If you are experiencing any issues, or need to provide additional updates; please feel free to respond to this email to continue the conversation!</p><br>\
For reference only, your request ID is: {{RequestID}}\
"

async function wrappedSendMail(mailOptions, emailType) {
    return new Promise((resolve, reject)=> {
        let transporter = nodemailer.createTransport({
            serivce: 'Outlook365',
            host: 'smtp.office365.com',
            auth: {
                user: process.env.EMAIL_NAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.error(error);
                reject(Error("Failed to send " + emailType + " email to " + mailOptions.to));
            } else {
                resolve("Successfully sent " + emailType + " email to " + mailOptions.to);
            }
        });
    })
}
  
// Define configuration variables
const PORT = process.env.PORT || 4000;
const app = express();

// Apply all middlewares to our server
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Begin listening on our chosen PORT for our server.
app.listen(PORT, function() {
    console.log('Server is running on Port: ', PORT);
});

app.post('/fileUpload', function(req, res) {
    upload(req, res, function(err) {
        if(err) {
            console.error(err);
            return res.status(400).send("Error uploading file.");
        } else {
            console.log("File Uploaded!");
            return res.status(200).send("File is uploaded.");
        }
    })
});

app.post('/requestStaff', async function (req, res) {
    let returnStatus = 200;
    let returnMessage = 'OK';
    const uniqueID = uniqid();
    var requestStaffEmailComplete = requestStaffEmailTemplate;
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{FirstName}}", req.body.firstName);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{LastName}}", req.body.lastName);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Title}}", req.body.title);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Email}}", req.body.email);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{PhoneNumber}}", req.body.phone);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{ContactMethod}}", req.body.contactMethod);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{CompanyName}}", req.body.companyName);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{City}}", req.body.city);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{State}}", req.body.state);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{ZipCode}}", req.body.zip);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Skills}}", req.body.skillTypes.join(",  "));
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{HireTypes}}", req.body.hireTypes.join(",  "));
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Details}}", req.body.details);
    requestStaffEmailComplete = requestStaffEmailComplete.replace("{{RequestID}}", uniqueID);
    console.log(requestStaffEmailComplete);

    var confirmationEmailComplete = genericConfirmationEmailTemplate;
    confirmationEmailComplete = confirmationEmailComplete.replace("{{FirstName}}", req.body.firstName);
    confirmationEmailComplete = confirmationEmailComplete.replace("{{RequestType}}", "request for staff");
    confirmationEmailComplete = confirmationEmailComplete.replace("{{RequestID}}", uniqueID);
    console.log(confirmationEmailComplete);

    var mailOptions = {
        from: process.env.EMAIL_NAME,
        to: process.env.EMAIL_NAME,
        bcc: "",
        subject: 'IMPORTANT: Automated Staff Request from ' + req.body.firstName + ' ' + req.body.lastName,
        text: requestStaffEmailComplete
    };

    await wrappedSendMail(mailOptions, "Staff Request")
    .then(function(info) {
        console.log(info);
    })
    .catch(function(err){
        console.error(err);
        returnStatus = 400;
        returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
    });
    
    let date = new Date();
    let htmlString = fs.readFileSync("confirmationTemplate.html", 'utf8');
    htmlString = htmlString.replace("{{CURRENT_YEAR}}", date.getFullYear());
    htmlString = htmlString.replace("{{EMAIL_TEXT}}", confirmationEmailComplete);

    mailOptions = {
        from: process.env.EMAIL_NAME,
        to: req.body.email,
        subject: 'QM3 Solutions: Confirmation Email',
        html: htmlString
    };

    await wrappedSendMail(mailOptions, "Staff Request Confirmation")
    .then(function(info){
        console.log(info);
    })
    .catch(function(err) {
        console.error(err);
        returnStatus = 400;
        returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
    });

    // 7. Return a successful response to the client
    return res.status(returnStatus).send(returnMessage);
});

app.post('/positionsInquire', async function (req, res) {
    // Intialize the return message
    let returnStatus = 200;
    let returnMessage = 'OK';

    // Generate a unique ID so that the user can reference their request.
    const uniqueID = uniqid();

    // Populate the template email which gets sent to QM3 Solutions with the user data
    var positionsInquireEmailComplete = positionsInquireEmailTemplate;
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{FirstName}}", req.body.firstName);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{LastName}}", req.body.lastName);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Email}}", req.body.email);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{PhoneNumber}}", req.body.phone);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{ContactMethod}}", req.body.contactMethod);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Interests}}", req.body.interests.join(",  "));
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Details}}", req.body.details);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{RequestID}}", uniqueID);
    positionsInquireEmailComplete = positionsInquireEmailComplete.replace("{{Subscribed}}", req.body.isSubscription ? "Yes" : "No");
    
    console.log(positionsInquireEmailComplete);

    // Ppopualte the confirmation email which gets sent to the user with the user data
    var confirmationEmailComplete = genericConfirmationEmailTemplate;
    confirmationEmailComplete = confirmationEmailComplete.replace("{{FirstName}}", req.body.firstName);
    confirmationEmailComplete = confirmationEmailComplete.replace("{{RequestType}}", "request for a new position");
    confirmationEmailComplete = confirmationEmailComplete.replace("{{RequestID}}", uniqueID);
    console.log(confirmationEmailComplete);

    // Initialize the mailer object for the inquiry email to QM3
    var mailOptions = {
        from: process.env.EMAIL_NAME,
        to: process.env.EMAIL_NAME,
        bcc: "",
        subject: 'IMPORTANT: Automated Future Positions Inquiry from ' + req.body.firstName + ' ' + req.body.lastName,
        text: positionsInquireEmailComplete,
        attachments: [
            {
                path: "./uploads/" + req.body.resume
            }
        ]
    };

    // Send the inquiry email.  Wait for the resposne from the promise
    await wrappedSendMail(mailOptions, "Position Inquiry")
    .then(function(info) {
        console.log(info);
        //Remove the file sent from the server file system
        fs.unlinkSync("./uploads/" + req.body.resume);
    })
    .catch(function(err){
        console.error(err);
        returnStatus = 400;
        returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
    });        
    
    // Add the date to the confirmation email
    let date = new Date();
    let htmlString = fs.readFileSync("confirmationTemplate.html", 'utf8');
    htmlString = htmlString.replace("{{CURRENT_YEAR}}", date.getFullYear());
    htmlString = htmlString.replace("{{EMAIL_TEXT}}", confirmationEmailComplete);

    // Re-initialize the mailer object for the confirmation email
    mailOptions = {
        from: process.env.EMAIL_NAME,
        to: req.body.email,
        subject: 'QM3 Solutions: Confirmation Email',
        html: htmlString
    };

    // Send the confirmation email
    await wrappedSendMail(mailOptions, "Position Inquiry Confirmation")
    .then(function(info){
        console.log(info);
    })
    .catch(function(err) {
        console.error(err);
        returnStatus = 400;
        returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
    });

    const encryptedEmail = crypto.createHash('md5').update(req.body.email.toLowerCase()).digest("hex");

    // If the user chose to subscribe to the email list, add their information to the Mailchimp audience.
    if (req.body.isSubscription) {
        // Attempt to update first, if update fails, attempt to create.  If create fails, invalid input.
        await mailchimp.request({
            method: 'put',
            path: '/lists/' + list_id + "/members/" + encryptedEmail,
            body: {
                "email_address": req.body.email,
                "status": "pending",
                "interests": {
                    "a1d3fc5a73": req.body.interests.includes("Clerical"), // Clerical
                    "122d5d08ad": req.body.interests.includes("Industrial"), // Industrial
                    "2c3127049d": req.body.interests.includes("Labor"), // Labor
                    "6af78a599d": req.body.interests.includes("Warehouse"), // Warehouse
                    "6109fac32c": req.body.interests.includes("Professional") // Professional
                },
                "merge_fields": {
                    "FNAME": req.body.firstName,
                    "LNAME": req.body.lastName,
                    // "LOCATION": req.body.lastName,
                    "PHONE": req.body.phone,
                    "METHOD": req.body.contactMethod,
                    "INTERESTS": req.body.interests.join(",  "),
                    "DETAILS": req.body.details,
                    "ID": uniqueID
                }
            }
        })
        .then(function(info){
            console.log(info);
            returnStatus = info.statusCode;
        })
        .catch(function(err) {
            returnStatus = err.statusCode;
            console.error(err);
            returnMessage = 'Bad Request: Invalid Request to Mailchimp API - Failed to subscribe to mailing list failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending requests to Mailchimp.';
        });
    }

    // 7. Return a successful response to the client
    return res.status(returnStatus).send(returnMessage);
});

  // Serve static assets if in productions
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
    app.use('*', express.static('../build'));
  
    // If we hit any paths that aren't otherwise specified - serve the index.html built by react npm build
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}
