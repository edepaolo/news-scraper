var mongoose = require('mongoose')

var Schema = mongoose.Schema

var notesSchema = new Schema({
    _headlineID: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    // date is just a string
    date: {
        type: Date,
        default: Date.now
    },
    // as is the noteText
    noteText: String
});


var Notes = mongoose.model("Notes", notesSchema);
// Export the Notes model
module.exports = Notes;