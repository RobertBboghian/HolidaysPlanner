const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class HolidaysApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getHolidays() {
    //const data = await this.get(`holidays`)
    const data = [
      {
        id: 1,
        type: 'Concediu odihna',
        from: new Date('2022', '01', '01').toDateString(),
        to: new Date('2022', '01', '05').toDateString(),
        state: 'Aprobat',
        replacementName: 'Dragos Severin',
        comments: 'Aici va fi sectiunea de comentarii'
      },
      {
        id: 2,
        type: 'Concediu medical',
        from: new Date('2022', '02', '10').toDateString(),
        to: new Date('2022', '02', '20').toDateString(),
        state: 'Trimis spre aprobare',
        replacementName: 'Robert Boghian',
        comments: 'Aici va fi sectiunea de comentarii'
      },
      {
        id: 3,
        type: 'Concediu medical',
        from: new Date('2022', '03', '10').toDateString(),
        to: new Date('2022', '03', '20').toDateString(),
        state: 'Initiat',
        replacementName: 'Dragos Severin',
        comments: 'Aici va fi sectiunea de comentarii'
      },
      {
        id: 4,
        type: 'Concediu odihna',
        from: new Date('2022', '05', '10').toDateString(),
        to: new Date('2022', '05', '20').toDateString(),
        state: 'Respins',
        replacementName: 'Robert Boghian',
        comments: 'Aici va fi sectiunea de comentarii'
      }
    ]
    return data
  }
}

module.exports = HolidaysApi
