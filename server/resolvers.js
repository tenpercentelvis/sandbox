const resolvers = {
    Query: {
        user() {
            return {
                id: 1,
                name: 'Peter',
                createdAt: '123',
            };
        },

        article(obj, args, context) {
            const { id } = args;
            const { author, models } = context;

            return models.Articles.findOne({ id });
            // return models.Articles.findOne({ id, author: author.id });
        },

        // obj, args, context, info
        // https://www.leveluptutorials.com/tutorials/how-to-make-a-graphql-api/arguments-in-graphql

        articles(obj, args, context) {
            const { author, models } = context;

            return models.Articles.findMany();
        },
    },

    Article: {
        author: (obj, args, context) => {
            const id = obj.author;

            const results = context.models.Authors.findOne({ id });

            return results;
        },
    },

    Mutation: {
        articles(_, { input }) {
            return input;
        },
    },

    // Articles: {
    //     author(articles) {
    //         return {
    //             id: 1,
    //             name: 'Peter',
    //             createdAt: '1234567890',
    //         };
    //     },
    // },
};

export default resolvers;
