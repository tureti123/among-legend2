
import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const url = 'process.env.MONGO_URI;/';
const client = new MongoClient(url);
await client.connect();
const database = client.db('votreBaseDeDonnées');
const collection = database.collection('user');
const result = await collection.deleteMany({});
await client.close();
console.log('Connexion MongoDB fermée');

