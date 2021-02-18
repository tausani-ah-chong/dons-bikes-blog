import Link from 'next/link'

function Home () {
  return (
    <>
      <h1>Don's Bikes</h1>
      <h3>
        <Link href='/bikes/road-bike'>
          <a>Road Bike</a>
        </Link>
      </h3>
    </>
  )
}

export default Home
