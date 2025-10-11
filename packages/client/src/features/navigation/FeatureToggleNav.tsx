import { cn } from "../../lib/utils";

export type FeatureNavItem<Key extends string> = {
  key: Key;
  label: string;
  description?: string;
};

type FeatureToggleNavProps<Key extends string> = {
  items: FeatureNavItem<Key>[];
  activeKey: Key;
  onSelect: (key: Key) => void;
};

const FeatureToggleNav = <Key extends string>({
  items,
  activeKey,
  onSelect,
}: FeatureToggleNavProps<Key>) => {
  return (
    <nav
      aria-label="Primary views"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {items.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onSelect(key)}
          aria-pressed={activeKey === key}
          className={cn(
            "rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
            activeKey === key
              ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15"
              : "bg-white text-slate-600 hover:bg-slate-100",
          )}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default FeatureToggleNav;
