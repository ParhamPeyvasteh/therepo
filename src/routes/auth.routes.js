import express from 'express';
// 1. IMPORT THE CONTROLLER HERE (Adjust the path if your file is elsewhere)
import { signup } from '../controllers/auth.controller.js'; 

const router = express.Router();

// 2. USE THE IMPORTED FUNCTION
router.post('/sign-up', signup);

router.post('/sign-in', (req, res) => {
    res.send('POST /api/auth/sign-in response');
});

router.post('/sign-out', (req, res) => {
    res.send('POST /api/auth/sign-out response');
});

export default router;