import express from 'express'
import { getAllNotes, createNote, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

// Fetch notes
router.get('/', getAllNotes)

// Create notes
router.post('/', createNote);

// Update notes
router.put('/:id', updateNote);

// Delete notes
router.delete('/:id', deleteNote)

export default router;