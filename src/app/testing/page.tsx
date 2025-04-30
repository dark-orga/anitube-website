import { AnimeCard } from '@/components/Shared/AnimeCard'
import { data } from '@/components/Shared/AnimeCard/data'

const TestingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AnimeCard
        img={data[0].image}
        title={data[0].title}
        malScore={data[0].MALScore}
        description={data[0].description}
        aired={data[0].Aired}
        status={data[0].Status}
        genres={data[0].Genres}
      />
    </div>
  )
}

export default TestingPage
