import { PostModel } from "../models/PostModel.js"
import { UserModel } from "../models/UserModel.js"

export const getPosts = async (req, res) => {
  // const post = new PostModel({
  //   postId: 'P010',
  //   author: 'U013',
  //   title: 'Chính chủ tuyển nữ giúp việc nhà ở lại',
  //   detail: {
  //     workplace: 'gia đình'
  //   },
  //   price: 5000000,
  //   content: 'Gia đình tôi đang cần 2 người : 1 người chăm bé và 1 người giúp việc nhà . Nhà chị gái tôi cần 1 người chăm mẹ nữa. Nhà tôi 1 trệt,1 lầu,1 lửng,diện tích 60m2 , nhà có 2 vợ chồng và 1 con. 1 đứa 10 tháng. Chị gái tôi đang chăm sóc mẹ già 85 tuổi bị tai biến nhẹ đi lại hơi yếu, dạo này chị ấy bận công việc công ty không có thời gian chăm sóc bà cụ, nên chị của mình cũng cần 1 cô giúp việc chăm sóc mẹ nữa. Mình cần tìm cô giúp việc gia đình chủ yếu là nấu ăn,lau dọn nhà cửa, thật thà, sạch sẽ,..',
  //   type: 'employer',
  //   image: 'https://ipfs.infura.io/ipfs/QmdbMXL8Xn23cXKQamJEegBNNJbfvhgUvEktvfSrpcgv8h'
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

export const getPostsAndAuthor = async (req, res) => {
  try {
    const posts = await PostModel.aggregate([{
      $lookup: {
        from: 'users',
        localField: "author",
        foreignField: "userId",
        as: 'author'
      }
    }]).exec((err, posts) => {
      res.status(200).json(posts);
    })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getListHouseHelper = async (req, res) => {
  try {
    const posts = await PostModel.aggregate([{
      $lookup: {
        from: 'users',
        localField: "author",
        foreignField: "userId",
        as: 'author'
      }
    }]).exec((err, posts) => {
      let filterPost = posts.filter((element) => element.type === 'employee')
      res.status(200).json(filterPost)
    })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getListFindHouseHelper = async (req, res) => {
  try {
    const posts = await PostModel.aggregate([{
      $lookup: {
        from: 'users',
        localField: "author",
        foreignField: "userId",
        as: 'author'
      }
    }]).exec((err, posts) => {
      let filterPost = posts.filter((element) => element.type === 'employer')
      res.status(200).json(filterPost)
    })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}