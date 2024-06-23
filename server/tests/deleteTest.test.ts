import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import request from 'supertest'
import server from '../server'
import connection from '../db/connection'
import * as db from '../db/animals'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('Delete Animal functionality', () => {
  it('Returns status 204 for successful deletion', async () => {
    const testID = 1

    const res = await request(server).delete(`/api/v1/animals/${testID}`)

    expect(res.status).toEqual(204)
  })

  it('Removes an animal from the database', async () => {
    const testID = 1
    const initialAnimals = await db.getAllAnimals()
    const initialAnimalCount = initialAnimals.length

    await request(server).delete(`/api/v1/animals/${testID}`)

    const finalAnimals = await db.getAllAnimals()
    const finalAnimalCount = finalAnimals.length

    expect(initialAnimalCount).toEqual(finalAnimalCount + 1)
  })
})
