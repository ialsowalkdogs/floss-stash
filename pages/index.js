import FlossCard from "../components/FlossCard";

export default () => {
  const sampleFloss = {
    brand: "DMC",
    color: 3713,
    r: 255,
    g: 226,
    b: 226
  };

  return (
    <div className="App">
      <FlossCard {...sampleFloss} />
    </div>
  );
};
