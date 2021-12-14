// Use local variable like this for storing the users
users = [
  { email: 'john@doe.com', password: '$2b$12$/TYFvXOy9wDQUOn5SKgTzedwiqB6cm.UIfPewBnz0kUQeK9Eu4mSC'},
  { email: 'student@mail.com', password: '$2a$10$W98RAgMG6NrCJDYEH9dn1.8Ggr/bxXc4y3eSItuJHFyhmrww8E1He'}
]

questions = [
    {question: "I ______ bus on Mondays.", answers: [
        { choice: "a. 'm going to work with", isAnswer: false},
        { choice: "b. 'm going to work by", isAnswer: false},
        { choice: "c. go to work with", isAnswer: false},
        { choice: "d. go to work by", isAnswer: true}
    ]
    },
    {question: "Sorry, but this chair is ______.", answers: [
        { choice: "a. me", isAnswer: false},
        { choice: "b. mine", isAnswer: true},
        { choice: "c. my", isAnswer: false},
        { choice: "d. our", isAnswer: false}
    ]
    },
    {question: "A: 'How old ______?'   B: 'I ______ .'", answers: [
        { choice: "a. are you / am 20 years old.", isAnswer: true},
        { choice: "b. have you / have 20 years old.", isAnswer: false},
        { choice: "c. are you / am 20 years.", isAnswer: false},
        { choice: "d. do you have / have 20 years.", isAnswer: false}
    ]
    },
    {question: "I ______ to the cinema.", answers: [
        { choice: "a. usually don't go", isAnswer: false},
        { choice: "b. don't usually go", isAnswer: true},
        { choice: "c. don't go usually", isAnswer: false},
        { choice: "d. do not go usually", isAnswer: false}
    ]
    },
    {question: "Where ______ ?", answers: [
        { choice: "a. your sister works", isAnswer: false},
        { choice: "b. your sister work", isAnswer: false},
        { choice: "c. does your sister work", isAnswer: true},
        { choice: "d. do your sister work", isAnswer: false}
    ]
    }
]

module.exports = { users, questions }
