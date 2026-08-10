const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");
const Mongo_url="mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(Mongo_url);
}
main().then(()=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log(err);
})
const initDB=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"6a69df1483f52bdd077cd6e1"}));
    await Listing.insertMany(initdata.data);
    console.log("Data was initialised");
}
initDB();