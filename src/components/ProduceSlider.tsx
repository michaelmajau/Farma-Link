const ProduceSlider = () => {
  const sliders = [
  "Fresh Tomatoes",
  "Eggs",
  "Fresh Flowers",
  "Grains",
  "Bananas",
  "Coffee",
  "Avocados",
  "Potatoes",
  "Maize",
  "Honey",
  "Onions",
  "Carrots",
];

  return (
    <section className="overflow-hidden bg-[#182008] py-2">
      
      <div className="marquee-track">

        {/* COPY 1 */}
        <div className="marquee-group">
          {sliders.map((slider) => (
            <div
              key={`first-${slider}`}
              className="flex shrink-0 items-center gap-8 pr-10 whitespace-nowrap"
            >
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-400/70">
                {slider}
              </span>

              <span className="text-amber-400">
                •
              </span>
            </div>
          ))}
        </div>

        {/* COPY 2 */}
        <div className="marquee-group">
          {sliders.map((slider) => (
            <div
              key={`second-${slider}`}
              className="flex shrink-0 items-center gap-8 pr-10 whitespace-nowrap"
            >
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-400/70">
                {slider}
              </span>

              <span className="text-amber-400">
                •
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProduceSlider;