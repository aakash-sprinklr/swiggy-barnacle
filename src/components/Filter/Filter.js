import { useEffect, useRef, useState } from "react";
import "./Filter.css";

const filterItems = [
  "Relevance",
  "Delivery Time",
  "Rating",
  "Cost: Low to High",
  "Cost: High to Low",
];

const Filter = () => {
  const [selected, setSelected] = useState(0);
  const filterRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top <= 0) {
          const header = document.querySelector(".navbar-wrapper");
          const filterSection = document.querySelector(".filter-wrapper");
          header.classList.add("hide-header");
          filterSection.classList.add("filter-sticky");
        }
      },
      {
        root: null,
        threshold: [0, 1],
      }
    );
    observer.observe(filterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={filterRef} className="filter-wrapper">
      <div className="container filter-container">
        <h1 className="filter-heading">Something something</h1>

        <div data-testid="filter-tabs" className="filter-tabs">
          {filterItems.map((textContent, index) => (
            <div
              key={`filter-${index}`}
              className={`filter-tab ${
                selected === index ? "tab-selected" : ""
              }`}
              onClick={() => setSelected(index)}
            >
              {textContent}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
