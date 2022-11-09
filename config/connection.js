const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://valopezs:VKocrnhgf73hjfb@cluster0.qbjb861.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;