const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let reminders = [];

// Get all reminders
app.get("/reminders", (req, res) => {
    res.json(reminders);
});

// Add reminder
app.post("/reminders", (req, res) => {

    const reminder = {
        id: Date.now(),
        title: req.body.title,
        date: req.body.date,
        time: req.body.time
    };

    reminders.push(reminder);

    res.json(reminder);
});

// Delete reminder
app.delete("/reminders/:id", (req, res) => {

    reminders = reminders.filter(r => r.id != req.params.id);

    res.json({
        message: "Reminder Deleted"
    });

});

// Start Server
app.listen(50001, () => {
    console.log("Server running at http://localhost:50001");
});