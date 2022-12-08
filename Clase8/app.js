import express from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users=[]

app.get('/',(req,res) => res.send('OK'))

