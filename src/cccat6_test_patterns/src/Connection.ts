import postgresPromisse from 'pg-promise'

const CONNECTION_STRING = 'postgres://postgres:123456@localhost:5432/app';

export default class Connection {
  postgresPromisse: any;

  constructor() {
    this.postgresPromisse = postgresPromisse()(CONNECTION_STRING);
  }

  query (statement: string, parameters: any){
    return this.postgresPromisse.query(statement, parameters);
  }
}