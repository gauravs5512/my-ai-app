type BulletListProps = {
  items: string[];
};

const BulletList = ({ items }: BulletListProps) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default BulletList;
