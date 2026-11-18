"use client";

import { useEffect, useMemo, useState } from "react";

const GITHUB_URL = "https://github.com/oogwaysprophecy732/nextjs_hw";

type CounterProps = {
  title: string;
  step: 1 | 2;
};

type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
};

function Counter({ title, step }: CounterProps) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((current) => {
      const next = current + step;
      return next > 10 ? 0 : next;
    });
  }

  return (
    <article className="counter-card">
      <div className="counter-copy">
        <span className="eyebrow">{title}</span>
        <p className="count" aria-live="polite">{count}</p>
      </div>
      <button onClick={increment}>
        +{step}
      </button>
    </article>
  );
}

export function CounterSection() {
  return (
    <section className="section" id="count">
      <div className="section-heading">
        <div><h2>Counter</h2></div>
      </div>
      <div className="counter-grid">
        <Counter title="One at a time" step={1} />
        <Counter title="Two at a time" step={2} />
      </div>
    </section>
  );
}

export function ProjectSection() {
  return (
    <section className="project-note" id="project">
      <div>
        <h2>GitHub link and project idea</h2>
        <p>I am interested in creating a music playing app/ Spotify API. I was also interested in the idea of a longevity calculator. I will likely store the project on a github repository so that all team members can contribute to it locally, then push the changes.</p>
        <p><a href={GITHUB_URL} target="_blank" rel="noreferrer">View the project GitHub repository</a></p>
      </div>
    </section>
  );
}

export function StoreSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://fakestoreapi.com/products", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load products");
        return response.json() as Promise<Product[]>;
      })
      .then((data) => { setProducts(data.slice(0, 20)); setStatus("ready"); })
      .catch((error: unknown) => { if (!(error instanceof Error) || error.name !== "AbortError") setStatus("error"); });
    return () => controller.abort();
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => product.title.toLowerCase().includes(term));
  }, [products, query]);

  return (
    <section className="section store-section" id="store">
      <div className="section-heading">
        <div><h2>Store</h2></div>
      </div>
      <label className="search-wrap">
        <span className="sr-only">Search products by title</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection…" />
        {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
      </label>
      <div className="table-frame">
        <table>
          <thead><tr><th scope="col">Product</th><th scope="col">Details</th><th scope="col">Price</th></tr></thead>
          <tbody>
            {status === "loading" && <tr><td colSpan="3" className="table-message">Gathering the collection…</td></tr>}
            {status === "error" && <tr><td colSpan="3" className="table-message">The collection could not load. Please check your connection and refresh.</td></tr>}
            {status === "ready" && filtered.map((product) => (
              <tr key={product.id}>
                <td><div className="product-image"><img src={product.image} alt="" loading="lazy" /></div></td>
                <td><span className="category">{product.category}</span><span className="product-title">{product.title}</span></td>
                <td className="price">${product.price.toFixed(2)}</td>
              </tr>
            ))}
            {status === "ready" && filtered.length === 0 && <tr><td colSpan="3" className="table-message">No products match “{query}”. Try another search.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
