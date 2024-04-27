const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(`your_mongodb_connection_string`);
client.connect();
const db = client.db('counselling');
const col = db.collection('register');

app.post('/register', async (req, res) => {
  try {
    await col.insertOne(req.body);
    res.send('Inserted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Other routes...

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
