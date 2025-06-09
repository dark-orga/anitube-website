import Image from 'next/image'

interface AnimeCardProps {
  img: string
  title: string
}

export const AnimeCard = ({ img, title }: AnimeCardProps) => {
  return (
    <div className="group relative aspect-[281/400] w-[281px] overflow-hidden rounded-lg">
      {/* card image */}
      <Image
        src={img}
        alt={title}
        width={281}
        height={400}
        className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:[transform:rotateX(27deg)]"
      />
      {/* shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 via-30% to-black/0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-20% to-black/0" />
      {/* card content */}
      {/* <div className="absolute left-0 top-full flex h-[90%] w-full flex-col justify-start gap-2 rounded-lg bg-gray-950/50 p-4 transition-all duration-300 group-hover:-translate-y-[105%]">
        <h1 className="font-bold !leading-[1] ~text-base/lg">{title}</h1>
        <div className="flex items-center gap-2">
          <Image
            src={Start}
            alt="Star"
            width={Start.width}
            height={Start.height}
            className="h-fit w-4"
          />
          <span className="~text-sm/lg">{malScore || 'N/A'}</span>
        </div>
        <p className="text-xs leading-[1]">{description.slice(0, 80)}...</p>
        <div className="mt-2 text-xs">
          <b>Aired:</b> {aired}
        </div>
        <div className="text-xs">
          <b>Status:</b> {status}
        </div>
        <div className="text-xs">
          <b>Genres:</b> {genres.join(', ')}
        </div>
        <Button className="mt-auto w-full">Watch Now</Button>
      </div> */}
    </div>
  )
}
