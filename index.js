const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const client = new MongoClient(`mongodb+srv://admin:admin@subbareddy.rbkyzfh.mongodb.net/?retryWrites=true&w=majority&appName=subbareddy`);
client.connect();
const db = client.db('counselling');
const col = db.collection('register');

app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body); // Wait for insertion to complete
        res.send('Inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/retrieve', async (req, res) => {
    
        const result = await col.find().toArray(); // Wait for data retrieval to complete
        console.log(result);
        res.send(result);
})
app.put('/users/:id',async (req,res)=>{
    const {id}=req.params
    const {name, role, email, password}=req.body
    const result= col.updateOne({_id: new ObjectId(id)},
    {$set: {name, role, email, password}})
    res.send('updated')
}
    )
app.delete('/users/:id',async(req,res)=> {
    const {id}=req.params
    const result= await col.deleteOne({_id: new ObjectId(id)})
    res.json({message:"deleted Successfully"})
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen('8080', () => {
    console.log('Server is Running');
});