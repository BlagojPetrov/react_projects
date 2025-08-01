import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Use Window Resize</h1>
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
}
