import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="border-none">
                <CardContent className="relative flex items-center justify-center p-0">
                  <img
                    src="https://img.flawlessfiles.com/_r/1366x768/100/af/1c/af1c058948079aabe09de052cc7b4261/af1c058948079aabe09de052cc7b4261.jpg"
                    alt="logo"
                  />
                  <div className="absolute left-0 top-0 flex h-full w-2/3 bg-gradient-to-r from-black to-transparent opacity-55">
                    <h1 className="text-sm text-white"></h1>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
