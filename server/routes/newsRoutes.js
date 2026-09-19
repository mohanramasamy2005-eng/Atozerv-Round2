import { Router } from 'express'
import { getNews, latestNews, listNews, searchNews } from '../controllers/newsController.js'

const router = Router()
router.get('/latest', latestNews)
router.get('/search', searchNews)
router.get('/category/:category', (req, res, next) => listNews({ ...req, query: { ...req.query, category: req.params.category } }, res, next))
router.get('/:id', getNews)
router.get('/', listNews)
export default router
