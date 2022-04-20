// const { request } = require("../app");
const request = require("superagent");

module.exports = (app) => {
    app.get('/signin/callback', (req, res, next) => {
        const { query } = req;

        const { code } = query;

        if (!code) {
            return res.send({
                success: false,
                message: 'Error: node code'
            });
        }

        //Post

        request
            .post('httpss://github.com/login/oauth/access token')
            .send({
                 client_id: '1ab2e0e9353992ad4712', 
                 client_secret: '9f817bb3db0a505a8621a317219714d15c7b25f3',
                 code: code 
                })
            .set('Accept', 'application/json')
            .then(function(res) {
                const data = req.body;

                res.send(data);
            });
    });
};