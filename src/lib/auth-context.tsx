"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type StoredUser = User & { password: string };

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_KEY = "fitpath_users";
const SESSION_KEY = "fitpath_session";

function getStoredUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch { /* ignore */ }
    setIsLoading(false);
  }, []);

  const signup = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    const users = getStoredUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists." };
    }
    const newUser: StoredUser = {
      id: `user_${Date.now()}`,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      createdAt: new Date().toISOString(),
      password,
    };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    const { password: _p, ...publicUser } = newUser;
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    setUser(publicUser);
    return { success: true };
  };

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    const users = getStoredUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) return { success: false, error: "Invalid email or password." };
    const { password: _p, ...publicUser } = found;
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    setUser(publicUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
