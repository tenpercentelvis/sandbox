import gql from 'graphql-tag';

const types = gql`
    type User {
        id: ID!
        name: String
    }

    type Author {
        id: ID!
        name: String
    }

    type Article {
        id: ID!
        title: String!
        author: Author
        createdAt: String!
    }

    input NewArticleInput {
        id: ID!
        title: String!
        # author: User!
        createdAt: String!
    }

    type Query {
        user: User!
        articles: [Article]!
        article(id: ID): Article
    }

    type Mutation {
        articles(input: NewArticleInput!): Article
    }
`;

export default types;
