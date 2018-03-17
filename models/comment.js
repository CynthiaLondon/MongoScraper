var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create
var CommentSchema = new Schema({
  comment: String
});
// creates model
var Comment = mongoose.model("Comment", CommentSchema);
// Export comment model
module.exports = Comment;