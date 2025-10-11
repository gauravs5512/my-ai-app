type TagListProps = {
  items: string[];
};

const TagList = ({ items }: TagListProps) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500"
      >
        {item}
      </span>
    ))}
  </div>
);

export default TagList;
