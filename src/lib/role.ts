import { useEffect, useState } from 'react';

export type Role = 'student' | 'clinician' | 'researcher' | 'patient';

export const ROLE_META: Record<Role, { label: string; tagline: string; emoji: string }> = {
  student: { label: 'Student', tagline: 'Learn DSM with quizzes & cases', emoji: '🎓' },
  clinician: { label: 'Clinician', tagline: 'Decision support & checklists', emoji: '🩺' },
  researcher: { label: 'Researcher', tagline: 'Data, filters & export', emoji: '🔬' },
  patient: { label: 'General user', tagline: 'Plain-language guides', emoji: '🌿' },
};

const KEY = 'psychref:role';

export function getRole(): Role {
  const v = (typeof window !== 'undefined' && localStorage.getItem(KEY)) as Role | null;
  return v && v in ROLE_META ? v : 'student';
}
export function setRole(role: Role) {
  localStorage.setItem(KEY, role);
  window.dispatchEvent(new Event('psychref:role'));
}

export function useRole(): [Role, (r: Role) => void] {
  const [r, setR] = useState<Role>(() => getRole());
  useEffect(() => {
    const h = () => setR(getRole());
    window.addEventListener('psychref:role', h);
    window.addEventListener('storage', h);
    return () => {
      window.removeEventListener('psychref:role', h);
      window.removeEventListener('storage', h);
    };
  }, []);
  return [r, (next) => { setRole(next); setR(next); }];
}
