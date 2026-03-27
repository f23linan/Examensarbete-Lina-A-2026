const express = require("express");

const app = express();

app.get("/search", (req, res) => {

    const word = req.query.q;

    res.json({
        message: "Search worked",
        word: word
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});