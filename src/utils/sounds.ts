const pathSounds = '/assets/sounds/'

export const settingsSound = {
  url: `${pathSounds}bg-sound.MP3`,
  playbackRate: 2,
  volume: 3,
}

export const SoundClickButton = () => {
  const audio = new Audio(`${pathSounds}sound-button-click.MP3`)

  audio.volume = 0.3

  audio.play()
}

export const SoundGlitch = () => {
  const audio = new Audio(`${pathSounds}glitch-sound.MP3`)

  audio.volume = 0.3

  audio.play()
}
