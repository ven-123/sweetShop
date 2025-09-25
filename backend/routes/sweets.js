import express from 'express';
import {
  addSweet,
  getSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} from '../controllers/sweetsController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getSweets);
router.get('/search', searchSweets);

// Protected routes
router.post('/', protect, addSweet);
router.put('/:id', protect, updateSweet);
router.delete('/:id', protect, admin, deleteSweet);
router.post('/:id/purchase', protect, purchaseSweet);
router.post('/:id/restock', protect, admin, restockSweet);

export default router;
