import { getFeedsRange, getFeedData, insertFeedData, deleteFeedData, updateFeedData, getFeedsInsideArticle } from '../models/feeds.model.js';
import { transformTokentoUserid } from '../services/users.serv.js'

import sanitizeHtml from 'sanitize-html';
import dayjs from 'dayjs'




export async function getFeed (req, res) {
    let idx = req.params.idx;

    let data = await getFeedData(idx)

    if (Array.isArray(data) && data.length === 0) {
        res.status(404).json({data:'', msg:'Not Found'})
    } else {
        res.status(200).json({data:data})
    }
}

export async function getFeedRange (req, res) {

    let get_range = 10;
    let query_start = Number(req.query.start);

    let start = Number.isInteger(query_start) == true ? query_start : 0
    let end = start+get_range;

    let data = await getFeedsRange({ start, end })

    if (data.status == 1) {
        res.status(200).json({data:data.result})
    } else {
        res.status(404).json({data:'', msg:'Not Found'})

    }
}

export async function insertFeed (req, res) {
    let token = req.headers['x-access-token'];
    var now = dayjs();

    let title = sanitizeHtml(req.body.title);
    let intro = sanitizeHtml(req.body.intro);
    let content = sanitizeHtml(req.body.content);
    let tags = sanitizeHtml(req.body.tags);
    let date = now.format("YYYY.MM.DD.HH.mm.ss"); 
    let owner = await transformTokentoUserid(token);
    let article = req.body.article;
    let image = sanitizeHtml(req.body.image);

    let insert_data = { title, intro, content, tags, date, owner, article, image };

    let data = await insertFeedData(insert_data)

    if (data.status == 1) {
        res.status(200).json({status:1})
    } else {
        res.status(401).json({status:0})
    }
}


export async function deleteFeed (req, res) {
    let token = req.headers['x-access-token'];

    let feed_idx = req.params.idx;
    let owner = await transformTokentoUserid(token);


    let check = { feed_idx, owner };

    let data = await deleteFeedData(check)

    if (data.status == 1) {
        res.status(200).json({status:1})
    } else {
        res.status(401).json({status:0})
    }
}

export async function updateFeed (req, res) {
    let token = req.headers['x-access-token'];

    let feed_update_idx = Number(req.params.idx);
    let feed_update_content = req.body.content;
    let owner = await transformTokentoUserid(token);

    let update_data = { feed_update_idx, feed_update_content, owner };

    let data = await updateFeedData(update_data)

    if (data.status == 1) {
        res.status(200).json({status:1})
    } else {
        res.status(401).json({status:0})
    }
}

export async function getFeedsFromArticles (req, res) {
    let article_idx = req.params.idx;

    let data = await getFeedsInsideArticle(article_idx)

    if (data.status == 1) {
        res.status(200).json({data:data.result})
    } else {
        res.status(404).json({data:'', msg:'Not Found'})
    }
}