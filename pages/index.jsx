import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from './index.module.css'

function Home () {
  return (
    <div className={styles.container} >
      <Head>
        <title>Don's Bikes</title>
      </Head>
      <div className={styles.center} >
        <div>
          <h1 className={styles.header} >Don's Bikes</h1>
        </div>
        <div>
          <h2>
            <Link href='/'>
              <a>Enter Site</a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home
