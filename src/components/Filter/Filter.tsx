import { ReactElement, useEffect, useRef, useState } from "react";
import React from "react";
import "./Filter.css";
import { FILTER_ITEMS } from "../../constants/constant";

const Filter = (): ReactElement => {
  const [selected, setSelected] = useState<number>(0);
  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top <= 0) {
          const header = document.querySelector(".navbar-wrapper")!;
          const filterSection = document.querySelector(".filter-wrapper")!;
          header.classList.add("hide-header");
          filterSection.classList.add("filter-sticky");
        }
      },
      {
        root: null,
        threshold: [0, 1],
      }
    );
    observer.observe(filterRef.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={filterRef} className="filter-wrapper">
      <div className="container filter-container">
        <h1 className="filter-heading">Something something</h1>

        <div data-testid="filter-tabs" className="filter-tabs">
          {FILTER_ITEMS.map((textContent, index) => (
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
