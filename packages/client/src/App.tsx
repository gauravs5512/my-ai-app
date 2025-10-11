import { useState } from "react";

import ChatFeature from "./features/chat/ChatFeature";
import FeatureToggleNav, {
  type FeatureNavItem,
} from "./features/navigation/FeatureToggleNav";
import ResumeFeature from "./features/resume/ResumeFeature";

type View = "chat" | "resume";

const NAV_ITEMS: FeatureNavItem<View>[] = [
  {
    key: "resume",
    label: "Gaurav's CV",
    description:
      "Review Gaurav Singh’s leadership experience, technical depth, and project portfolio.",
  },
  {
    key: "chat",
    label: "AI Chatbot",
    description:
      "Experiment with the conversational agent that powers financial product discovery.",
  },
];

function App() {
  const [activeView, setActiveView] = useState<View>("resume");
  const activeMeta = NAV_ITEMS.find((item) => item.key === activeView);

  return (
    <div className="min-h-screen w-full bg-slate-50 p-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col gap-8">
        <header className="space-y-4">
          <FeatureToggleNav
            items={NAV_ITEMS}
            activeKey={activeView}
            onSelect={setActiveView}
          />
          {activeMeta?.description && (
            <p className="text-center text-sm text-slate-500">
              {activeMeta.description}
            </p>
          )}
        </header>

        <main className="flex-1">
          {activeView === "chat" ? <ChatFeature /> : <ResumeFeature />}
        </main>
      </div>
    </div>
  );
}

export default App;
