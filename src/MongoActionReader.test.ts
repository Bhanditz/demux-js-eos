import { NotInitializedError } from 'demux'
import { MongoClient } from 'mongodb'
import { MongoActionReader } from './MongoActionReader'
import { mockConnect } from './testHelpers/mongoMock'

MongoClient.connect = jest.fn(() => mockConnect)

describe('MongoActionReader', () => {
  let reader: any

  beforeEach(async () => {
    reader = new MongoActionReader('mongodb://127.0.0.1:27017', 0, false, 'EOS')
    await reader.initialize()
  })

  it('returns the head block number', async () => {
    const blockNum = await reader.getHeadBlockNumber()
    expect(blockNum).toEqual(4)
  })

  it('returns the last irreversible block number', async () => {
    const blockNum = await reader.getLastIrreversibleBlockNumber()
    expect(blockNum).toEqual(3)
  })

  it('returns block with the expected block number', async () => {
    const returnedBlock = await reader.getBlock(4)
    expect(returnedBlock.blockInfo.blockNumber).toEqual(4)
  })

  it('throws if not correctly initialized', async () => {
    const failedReader = new MongoActionReader('mongodb://127.0.0.1:27017', 0, false, 'failed')
    const result = failedReader.getNextBlock()
    expect(result).rejects.toThrow(NotInitializedError)
  })
})
