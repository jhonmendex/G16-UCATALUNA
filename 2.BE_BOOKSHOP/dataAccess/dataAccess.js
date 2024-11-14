import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class DataAccess {
  constructor() {
    if (!DataAccess.instance) {
      this.uri = process.env.URL_DATA_BASE;
      this.client = new MongoClient(this.uri);
      this.dataBaseName = process.env.DATA_BASE_NAME;
      this.db = this.client.db(this.dataBaseName);
      DataAccess.instance = this;
    }
    return DataAccess.instance;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Conectado a la base de datos");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }

  async findAll(collection_name) {
    const collection = this.db.collection(collection_name);
    const users = await collection.find().toArray();
    return users;
  }

  async findById(db) {}

  async save(db, body) {
    const collection = db.collection("user");
    const query = await collection.insertOne(body);
    return query;
  }

  async update(db, id, body) {
    const collection = db.collection("user");
    const query = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );
    return query;
  }

  async delete(db, id) {
    const collection = db.collection("user");
    const query = await collection.deleteOne({ _id: new ObjectId(id) });
    return query;
  }
}

export default DataAccess;
