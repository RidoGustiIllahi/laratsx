import { Button } from "../ui/button";
import { Link } from "@inertiajs/react";
import { HeroCards } from "./HeroCards";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container relative mx-auto max-w-7xl overflow-x-hidden px-4">
      <div className="grid items-center gap-16 py-20 md:py-32 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6 text-center lg:text-start">
          <main className="text-5xl font-bold md:text-6xl">
            <h1 className="inline">
              Streamline Your{" "}
              <span className="inline bg-gradient-to-r from-primary via-primary to-primary-dark bg-clip-text text-transparent">
                Project Overflow
              </span>
            </h1>
          </main>

          <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
            TaskFlow helps teams organize, track, and manage projects in one 
            collaborative workspace. Boost productivity and deliver projects on time.

          </p>

          <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-4 lg:justify-start">
            <Link href={route("register")}>
              <Button size="lg" className="w-full md:w-auto">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-start">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};
