import type { ResumeProfile } from "../Resume.types";

type ProfileHeaderProps = {
  profile: ResumeProfile;
};

const ProfileHeader = ({ profile }: ProfileHeaderProps) => (
  <header className="relative overflow-hidden rounded-t-3xl bg-slate-900 px-10 py-12 text-white">
    <div className="absolute inset-y-0 right-[-20%] h-[160%] w-[55%] rotate-12 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-500 opacity-40 blur-3xl" />
    <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold lg:text-4xl">{profile.name}</h1>
        <p className="text-base text-slate-200 lg:text-lg">{profile.title}</p>
      </div>
      <p className="max-w-xl text-sm text-slate-200 lg:text-base">
        {profile.banner}
      </p>
    </div>
  </header>
);

export default ProfileHeader;
