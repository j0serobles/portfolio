let nodemailer = require('nodemailer'); 


function Mailer(recipients, subject, message) {

    console.log (recipients.join(),subject, message); 

    let transporter = nodemailer.createTransport ({
        service: 'gmail', 
        auth : { 
            user : 'engjoserobles@gmail.com', 
            pass: 'tspetoarmkaypwdh'
        }
    });

    const mailOptions = { 
        from    : 'jose@engjoserobles.com', 
        to      : recipients.join(),
        subject : subject, 
        html    : message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info); 
    }
    );

}

export default Mailer;

