interface ItemProps {
  item: string;
}

export const Item = ({ item }: ItemProps) => {
  return (
    <div className="flex items-center gap-2 m-2">
      <input type="checkbox" className="w-6 h-6 cursor-pointer rounded accent-[#0C2A75]" />
      <span className="text-zinc-600 text-base font-normal font-['Jost'] leading-normal">{item}</span>
    </div>
  );
}