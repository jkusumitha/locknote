// const express = require("express")
// const cors = require("cors")
// const { connection } = require("./db")
// const { userRouter } = require("./routes/user.routes")
// const { noteRouter } = require("./routes/notes.routes")
// require("dotenv").config()
// const port = process.env.PORT ||3000
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use("/user",userRouter)
// app.use("/note",noteRouter)


// app.get("/",(req,res)=>{

//     res.send({
//         message:"api is working now"
//     })
// })


// app.listen(port,async()=>{

//     try {
//         await connection
//         console.log("database is connected")
//     } catch (error) {
//         console.log(error)
//     }


//     console.log("Server is running on port number",port)

// })

const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send({
        message: "API is working now"
    });
});

app.listen(port, async () => {
    try {
        await connection;
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }

    console.log("Server is running on port number", port);
});