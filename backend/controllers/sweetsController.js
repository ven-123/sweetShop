import Sweet from '../models/Sweet.js';

// Add new sweet
export const addSweet = async (req, res) => {
  try {
    const sweet = await Sweet.create(req.body);
    res.status(201).json(sweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all sweets
export const getSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find({});
    res.json(sweets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search sweets
export const searchSweets = async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;
  let query = {};

  if (name) query.name = { $regex: name, $options: 'i' };
  if (category) query.category = category;
  if (minPrice || maxPrice) query.price = {};
  if (minPrice) query.price.$gte = Number(minPrice);
  if (maxPrice) query.price.$lte = Number(maxPrice);

  try {
    const sweets = await Sweet.find(query);
    res.json(sweets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update sweet
export const updateSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(sweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete sweet (Admin only)
export const deleteSweet = async (req, res) => {
  try {
    await Sweet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Sweet deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Purchase sweet
export const purchaseSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    const purchaseQty = Number(req.body.quantity) || 1;

    if (sweet.quantity < purchaseQty)
      return res.status(400).json({ message: 'Not enough stock' });

    sweet.quantity -= purchaseQty;
    await sweet.save();

    res.json({
      message: `Purchased ${purchaseQty} sweet(s) successfully`,
      sweet,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Restock sweet (Admin only)
export const restockSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    sweet.quantity += Number(req.body.quantity);
    await sweet.save();
    res.json(sweet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
