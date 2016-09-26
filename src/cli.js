import yargs from 'yargs'

const options = yargs(process.argv.slice(2))

options
.alias('p', 'port')

const {argv:{_, port}} = options
export default {
  _,
  port
}
