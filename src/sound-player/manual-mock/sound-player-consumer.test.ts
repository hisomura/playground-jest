// sound-player-consumer.test.js
// @ts-ignore
import SoundPlayer, { mockPlaySoundFile } from './sound-player'
import SoundPlayerConsumer from './sound-player-consumer'

jest.mock('./sound-player') // SoundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  // @ts-ignore
  SoundPlayer.mockClear()
  mockPlaySoundFile.mockClear()
})

it('We can check if the consumer called the class constructor', () => {
  new SoundPlayerConsumer()
  expect(SoundPlayer).toHaveBeenCalledTimes(1)
})

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer()
  const coolSoundFileName = 'song.mp3'
  soundPlayerConsumer.playSomethingCool()
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName)
})
