import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.116759ca50aa4f589d437ea4c37eb954',
  appName: 'PsychRef DSM-5-TR',
  webDir: 'dist',
  server: {
    url: 'https://116759ca-50aa-4f58-9d43-7ea4c37eb954.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  android: {
    backgroundColor: '#0E1A24',
  },
};

export default config;
