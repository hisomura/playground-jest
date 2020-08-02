// https://jestjs.io/docs/ja/es6-class-mocks

export default class SoundPlayer {
  protected foo: string

  constructor() {
    this.foo = 'bar'
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName)
  }
}
