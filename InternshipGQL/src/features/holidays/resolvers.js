const holidaysResolvers = {
  Query: {
    holidays: async (_, __, { dataSources }) => {
      const value = await dataSources.holidaysApi.getHolidays()
      return value
    }
  }
}

module.exports = holidaysResolvers
