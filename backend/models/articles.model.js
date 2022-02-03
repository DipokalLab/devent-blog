import conn from '../databases/db.js'

export async function getArticlesRange(range) {
    try {
        let { select_start, select_end } = range;

        let selectArticle = "SELECT * FROM articles WHERE idx BETWEEN ? AND ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(selectArticle, [select_start, select_end], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve({status:1, result:result})
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function getArticleFromIdx(idx) {
    try {
        let selectArticle = "SELECT * FROM articles WHERE idx = ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(selectArticle, [idx], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve(result)
            });
        })

        return data

    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

