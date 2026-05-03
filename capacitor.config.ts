import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.116759ca50aa4f589d437ea4c37eb954',
  appName: 'PsychRef DSM-5-TR',
  webDir: 'dist',
  // NOTE: The `server.url` block enables hot-reload from the Lovable sandbox
  // during development. REMOVE or COMMENT OUT this block before producing a
  // production/offline APK so the app loads bundled `dist/` assets and works
  // fully offline.
  server: {
    url: 'https://116759ca-50aa-4f58-9d43-7ea4c37eb954.lovableproject.com?forceHideBadge=true',
    cleartext: true,
    androidScheme: 'https',
  },
  android: {
    backgroundColor: '#0E1A24',
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#0E1A24',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0E1A24',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
};

export default config;
