const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ // Email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
