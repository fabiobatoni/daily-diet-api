// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'db/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
