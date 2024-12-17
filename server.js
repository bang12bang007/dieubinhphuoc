const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Để nhận dữ liệu JSON

// Route xử lý form submit
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Dữ liệu nhận được:', data);  // In dữ liệu gửi lên console (hoặc có thể lưu vào database)
    res.status(200).send('Dữ liệu đã được gửi thành công!');
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
