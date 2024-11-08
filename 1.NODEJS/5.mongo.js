import { MongoClient } from "mongodb";

var uri =
  "mongodb+srv://FS15:123@clusterfs16.qlofw.mongodb.net/?retryWrites=true&w=majority&appName=Clusterfs16";
MongoClient.connect(uri, function (err, client) {
  const collection = client.db("bookshop").collection("user");
  // perform actions on the collection object
  console.log(collection);
  //client.close();
});
