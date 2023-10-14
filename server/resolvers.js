export const resolvers = {
    Query: {
        job:() => {
            return {
                title: 'The title',
                description: 'description',
            }
        }
    }
}