import { Carousel } from "@material-tailwind/react";
 
export function Carousalpage() {
  return (
    <Carousel className="mt-1 h-[400px] w-full  flex items-center">
      <img
        src="https://assets-global.website-files.com/61f29c609f84a86e418fbcfb/650865270475aae5a1a6fbf0_Event%20Management%20Tools.webp"
        alt="image 1"
        className="h-[100%] w-full object-cover rounded-md"
      />
      <img
        src="https://c0.wallpaperflare.com/preview/655/465/293/meeting-conference-seminar-event.jpg"
        alt="image 2"
        className="h-[100%] w-full object-cover rounded-md"
      />
      <img
        src="https://tweakyourbiz.com/wp-content/uploads/2022/05/Event-Management-softwaresuggest.com_.png"
        alt="image 3"
        className="h-[100%] w-full object-cover rounded-md "
      />
    </Carousel>
  );
}