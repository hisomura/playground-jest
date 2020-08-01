// https://jestjs.io/docs/ja/es6-class-mocks

import SoundPlayer from './sound-player';

export default class SoundPlayerConsumer {
  protected soundPlayer
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}