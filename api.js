var express = require('express')
var router = express.Router()

router.post('/set_auth', (req, res) => {
	req.session.authenticated = req.body.authenticated
	res.json(req.body)
})

module.exports = router