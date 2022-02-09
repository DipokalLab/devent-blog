import { Router } from 'express';
const router = Router();

import { checkAdmin } from '../middlewares/token.js';


import { 
    getFeed, 
    getFeedRange, 
    insertFeed, 
    deleteFeed, 
    updateFeed, 
    getFeedsFromArticles 
} from '../controllers/feed.ctrl.js';


router.get('/:idx', getFeed);
router.get('/', getFeedRange);

router.post('/', checkAdmin, insertFeed);
router.delete('/:idx', checkAdmin, deleteFeed);
router.put('/:idx', checkAdmin, updateFeed);

router.get('/article/:idx', getFeedsFromArticles);



export default router;