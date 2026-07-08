const express = require('express');
const router = express.Router();
const {
  getMenuItems,
  getAllMenuItems,
  getMenuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require('../controllers/menuController');
const protect = require('../middleware/auth');
const upload = require('../middleware/upload');
// const upload = require("../config/multer");

router.get('/', getMenuItems);
router.get('/all', protect, getAllMenuItems);
router.get('/:id', getMenuItem);
router.post('/', protect, upload.single('image'), createMenuItem);
// router.post("/",upload.single("image"), createMenuItem);
router.put('/:id', protect, upload.single('image'), updateMenuItem);
router.delete('/:id', protect, deleteMenuItem);

module.exports = router;
