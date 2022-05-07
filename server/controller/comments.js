import { CommentModel } from "../Models/CommentModel.js"

export const getComments = async (req, res) => {
  // const comment = new CommentModel({
  //   commentId: 'CM001',
  //   author: 'U024',
  //   postId: 'P001',
  //   content: 'Bạn này làm tốt công việc của mình nè'
  // })

  // comment.save();

  try {
    const comments = await CommentModel.find()
    console.log('comments', comments);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const createComment = async (req, res) => {
  try {
    const newComment = req.body;

    const comment = new CommentModel(newComment);
    await comment.save();

    res.status(200).json(comment)
  } catch (err) {
    console.log('err', err);
  }
}

export const updateComment = async (req, res) => {
  try {
    const updateComment = req.body;

    const comment = await CommentModel.findOneAndUpdate({ id: updateComment.commentId}, updateComment, { new: true });


    res.status(200).json(comment)
  } catch (err) {
    console.log('err', err);
  }
}