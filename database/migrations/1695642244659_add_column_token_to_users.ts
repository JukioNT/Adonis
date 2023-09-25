import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('token')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('token')
    })
  }
}
