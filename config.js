// const DB_USERNAME = process.env.DB_USERNAME
// const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USERNAME = 'bestculling'
const DB_PASSWORD = 'tml2019'
module.exports = {
    mogodburi: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@datatest-cbti5.mongodb.net/test?retryWrites=true&w=majority`,
}