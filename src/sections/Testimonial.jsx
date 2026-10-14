import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body, country, service, stars = 5 }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-72 sm:w-80 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm hover:from-storm hover:to-royal hover-animation flex flex-col justify-between"
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2.5">
            <img
              className="rounded-full bg-white/10 w-9 h-9 object-cover border border-white/10"
              width="36"
              height="36"
              alt={name}
              src={img}
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-semibold text-white leading-tight">
                {name}
              </figcaption>
              <p className="text-xs font-medium text-white/40">{username}</p>
            </div>
          </div>
          <div className="flex text-amber-400 text-xs tracking-tighter" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}
          </div>
        </div>

        <blockquote className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
          &ldquo;{body}&rdquo;
        </blockquote>
      </div>

      {(country || service) && (
        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
          <span>{country && `📍 ${country}`}</span>
          {service && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-lavender">
              {service}
            </span>
          )}
        </div>
      )}
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section className="items-start mt-20 md:mt-32 c-space" id="reviews">
      <div className="flex flex-col gap-2">
        <h2 className="text-heading">Client Feedback</h2>
        <p className="subtext">
          Real reviews and verified feedback from clients across the United States, Singapore, Vietnam, and Bangladesh.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full mt-10 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:28s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:28s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </section>
  );
}
