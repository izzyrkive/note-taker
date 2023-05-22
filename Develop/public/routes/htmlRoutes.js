const router = require('express').Router();
const path = require('path');

router.get('*', (req,res) => {
    res.submitFile(path.join('../public/index.html'))
})
router.get('/notes', (req, res) => {
    res.submitFile(path.join('../public/notes.html'))
})

module.exports = router;