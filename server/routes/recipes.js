const express = require('express');
const router = express.Router();
const { readJSON } = require('../utils/file');

const DATA_PATH = 'data/recipes.json';

router.get('/', (req, res) => {
	try {
		const q = req.query.q;
		let recipes = readJSON(DATA_PATH);
		if (q) {
			const ql = q.toLowerCase();
			recipes = recipes.filter(r =>
				(r.title && r.title.toLowerCase().includes(ql)) ||
				(r.description && r.description.toLowerCase().includes(ql)) ||
				(r.tags && r.tags.some(t => t.toLowerCase().includes(ql)))
			);
		}
		res.json(recipes);
	} catch (err) {
		res.status(500).json({ error: 'Failed to load recipes' });
	}
});

router.get('/:id', (req, res) => {
	try {
		const id = req.params.id;
		const recipes = readJSON(DATA_PATH);
		const recipe = recipes.find(r => String(r.id) === String(id));
		if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
		res.json(recipe);
	} catch (err) {
		res.status(500).json({ error: 'Failed to load recipes' });
	}
});

module.exports = router;
