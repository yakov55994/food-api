import express from "express";
const router = express.Router();

router.post("/addPost", (req, res) => {
  const { prodName, prodPrice, prodImage, prodDesc } = req.body;
  return res.status(200).json({
    massage: `Name: ${prodName} Price: ${prodPrice} Image: ${prodImage} Description: ${prodDesc}`,
  });
});

export default router;
