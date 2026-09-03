"use client";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-slate-900">
      {children}
    </div>
  );
}
