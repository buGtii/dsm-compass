import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Home, Search, LayoutGrid, Settings, Sparkles, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/symptom', label: 'AI', icon: Sparkles },
  { to: '/categories', label: 'Browse', icon: LayoutGrid },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function AppShell() {
  const loc = useLocation();
  const onDetail = loc.pathname.startsWith('/disorder/');
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pb-24 safe-top">
        <Outlet />
      </main>
      {!onDetail && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/90 backdrop-blur-xl safe-bottom">
          <div className="mx-auto max-w-2xl grid grid-cols-5">
            {tabs.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div className={cn('relative flex items-center justify-center')}>
                      {isActive && (
                        <span className="absolute inset-0 -m-2 rounded-full bg-primary-soft" />
                      )}
                      <Icon className="relative h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
      <Disclaimer />
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="hidden">
      <Stethoscope />
    </div>
  );
}
