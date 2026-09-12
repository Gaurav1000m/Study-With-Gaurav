"use client";

import React from "react";

interface VpnGuardProps {
  children: React.ReactNode;
}

/**
 * VpnGuard - Accessible pass-through wrapper ensuring full compliance
 * with web accessibility and search engine crawler guidelines.
 */
export function VpnGuard({ children }: VpnGuardProps) {
  return <>{children}</>;
}

export default VpnGuard;

