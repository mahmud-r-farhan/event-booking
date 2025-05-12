const express = require('express');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
