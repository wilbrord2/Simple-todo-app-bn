import express from "express";
import reminderList from "./router/reminderList"
const app = express();
app.use(express.json());
app.use("/reminders", reminderList);
app.get("/", (req, res) => {
    res.send("Hi Wilbrord!!!");
});
app.listen(4000, () => console.log("Server Started"));
