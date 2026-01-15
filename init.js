const mongoose = require("mongoose");
const Chat = require("./models/chat.js") 


main().then(() => {
    console.log("connection is successfull");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


// 2. Data Generators
const names = ["Anita", "Rahul", "Priya", "Sneha", "Vikram", "Amit", "Sonia", "Karan"];
const messages = [
    "Hey! How are you?", "Did you see the news?", "Let's meet tomorrow.",
    "The project is done.", "Call me later.", "Happy Birthday!", 
    "I am stuck in traffic.", "Check your email.", "Where are you?",
    "Great work today!", "See you soon!", "Dinner at 8?"
];

const seedDB = async ()=>{
    let allChats = [];
    for(let i = 0; i<50; i++){
        let tempChat ={
            from: names[Math.floor(Math.random() * names.length)],
            to: names[Math.floor(Math.random() * names.length)],
            msg: messages[Math.floor(Math.random() * messages.length)],
            created_at: new Date(Date.now() - Math.floor(Math.random() * 1000000000)) 
        };
        if(tempChat.from !== tempChat.to) {
            allChats.push(tempChat);
        }
    }
await Chat.insertMany(allChats);
    console.log("Database seeded with 50 chats!");    
};
seedDB().then(() => mongoose.connection.close());