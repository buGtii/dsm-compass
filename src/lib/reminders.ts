// Local push reminders for study sessions. Uses Capacitor on native, no-ops on web.
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const LS_KEY = 'psychref:reminders';

export interface ReminderSettings {
  enabled: boolean;
  hour: number;   // 0-23
  minute: number; // 0-59
}

export function loadReminderSettings(): ReminderSettings {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { enabled: false, hour: 20, minute: 0 };
}

export function saveReminderSettings(s: ReminderSettings) {
  localStorage.setItem(LS_KEY, JSON.stringify(s));
}

export async function ensurePermission(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) return false;
  try {
    const cur = await LocalNotifications.checkPermissions();
    if (cur.display === 'granted') return true;
    const req = await LocalNotifications.requestPermissions();
    return req.display === 'granted';
  } catch {
    return false;
  }
}

const NOTIFICATION_ID = 9921;

export async function scheduleDailyReminder(s: ReminderSettings) {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await LocalNotifications.cancel({ notifications: [{ id: NOTIFICATION_ID }] });
    if (!s.enabled) return;

    await LocalNotifications.schedule({
      notifications: [
        {
          id: NOTIFICATION_ID,
          title: 'Time to study 🧠',
          body: 'A few flashcards a day keeps the DSM in your head.',
          schedule: {
            on: { hour: s.hour, minute: s.minute },
            allowWhileIdle: true,
            repeats: true,
          },
          smallIcon: 'ic_stat_icon_config_sample',
        },
      ],
    });
  } catch (e) {
    console.warn('reminder schedule failed', e);
  }
}

export async function cancelReminder() {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await LocalNotifications.cancel({ notifications: [{ id: NOTIFICATION_ID }] });
  } catch {}
}
