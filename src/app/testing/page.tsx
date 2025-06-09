import { AnimeCard } from '@/components/Shared/AnimeCard'
import { data } from '@/components/Shared/AnimeCard/data'

const TestingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AnimeCard
        img={data[0].image}
        title={data[0].title}
      />
    </div>
  )
}

export default TestingPage
