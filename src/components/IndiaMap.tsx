import mangaluruMap from "@/assets/mangaluru.png";

const IndiaMap = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
      <img
        src={mangaluruMap}
        alt="Map of India highlighting Mangaluru in Karnataka"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default IndiaMap;
