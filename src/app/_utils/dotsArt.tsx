export const generateDotsArt = (cols: number) => {
  const dotsArt = [];
  for (let i = 0; i < cols; ++i) {
    dotsArt.push(
      <div className="flex flex-col gap-y-8" key={i}>
        <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
        <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
        <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
      </div>,
    );
  }
  return dotsArt;
};
