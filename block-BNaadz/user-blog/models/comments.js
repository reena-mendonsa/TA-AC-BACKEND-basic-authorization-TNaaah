var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: { type: String, required: true },
    blogId: { type: String, ref: 'Blog', required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    commentor: { type: Schema.Types.ObjectId, ref: 'Comment', required: true },
  },
  { timestamps: true }
);

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;