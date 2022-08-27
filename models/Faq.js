const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a Title'],
        unique: true,
        trim: true,
        maxlength: [50, 'Title cannot be more than 40 characters']
    },
    description:{
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Faq', FaqSchema);