const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());
app.use(express.json()); // Để server nhận JSON

app.post("/submit", (req, res) => {
    const data = req.body;
    console.log("Dữ liệu nhận được:", data);
    res.status(200).send("Dữ liệu đã được gửi thành công!");
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
