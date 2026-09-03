"use client";

interface VpnGuardProps {
  children: React.ReactNode;
}

/**
 * VpnGuard - Clean pass-through container.
 * Full accessibility and uninterrupted access for students,
 * Google AdSense audit crawlers, and search engine indexers.
 */
export function VpnGuard({ children }: VpnGuardProps) {
  return <>{children}</>;
}
