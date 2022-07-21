import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Groo world!</title>
        <meta name="description" content="Next.js로 만든 천그루의 포트폴리오" />
        <link rel="icon" href="/heart.png" />
      </Head>

      <main>
        <div>
          <p className={styles.title}>
            <h1>✨ 천 그루 ✨<br></br> Cheon Groo</h1>
            <h2>Handong Univ.</h2>
            <h2>ICT convergence / Electronics Engineering</h2>
          </p>
        </div>
        
        <div className={styles.Groo}>
          <Image  src="/IMG_1324.jpg" height={300} width={300} /> 
        </div>
        
        <div>
          <p className={styles.description}>
            <h3>💫 Birthday : 1998. 09. 25<br></br></h3>
            <h3>🌿 MBTI : ENTP<br></br></h3>
            <h3>🧡 Hobby : 게임(롤토체스/닌텐도/루미큐브/마피아42), 수영, 방탈출, 지식인 답변, 나무위키 정독<br></br></h3>
            <h3>🔥 Favorit : 🧀 Food, ⚾️ NC Dinos 🦖<br></br></h3>
          </p>
        </div>

        <div>
          <a href="https://www.instagram.com/for_.rest/" className={styles.Groo}>
            <h4>Instagram</h4>
          </a>
          <a href="https://github.com/CheonGroo" className={styles.Groo}>
            <h4>Github</h4>
          </a>
        </div>
      </main>
    </div>
  )
}
