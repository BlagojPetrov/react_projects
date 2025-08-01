import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  if (pending) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Error..</h1>;
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is a top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((dataItem) => (
              <li key={dataItem.key}>{dataItem.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>This is a bottom section</h3>
    </div>
  );
}
