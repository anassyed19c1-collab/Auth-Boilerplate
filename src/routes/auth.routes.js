import express from 'express';
import { login, logout, refreshAccessToken, register } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/auth.js';
import authorizeRoles from '../middleware/rbac.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)

router.post('/logout', logout)

router.post('/refresh-token', refreshAccessToken)

router.get('/profile', verifyToken, (req, res) => {
  res.json({ success: true, message: "This is a protected profile route", user: req.user });
})

router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ success: true, message: "This is a protected admin route", user: req.user });
})

export default router;