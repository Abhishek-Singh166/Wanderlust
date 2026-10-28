const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");
const { init } = require("../Models/user.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
.then((res)=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner: '6acbf6030d00e931551793d8'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();