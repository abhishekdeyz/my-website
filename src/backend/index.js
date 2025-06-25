const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, issue, message } = req.body;

  // Replace with your real email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'deya5579@gmail.com',
      pass: 'xwcljxttgvuhdjgw',
    },
  });

  const mailOptions = {
    from: email,
    to: 'deya5579@gmail.com',
    subject: `New Contact Form Submission: ${issue}`,
    text: `Name: ${name}\nEmail: ${email}\nIssue: ${issue}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});