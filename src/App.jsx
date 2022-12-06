import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Post } from './componentes/Post'
import { Header } from './componentes/Header'
import styles from './App.module.css'
import { Sidebar } from './componentes/Sidebar'

const posts = [
  {
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/94126271?v=4',
      name: 'Igor Siqueira Vilhena',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Como vao voces' },
      { type: 'paragraph', content: 'Estou lançando o novo livro de marketing digital, seus bostas' },
      { type: 'link', content: 'Link do livro'}
    ],
    publishedAt: '2022-05-03 20:00:00'
  },
  {
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/94126271?v=4',
      name: 'Rodolfo Dias Vilhena',
      role: 'Programador junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Como vao voces' },
      { type: 'paragraph', content: 'Estou lançando o novo livro de programação digital' },
      { type: 'link', content: 'Link do livro'}
    ],
    publishedAt: '2022-05-03 20:00:00'
  }
]

function App() {

  let contagemPost = 0;

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(element => {
              
              contagemPost = contagemPost + 1;

              return <Post
                        key={contagemPost}
                        author={element.author}
                        content={element.content}
                        publishedAt={element.publishedAt}
                     /> 
            })
          }
        </main>
      </div>
      
    </div>
    
  )
}

export default App
