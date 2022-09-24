import { TailSpin } from "react-loader-spinner";
const CreatingLoader = () => {
  return (
    <div className="w-[100%] h-[300px] flex flex-col justify-center items-center gap-6">
      <TailSpin color="#009fbd" width={40} height={40} />
      <span className="text-xl font-bold antialiased tracking-tight">
        Creating event...
      </span>
    </div>
  );
};

export default CreatingLoader;
