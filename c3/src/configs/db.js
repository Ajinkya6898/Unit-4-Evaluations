const mongoose = require("mongoose");

module.exports = () => {
     return mongoose.connect("mongodb+srv://ajinkya6898:<password>@cluster0.rzdpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};