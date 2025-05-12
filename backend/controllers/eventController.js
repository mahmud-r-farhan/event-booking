const pool = require('../db');
const { sendConfirmationEmail } = require('../mailer');

const registerUser = async (req, res) => {
  const { name, email, phone, message, age, address } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO registrations (name, email, phone, message, age, address)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, email, phone, message, age, address]
    );

    await sendConfirmationEmail(email, name);

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { registerUser };
