import ChatBot from "../../components/chat/ChatBot";

const ChatFeature = () => (
  <section className="mx-auto h-full w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex h-full min-h-[32rem] flex-col">
      <ChatBot />
    </div>
  </section>
);

export default ChatFeature;
