module.exports= `
type Channel {
        id: Int!
        name: String!
        public: Boolean!
        messages: [Message!]!
        user: [User!]!
    }
`