const express = require('express')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { users, questions } = require('./data.js')

const port = 5000
const app = express()
app.listen(port, () => console.log(`App is running on localhost:${port}`))

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
app.use(session({
  secret: 'secret', 
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {  
  done(null, user.email) 
})
passport.deserializeUser((email, done) => { 
  done(null, users.find(user => user.email === email))
})

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
  const user = users.find(user => user.email == email)
  if (!user) {
    return done(null, false, {message: 'No user found'})
  }
  bcrypt.compare(password, user.password).then((ok) => {
    if (!ok) { 
      return done(null, false, {message: 'Invalid login attempt'})  
    }
    done(null, user)
  })
}))

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json(info)
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.json({email: user.email})
    }) 
  })(req, res, next)
  // a passport ezzel menti el a usert a session-be
  // ha nem használok callback functiont itt, akkor magától megcsinálja
  // itt azért használok callback-et, mert JSON válaszokat küldök
})

app.get('/', (req, res) => {
  if (req.isAuthenticated()) { 
    return res.json({
      userEmail: req.user.email,
      loggedin: true
    })
  }
  return res.json({
    userEmail: '',
    loggedin: false
  })
})

app.delete("/logout", (req,res) => {
  req.logOut()
  return res.json({loggedin: req.isAuthenticated()})
})

app.post('/test', (req, res) => {
  if (!req.isAuthenticated()) { 
    return res.sendStatus(401)
  }
  let next = 0
  if (req.body.test === null) {
    req.user.result = 0
  } else {
    const questionObj = questions[req.body.test]
    if (questionObj.answers[req.body.selected].isAnswer) {
      req.user.result++
    }
    next = req.body.test + 1
  }
  if (next >= questions.length) {
    return res.json({done: true, loggedin: true})
  }
  const questionObj = questions[next]
  const question = questionObj.question
  const choices = questionObj.answers.map(answer => answer.choice)
  return res.json({ question, choices, test: next, loggedin: true })
})

app.get('/result', (req, res) => {
  if (!req.isAuthenticated()) { 
    return res.sendStatus(401)
  }
  return res.json({ result: req.user.result, all: questions.length, loggedin: true })
})
