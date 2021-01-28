module.exports = {
  projects: {
    app: {
      schema: 'src/graphql/schema/stargate.graphql',
      documents: ['src/graphql/documents/**/*.{graphql}'],
      extensions: {
        languageService: {
          useSchemaFileDefinitions: true,
        },
        /*
        endpoints: {
          default: {
            url: 'http://localhost:8000',
            headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
          },
        },
        */
      },
    },
  },
}
