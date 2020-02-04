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
      <div className="flex">
        <p className="font-sans text-4xl">{sampleFloss.brand}</p>
        <p>{sampleFloss.color}</p>
        <div
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: `rgb(${sampleFloss.r}, ${sampleFloss.g}, ${
              sampleFloss.b
            })`
          }}
        />
      </div>
    </div>
  );
};
