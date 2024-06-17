import Calendar from "@/_component/Calendar";
import MaxWidthContent from "@/_component/MaxWidthContent";
import Popup from "@/_component/Popup";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-24">
      <Popup />

      {/* Hero section */}
      <section>
        <MaxWidthContent className="mt-16 flex flex-col gap-y-12 pl-14 ">
          <h1 className="text-4xl flex tracking-widest absolute top-100 left-100 z-20">
            <span className="-rotate-90 inline-block font-medium text-4xl mb-24 ">
              ROKU
            </span>
            <span className="flex flex-col font-bold -ml-24">
              <span className="text-9xl">ロ</span>
              <span className=" text-9xl">ク</span>
            </span>
            <span className="text-3xl self-end ml-2 tracking-wide ">
              Authentic <br />
              Omakase{" "}
            </span>
          </h1>

          <Button
            className="w-fit z-20 absolute bottom-10 left-1/2 -translate-x-1/2"
            variant={"secondary"}
          >
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
              objectFit: "cover",
              height: "900px",
            }}
            className="w-full"
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
                sizes="100vw"
                className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
              />
            </figure>

            <div className="flex flex-col sm:grid gap-5 grid-cols-3 flex-1">
              <p className="col-span-2">
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
          <div className="flex gap-10 flex-col md:flex-row">
            <figure className="md:order-2 w-full h-full">
              <Image
                height={100}
                width={100}
                src={"/about-chef.jpeg"}
                alt="Chef looking at the sushi closely in their hand"
                sizes="100vw"
                className="h-80 w-80 object-cover md:w-full md:h-full mx-auto"
              />
            </figure>

            <div className="md:basis-56 md:order-1">
              <p className="max-w-prose">
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
                  sizes="100vw"
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
                  sizes="100vw"
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
                  sizes="100vw"
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
                  sizes="100vw"
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
                  sizes="100vw"
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
                  sizes="100vw"
                  className="h-40 w-40 md:h-80 md:w-80"
                />
              </figure>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      <section>
        <MaxWidthContent className="flex flex-col items-center justify-center gap-10 pb-16 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-medium tracking-wide w-52 md:w-fit md:bg-black md:px-8 mx-auto">
              Contact us
            </h2>
          </div>

          <div className="flex gap-8 w-full flex-wrap">
            <Calendar />

            <div className=" flex-grow rounded-2xl overflow-hidden flex-shrink min-h-80 min-w-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.818642660048!2d-123.13691352384802!3d49.260883272298116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c0b8748b43%3A0xd98e978ef37556d!2s1305%20W%2012th%20Ave%2C%20Vancouver%2C%20BC%20V6H%201M2!5e0!3m2!1sen!2sca!4v1718643803441!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-none flex-col gap-6">
              <div>
                <h3 className="border-b">Our Address</h3>
                <address>
                  1305 W 12th Ave,
                  <br />
                  Vancouver, BC V6H 1M2
                </address>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="border-b">Contact Info</h3>
                <a
                  href="tel:+16043188494"
                  aria-label="Call Us at +1 (604) 318-8494"
                >
                  (604)-318-8494
                </a>
                <a
                  href="mailto:sushidelicious@gmail.com"
                  aria-label="Email Us at sushidelicious@gmail.com"
                >
                  sushidelicious@gmail.com
                </a>
              </div>

              <div>
                <h3 className="border-b">Open Hours</h3>
                <p>Mon - Fri: 9am - 10pm</p>
                <p>Sat - Sun: 11am - 10pm</p>
              </div>

              <div className="flex gap-4">
                <Facebook className="h-8 w-8" />
                <Instagram className="h-8 w-8" />
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </main>
  );
}
