const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const kobajadatabaseRouter = require("./routes/kobajadatabase");
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(
    cors({
        origin: "*",
    })
);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/", (req, res) => {
    res.json({
        message: "ok"
    });
});
app.use("/kobaja-product", kobajadatabaseRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({
        message: err.message
    });
    return;
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});