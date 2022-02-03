import { getArticleFromIdx, getArticlesRange } from '../models/articles.model.js'




export async function getArticleInfo (req, res) {
    let idx = req.params.idx;

    let data = await getArticleFromIdx(idx)

    if (Array.isArray(data) && data.length === 0) {
        res.status(404).json({data:'', msg:'Not Found'})
    } else {
        res.status(200).json({data:data})
    }
}

export async function getArticles (req, res) {

    let default_range = 10;
    let query_start = req.query.start;

    let select_start = Number.isInteger(query_start) == true ? query_start : 0
    let select_end = select_start+default_range;

    let data = await getArticlesRange({ select_start, select_end })

    if (data.status == 1) {
        res.status(200).json({data:data.result})
    } else {
        res.status(404).json({data:'', msg:'Not Found'})

    }
}
