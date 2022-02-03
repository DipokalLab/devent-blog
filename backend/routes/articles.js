import { Router } from 'express';
const router = Router();

import { checkAdmin } from '../middlewares/token.js';


import { getArticleInfo, getArticles } from '../controllers/articles.ctrl.js';


router.get('/:idx', getArticleInfo);
router.get('/', getArticles);



export default router;