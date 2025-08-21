const articleModel=require("../models/articleSchema")

//create article

const getAllArticles = async (req, res) => {
  const articles = await articleModel.find();
  res.json(articles);
};

const getArticleById = async (req, res) => {
  const article = await articleModel.findById(req.params.id);
  if (!article) return res.status(404).json({ message: "Article not found" });
  res.json(article);
};

const createArticle = async (req, res) => {
  const newArticle = new articleModel(req.body);
  await newArticle.save();
  res.status(201).json(newArticle);
};

const updateArticle = async (req, res) => {
  const updated = await articleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Article not found" });
  res.json(updated);
};

const deleteArticle = async (req, res) => {
  const deleted = await articleModel.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Article not found" });
  res.json({ message: "Article deleted" });
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
};