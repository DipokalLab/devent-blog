import { Router } from 'express';
import { checkWithCookie } from '../../backend/middlewares/token.js'

const router = Router();


router.get('/', function(req, res) {
    res.render('index')
});


router.get('/auth/login', function(req, res) {
    res.render('user/login')
});

router.get('/auth/signup', function(req, res) {
    res.render('user/signup')
});

router.get('/write', checkWithCookie, function(req, res) {
    res.render('page/write')
});

router.get('/post/:id', function(req, res) {
    res.render('page/read')
});

export default router;