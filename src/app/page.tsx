import MaxWidthContent from "@/_component/MaxWidthContent";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-24">
      {/* Hero section */}
      <section>
        <MaxWidthContent className="mt-16 flex flex-col gap-y-12 pl-14 ">
          <h1 className="text-4xl flex tracking-widest">
            <span className="-rotate-90 inline-block font-medium">ROKU</span>
            <span className="flex flex-col font-bold  -ml-16">
              <span className="text-6xl">ロ</span>
              <span className=" text-6xl">ク</span>
            </span>
            <span className="text-xl self-end ml-10 tracking-wide ">
              Authentic <br />
              Omakase{" "}
            </span>
          </h1>

          <Button className="w-fit z-20" variant={"secondary"}>
            Book now
          </Button>
        </MaxWidthContent>

        <figure className="w-full -mt-12 -z-20 ">
          <Image
            height={500}
            width={2000}
            src="/hero-image.jpeg"
            alt="long line of sushi"
            sizes="100vw"
            style={{
              objectFit: 'cover'
            }}
            
          />
        </figure>
      </section>

      {/* Ingredient */}
      <section>
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-medium tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
              About Our Ingredients
            </h2>
          </div>
          <div className="flex items-center gap-10 flex-col md:flex-row">
            <figure className="flex-1">
              <Image
                height={100}
                width={100}
                src={"/about-ingredients.jpeg"}
                alt="Closer looks of sushi"
                className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
              />
            </figure>

            <div className="grid gap-5 grid-cols-3 flex-1">
              <p className="col-span-2 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                modi laborum animi quia repellat iste amet eius, alias ipsum
                sequi beatae perspiciatis dignissimos totam tenetur magnam nobis
                molestiae obcaecati mollitia!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, debitis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, autem!
              </p>
              <p className="col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur aliquid aut est vero similique, tempora obcaecati
                molestias quo ullam blanditiis.
              </p>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* About our chefs */}
      <section>
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-medium tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
              About Our Chefs
            </h2>
          </div>
          <div className="flex items-center gap-10 flex-col md:flex-row">
            <figure className="md:order-2 w-full h-full">
              <Image
                height={100}
                width={100}
                src={"/about-chef.jpeg"}
                alt="Chef looking at the sushi closely in their hand"
                className="h-80 w-80 object-cover md:w-full md:h-full"
              />
            </figure>

            <div className="md:basis-56 md:order-1">
              <p >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                modi laborum animi quia repellat iste amet eius, alias ipsum
                sequi beatae perspiciatis dignissimos totam tenetur magnam nobis
                molestiae obcaecati mollitia!
              </p>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Menu */}
      <section>
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-medium tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
              Our Menu
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10">
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 1</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure>
                <Image
                  height={100}
                  width={100}
                  src={"/Capture10.png"}
                  alt="Closer looks of sushi"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 2</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure>
                <Image
                  height={100}
                  width={100}
                  src={"/Capture11.png"}
                  alt="Closer looks of sushi"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 3</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure>
                <Image
                  height={100}
                  width={100}
                  src={"/Capture12.png"}
                  alt="Closer looks of sushi"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 4</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure>
                <Image
                  height={100}
                  width={100}
                  src={"/Capture13.png"}
                  alt="Closer looks of sushi"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 4</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure>
                <Image
                  height={100}
                  width={100}
                  src={"/Capture15.png"}
                  alt="Closer looks of sushi"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 6</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure>
                <Image
                  height={100}
                  width={100}
                  src={"/Capture16.png"}
                  alt="Closer looks of sushi"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </main>
  );
}
