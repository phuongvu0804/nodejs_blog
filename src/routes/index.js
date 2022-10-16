const newsRouter = require('./news.route')

function route (app) {

    app.get('/', (req, res) => {
        var a = 1;
        var b = 2;
    
        var c = a + b;
      res.render('index')
    })
    
    // app.get('/news', (req, res) => {
    //   res.render('news')
    // })
    
    app.use('/news', newsRouter)

    app.get('/search', (req, res) => {
      res.render('search', {
        users: users
      })
    })
    
    app.post('/', (req, res) => {
      users.push(req.body)
      res.redirect('/search')
    })
}

module.exports = route
