//@vitest-environment jsdom
import { beforeAll, describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { setupApp } from './setup'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('Test delete button functionality', () => {
  const mockAnimalID = 1

  const mockAnimalData = {
    id: 1,
    name: 'Lion',
    species: 'Panthera leo',
    image: '/images/lion.png',
  }

  it('should delete the animal and navigate back to the list', async () => {
    nock('http://localhost')
      .get(`/api/v1/animals/${mockAnimalID}`)
      .reply(200, mockAnimalData)

    const deleteScope = nock('http://localhost')
      .delete(`/api/v1/animals/${mockAnimalID}`)
      .reply(204)

    setupApp(`/animals/${mockAnimalID}`)
    const animalName = await screen.findByText('Lion')
    expect(animalName).toBeVisible()

    const deleteButton = await screen.findByText('Delete')
    await userEvent.click(deleteButton)

    expect(deleteScope.isDone()).toBe(true)

    const animalListHeading = await screen.findByText('View Animals')
    expect(animalListHeading).toBeVisible()
  })
})
