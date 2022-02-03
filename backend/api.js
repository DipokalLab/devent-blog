import { Router } from 'express';
const router = Router();



import users from './routes/users.js';
import auth from './routes/auth.js';
import feeds from './routes/feeds.js';
import articles from './routes/articles.js';


router.use('/users', users);
router.use('/auth', auth);
router.use('/feeds', feeds);
router.use('/articles', articles);


export default router;