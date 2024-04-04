import Head from "next/head";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slide";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InfiniteMovingText } from "@/components/ui/infinite-moving-text";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { CardStack } from "@/components/ui/card-stack";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { z } from "zod";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "@/utils/ThemeContext";

export default function Home() {
  const subscribeRef = React.useRef<HTMLDivElement | null>(null);

  const [selectedStack, setSelectedStack] = useState("business");
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // for typewriter effect in hero element
  const words = [
    {
      text: "Your",
    },
    {
      text: "Sustainable",
    },
    {
      text: "Shoe",
    },
    {
      text: "Subscription",
    },
  ];

  // images in hero element
  const images = [
    "/heros/_businessman.jpg",
    "/heros/_happy-couple.jpg",
    "/heros/_happy-run.jpg",
    "/heros/_happy-surf.jpg",
    "/heros/_happy-w-corgi.jpg",
  ];

  const handleJoinNow = () => {
    subscribeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // imagestyles for sticky scroll
  const stickyImagesStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  // content for sticky scroll
  const content = [
    {
      title: "Eco-Friendly Shoes Every Month",
      description:
        "Receive a carefully curated selection of stylish and sustainable footwear right at your doorstep. Our team of fashion experts and sustainability advocates work tirelessly to bring you the latest eco-friendly shoe trends, ensuring that each month's delivery is as exciting and on-trend as the last.",
      content: (
        <Image
          src="/sticky-scroll/carbon-footprint.jpg"
          alt="carbon footprint"
          width={200}
          height={200}
          style={stickyImagesStyles}
        />
      ),
    },
    {
      title: "Reduce Your Carbon Footprint",
      description:
        "By subscribing to SoleSavvy, you're making a positive impact on the environment by supporting eco-conscious shoe brands that prioritize sustainability in their materials and manufacturing processes. Each pair of shoes you receive is an investment in a greener future, reducing your carbon footprint one step at a time.",
      content: (
        <Image
          src="/sticky-scroll/eco-shoe.jpg"
          alt="eco shoe"
          width={200}
          height={200}
          style={stickyImagesStyles}
        />
      ),
    },
    {
      title: "Flexible Subscription Plans",
      description:
        "Choose from various subscription plans that cater to your budget and footwear needs. Whether you're a fashion enthusiast or prefer a more casual style, we have options to suit every taste and preference.",
      content: (
        <Image
          src="/sticky-scroll/flexible-shoe.jpg"
          alt="flexibility"
          width={200}
          height={200}
          style={stickyImagesStyles}
        />
      ),
    },
    {
      title: "Hassle-Free Returns and Exchanges",
      description:
        "Return or exchange any shoes that don't fit well or aren't up to your expectations, free of charge. Our customer support team is always available to help you navigate the return process and find a replacement pair that meets your needs.",
      content: (
        <Image
          src="/sticky-scroll/green-delivery.jpg"
          alt="green delivery"
          width={200}
          height={200}
          style={stickyImagesStyles}
        />
      ),
    },
    {
      title: "Supporting a Greener Future",
      description:
        "Join the movement towards a more sustainable fashion industry and make a difference with every step you take. By subscribing to SoleSavvy, you're becoming part of a community dedicated to reducing waste, supporting ethical labor practices, and promoting eco-friendly footwear trends.",
      content: (
        <Image
          src="/sticky-scroll/green-energy.jpg"
          alt="green energy"
          width={200}
          height={200}
          style={stickyImagesStyles}
        />
      ),
    },
  ];

  // cards for business shoe card stack
  const businessShoeCards = [
    {
      id: 0,
      image: "/shoes/business-light-brown.png",
    },
    {
      id: 1,
      image: "/shoes/business-brown-leather.png",
    },
    {
      id: 2,
      image: "/shoes/business-retro.png",
    },
    {
      id: 3,
      image: "/shoes/business-black-leather.png",
    },
  ];

  const runningShoeCards = [
    {
      id: 0,
      image: "/shoes/running-nike-blue.png",
    },
    {
      id: 1,
      image: "/shoes/running-amgyang-hi-running-shoe.png",
    },
    {
      id: 2,
      image: "/shoes/running-nike-pegasus-30.png",
    },
    {
      id: 3,
      image: "/shoes/running-shoe-nike.png",
    },
  ];

  const streetShoeCards = [
    {
      id: 0,
      image: "/shoes/street-adidas-superstars.png",
    },
    {
      id: 1,
      category: "Street Shoes",
      image: "/shoes/street-nike-air-max-sneakers.png",
    },
    {
      id: 2,
      image: "/shoes/street-nike-free.png",
    },
    {
      id: 3,
      image: "/shoes/street-vans.png",
    },
  ];

  const emailSchema = z.string().email();

  React.useEffect(() => {
    const result = emailSchema.safeParse(email);
    setIsValidEmail(result.success);
  }, [email, emailSchema]);

  return (
    <>
      <Head>
        <title>SoleSavvy</title>
        <meta name="SoleSavvy" content="The eco-conscious shoe subscription" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative mb-[60vh] flex min-h-screen snap-y snap-mandatory flex-col items-start justify-start bg-gradient-to-b from-[#C5E2D7] to-[#F4F4BE] shadow-2xl shadow-slate-500 dark:from-[#0C343D] dark:to-[#34495E] dark:shadow-slate-500">
        <ToggleGroup
          type="single"
          variant="outline"
          className="absolute right-2 top-2 z-10"
        >
          <ToggleGroupItem
            value="light"
            className="text-white"
            onClick={toggleTheme}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </ToggleGroupItem>
        </ToggleGroup>
        <ImagesSlider images={images} className="h-[95vh]">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-50 mt-24 flex w-[50%] flex-col items-center justify-center"
          >
            <motion.p className="dark:text-shadow bg-gradient-to-b from-[#7FCDBB] to-[#965D3C] bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-8xl dark:from-[#0F487E] dark:to-[#1ABC9C]">
              SoleSavvy
            </motion.p>
            {/* <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
              Your Sustainable Shoe Subscription Service
            </motion.p> */}
            <TypewriterEffectSmooth
              words={words}
              className="self-start text-start text-xl font-bold text-sky-50 sm:text-xl md:text-3xl lg:text-5xl"
            />
            <button className="relative mx-auto mt-14 flex rounded-full border border-sky-500/20 bg-sky-300/10 px-4 py-2 text-center tracking-widest text-white backdrop-blur-sm">
              <span
                className="flex items-center justify-center font-medium"
                onClick={handleJoinNow}
              >
                JOIN NOW
                <ArrowDownIcon className="mx-auto ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-x-0  -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>

        <div className="relative h-5 w-full snap-start">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-lg" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-lg" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <InfiniteMovingText
          text="👞👟 Why do I need a sustainable shoe subscription? 🥾🩰"
          speed={40000}
        />
        <div className="mb-20 w-full snap-center py-5">
          <StickyScroll content={content} />
        </div>
        {/* card stacks with select logic */}
        {/* <div className="bg-gray-500/50 flex h-auto w-[90%] transform items-center justify-around self-center rounded-xl p-6 shadow-2xl backdrop-blur-[10px]"> */}
        <div className="mb-16 mt-5 flex w-[90%] transform snap-center content-center items-start justify-around self-center rounded-xl bg-slate-400/10 p-6 shadow-2xl backdrop-blur-xl">
          {selectedStack === "business" && (
            <CardStack items={businessShoeCards} offset={15} />
          )}
          {selectedStack === "running" && (
            <CardStack items={runningShoeCards} offset={15} />
          )}
          {selectedStack === "street" && (
            <CardStack items={streetShoeCards} offset={15} />
          )}
          {/* </div> */}
          <div className="flex w-[50%] flex-col flex-wrap justify-evenly pt-10">
            <h1 className="pb-10 text-5xl font-bold dark:text-sky-50">
              Choose your style:
            </h1>
            <div className="flex w-full flex-wrap justify-center gap-10 text-lg font-semibold">
              <button
                className={`dark:border-sky mb-2 transform rounded-md border border-black/[0.1] px-8 py-4 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] dark:text-white ${selectedStack === "business" ? "border-white bg-sky-700 opacity-75" : "bg-gray-50 opacity-50 dark:bg-black"}`}
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.98)")
                }
                onMouseUp={(e) => (e.currentTarget.style.transform = "")}
                onClick={() => setSelectedStack("business")}
              >
                Business
              </button>
              <button
                className={`dark:border-sky mb-2 transform rounded-md border border-black/[0.1] px-8 py-4 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] dark:text-white ${selectedStack === "running" ? "border-white bg-sky-700 opacity-75" : "bg-gray-50 opacity-50 dark:bg-black"}`}
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.98)")
                }
                onMouseUp={(e) => (e.currentTarget.style.transform = "")}
                onClick={() => setSelectedStack("running")}
              >
                Running
              </button>
              <button
                className={`dark:border-sky mb-2 transform rounded-md border border-black/[0.1] px-8 py-4 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] dark:text-white ${selectedStack === "street" ? "border-white bg-sky-700 opacity-75" : "bg-gray-50 opacity-50 dark:bg-black"}`}
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.98)")
                }
                onMouseUp={(e) => (e.currentTarget.style.transform = "")}
                onClick={() => setSelectedStack("street")}
              >
                Street
              </button>
            </div>
            <div
              className="my-16 transform rounded-xl bg-sky-700 bg-opacity-75 px-8 py-4 font-light leading-7 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] dark:text-sky-100"
              ref={subscribeRef}
            >
              {selectedStack === "business"
                ? "At SoleSavvy, our business category is designed for the modern professional who values sustainability without compromising style or comfort. Our eco-friendly business shoes are crafted with premium materials such as recycled leather and natural fabrics, ensuring a polished look for any office setting. Each pair is engineered with advanced technology to provide all-day comfort and support, allowing you to focus on your work rather than your feet. In  addition to being eco- friendly and stylish, our business shoes come in various classic designs that can easily be dressed up or down, ensuring a versatile addition to your wardrobe."
                : selectedStack === "running"
                  ? "Our street category is for those who appreciate fashion and sustainability in equal measures. SoleSavvy's eco-friendly street shoes are a perfect blend of style and substance, allowing you to make a statement while reducing your carbon footprint. Crafted with trendy designs using materials such as recycled denim, vegan leather, and organic cotton, these shoes are not only good for the planet but also add an edge to any outfit. Additionally, they provide comfort and versatility, making them suitable for everyday wear.  Our running shoes undergo rigorous testing by professional runners to ensure they meet the highest standards of performance and durability while maintaining our commitment to sustainability."
                  : selectedStack === "street"
                    ? "Our street category is for those who appreciate fashion and sustainability in equal measures. SoleSavvy's eco-friendly street shoes are a perfect blend of style and substance, allowing you to make a statement while reducing your carbon footprint. Crafted with trendy designs using materials such as recycled denim, vegan leather, and organic cotton, these shoes are not only good for the planet but also add an edge to any outfit. Additionally, they provide comfort and versatility, making them suitable for everyday wear."
                    : "Please select a type of shoes"}
            </div>
          </div>
        </div>
        {/* Subscribe section */}
        <div className="fixed bottom-0 z-[-1] mt-10 flex h-[100vh] w-full items-end bg-sky-200 shadow-inner dark:bg-emerald-700">
          <div className="flex h-[60vh] w-full content-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="py-10 text-5xl font-bold dark:text-sky-50">
                Be the First to Sign Up!
              </h2>
              <p className="mb-8 text-center text-2xl dark:text-sky-50">
                Subscribe to our newsletter and be the first to receive updates,
                exclusive offers, and more.
              </p>
              <div className="flex items-center justify-center">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast(
                      isValidEmail
                        ? "Subscribed with email: " + email
                        : "Please enter a valid E-Mail address!",
                    );
                  }}
                  className="my-16 flex items-center justify-center"
                >
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="h-[50px] w-80 rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="h-[50px] rounded-r-md bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:outline-none dark:text-sky-50"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
