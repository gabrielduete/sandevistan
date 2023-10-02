export const SoundClickButton = () => {
  const audio = new Audio(
    'https://cdn.discordapp.com/attachments/778024116140769331/1157482881128611880/click-button-mixkit-water-sci-fi-bleep-902.MP3?ex=6518c56f&is=651773ef&hm=eb6ac458962c9df4d342d5be259a8ea6996aac51c836af209cf5f87ee57cb54a&'
  )

  audio.volume = 0.6

  audio.play()
}

export const SoundGlitch = () => {
  const audio = new Audio(
    'https://cdn.discordapp.com/attachments/778024116140769331/1157484834583760997/Techno-Mania-Glitch-Effect-Sound.MP3?ex=6518c741&is=651775c1&hm=203d6e258d07d03650ee4ca4ea977e2825e6d43c833fc5d8e79f41b9704ee6c7&'
  )

  audio.volume = 0.6

  audio.play()
}
