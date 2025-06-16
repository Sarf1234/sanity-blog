const QuarterShape = ({ position }) => {
  const base = "w-[50px] h-[80px] border-4 border-yellow-400";
  const variants = {
    tl: "rounded-tl-[60px]",
    tr: "rounded-tr-[60px]",
    bl: "rounded-bl-[60px]",
    br: "rounded-br-[60px]",
  };

  return <div className={`${base} ${variants[position]} bg-transparent`} />;
};

const PatternGrid = () => {
  const pattern = [
    ["tl", "tr", "tl", "tr", "tl", "tr", "tl", "tr"],
    ["bl", "br", "bl", "br", "bl", "br", "bl", "br"],
  ];

  return (
    <div className="flex flex-col gap-2 p-6 bg-white">
      {pattern.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 justify-center">
          {row.map((pos, i) => (
            <QuarterShape key={i} position={pos} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PatternGrid;
