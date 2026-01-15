const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js") 
app.use("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(() => {
    console.log("connection is successfull");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

app.get("/", (req, res) => {
    res.send("root is working fine bro")
});
app.listen(8080, () => {
    console.log("server is listening to port 8080 ");
});