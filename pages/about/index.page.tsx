import Layout from '~/src/layout'

import * as S from './styles'

const About = () => {
  return (
    <Layout>
      <section>
        <h1>Sandevistan</h1>
        <S.SubTitle>About</S.SubTitle>
        <S.Content>
          <p>
            My Virtual Library of Software Engineering Studies. This project
            aims to document all my studies that will be stored on this Notion
            page. It will be automatically updated whenever I make any changes.
          </p>
          <S.Image
            src='https://cdn.discordapp.com/attachments/778024116140769331/1169037507028066365/SandevistanApogee.webp?ex=6553f205&is=65417d05&hm=cc4b60e4129c26e12d1e2bbe59f163a06f04bfb44e0af0d14c15f44cd8e64e57&'
            alt='Militech apogee Sandevistan'
          />
          <p>
            The name of the project was inspired by the Sandevistan Operating
            System implant from the Cyberpunk 2077 game. It was my favorite
            implant during my gameplay. This implant can &quot;stop&quot; time
            and make everything slow, except the user, which is somewhat similar
            to this project, as if I stopped time to go back and review
            something I studied and left documented. I was out of ideas for what
            name to put, and this came to mind.
          </p>
          <a
            href='https://github.com/gabrielduete/sandevistan'
            target='_blank'
            rel='noreferrer'
          >
            GitHub repository
          </a>
        </S.Content>
      </section>
    </Layout>
  )
}

export default About
