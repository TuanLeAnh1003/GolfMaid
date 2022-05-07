import { PostModel } from "../Models/PostModel.js"

export const getPosts = async (req, res) => {
  // const post = new PostModel({
  //   postId: 'P002',
  //   author: 'U041',
  //   detail: {
  //     expertise: ['Vệ sinh nhà cửa', 'Chăm con cái'],
  //     advantage: 'Khỏe mạnh, thật thà, nhanh nhẹn',
  //     experience: '1 năm',
  //     workplace: 'cá nhân'
  //   },
  //   price: 5000000,
  //   content: '',
  //   type: 'Người giúp việc',
  //   image: 'https://via.placeholder.com/200'
  // })

  // post.save();

  try {
    const posts = await PostModel.find()
    console.log('posts', posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post)
  } catch (err) {
    console.log('err', err);
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate({ id: updatePost.postId}, updatePost, { new: true });


    res.status(200).json(post)
  } catch (err) {
    console.log('err', err);
  }
}