import { useRef } from "react";
import Ac from "./parallax/Ac";
import HeatPump from "./parallax/HeatPump";
import Furnace from "./parallax/Furnace";

const HvacParallax = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-[url('/hvac_animation_imgs/bg1.png')] bg-blend-multiply bg-bottom bg-cover bg-no-repeat"
    >
      {/* SECTION 1 */}
      <section className="h-screen snap-start flex items-center justify-center">
        <Ac scrollContainerRef={scrollContainerRef} />
      </section>

      {/* SECTION 2 */}
      <section className="h-screen snap-start flex items-center justify-center">
        <Furnace scrollContainerRef={scrollContainerRef} />
      </section>

      {/* SECTION 3 */}
      <section className="h-screen snap-start flex items-center justify-center">
        <HeatPump scrollContainerRef={scrollContainerRef} />
      </section>
    </div>
  );
};

export default HvacParallax;
