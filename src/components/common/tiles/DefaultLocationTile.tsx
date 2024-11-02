import BaseTile from "./BaseTile";

function DefaultLocationTile() {
  return (
    <BaseTile className="flex justify-between hover:bg-[#e3f7fabb]">
      <h3 className="text-2xl">Location</h3>
      <span className="text-xl text-[#b21002]">20°C</span>
    </BaseTile>
  );
}

export default DefaultLocationTile;
