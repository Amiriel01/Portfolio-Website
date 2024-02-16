import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 50,
        required: true,
    },
    phone: {
        type: String,
        minLength: 1,
        maxLength: 15,
    },
    email: {
        type: String,
        match: /.+\@.+\..+/,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    my_notes: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Message", MessageSchema);