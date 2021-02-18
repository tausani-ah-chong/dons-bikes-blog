import Link from 'next/link'

function RoadBike ({ roadBikePic }) {
  return (
    <>
      <h1>Road Bike</h1>
      <div>
        <img src={roadBikePic.download_url} />
      </div>
      <h3>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h3>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://picsum.photos/id/859/info')
  const roadBikePic = await res.json()

  return {
    props: {
      roadBikePic
    }
  }
}

export default RoadBike
