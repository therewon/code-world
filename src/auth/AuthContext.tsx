import { useCallback, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import type {
  AuthUser,
  LoginInput,
  RegisterInput,
} from "./auth.types";
import { AuthContext } from "./auth-context";

interface StoredAccount extends AuthUser {
  passwordHash: string;
}

const SESSION_KEY = "code-world.auth.session";
const ACCOUNTS_KEY = "code-world.auth.accounts";

function readJson<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeEmail(email: string) {
  return email.trim().toLocaleLowerCase("az");
}

async function hashPassword(password: string) {
  const payload = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", payload);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(() =>
    readJson<AuthUser | null>(SESSION_KEY, null),
  );

  const register = useCallback(async (input: RegisterInput) => {
    const email = normalizeEmail(input.email);
    const accounts = readJson<StoredAccount[]>(ACCOUNTS_KEY, []);

    if (accounts.some((account) => account.email === email)) {
      throw new Error("Bu e-poçt ünvanı ilə artıq hesab yaradılıb.");
    }

    const nextUser: AuthUser = {
      id: crypto.randomUUID(),
      name: input.name.trim(),
      email,
      role: input.role,
    };
    const nextAccount: StoredAccount = {
      ...nextUser,
      passwordHash: await hashPassword(input.password),
    };

    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([...accounts, nextAccount]));
    localStorage.setItem(SESSION_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const login = useCallback(async (input: LoginInput) => {
    const email = normalizeEmail(input.email);
    const passwordHash = await hashPassword(input.password);
    const account = readJson<StoredAccount[]>(ACCOUNTS_KEY, []).find(
      (item) => item.email === email && item.passwordHash === passwordHash,
    );

    if (!account) {
      throw new Error("E-poçt və ya şifrə yanlışdır.");
    }

    const nextUser: AuthUser = {
      id: account.id,
      name: account.name,
      email: account.email,
      role: account.role,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, login, register, logout }),
    [user, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
