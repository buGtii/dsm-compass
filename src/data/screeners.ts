// Validated screening instruments (public-domain). Educational use only.
export interface Screener {
  id: 'phq9' | 'gad7' | 'pcl5' | 'audit';
  name: string;
  fullName: string;
  description: string;
  prompt: string;
  options: { label: string; value: number }[];
  questions: string[];
  bands: { max: number; label: string; tone: 'good' | 'mild' | 'moderate' | 'severe' }[];
  followUp?: string;
}

const freq4 = [
  { label: 'Not at all', value: 0 },
  { label: 'Several days', value: 1 },
  { label: 'More than half the days', value: 2 },
  { label: 'Nearly every day', value: 3 },
];

const pcl5opts = [
  { label: 'Not at all', value: 0 },
  { label: 'A little bit', value: 1 },
  { label: 'Moderately', value: 2 },
  { label: 'Quite a bit', value: 3 },
  { label: 'Extremely', value: 4 },
];

export const SCREENERS: Screener[] = [
  {
    id: 'phq9',
    name: 'PHQ-9',
    fullName: 'Patient Health Questionnaire (Depression)',
    description: 'Screens severity of depressive symptoms over the last 2 weeks.',
    prompt: 'Over the last 2 weeks, how often have you been bothered by:',
    options: freq4,
    questions: [
      'Little interest or pleasure in doing things',
      'Feeling down, depressed, or hopeless',
      'Trouble falling/staying asleep, or sleeping too much',
      'Feeling tired or having little energy',
      'Poor appetite or overeating',
      'Feeling bad about yourself or that you are a failure',
      'Trouble concentrating on things',
      'Moving or speaking slowly, or being fidgety/restless',
      'Thoughts you would be better off dead or hurting yourself',
    ],
    bands: [
      { max: 4, label: 'Minimal', tone: 'good' },
      { max: 9, label: 'Mild', tone: 'mild' },
      { max: 14, label: 'Moderate', tone: 'moderate' },
      { max: 19, label: 'Moderately severe', tone: 'severe' },
      { max: 27, label: 'Severe', tone: 'severe' },
    ],
    followUp: 'Item 9 measures self-harm ideation — any positive answer warrants safety review.',
  },
  {
    id: 'gad7',
    name: 'GAD-7',
    fullName: 'Generalized Anxiety Disorder Scale',
    description: 'Screens severity of generalized anxiety over the last 2 weeks.',
    prompt: 'Over the last 2 weeks, how often have you been bothered by:',
    options: freq4,
    questions: [
      'Feeling nervous, anxious, or on edge',
      'Not being able to stop or control worrying',
      'Worrying too much about different things',
      'Trouble relaxing',
      'Being so restless that it is hard to sit still',
      'Becoming easily annoyed or irritable',
      'Feeling afraid as if something awful might happen',
    ],
    bands: [
      { max: 4, label: 'Minimal', tone: 'good' },
      { max: 9, label: 'Mild', tone: 'mild' },
      { max: 14, label: 'Moderate', tone: 'moderate' },
      { max: 21, label: 'Severe', tone: 'severe' },
    ],
  },
  {
    id: 'pcl5',
    name: 'PCL-5',
    fullName: 'PTSD Checklist for DSM-5',
    description: '20-item self-report measure of PTSD symptoms in the past month.',
    prompt: 'In the past month, how much have you been bothered by:',
    options: pcl5opts,
    questions: [
      'Repeated, disturbing memories of a stressful experience',
      'Repeated, disturbing dreams of the experience',
      'Suddenly feeling or acting as if it were happening again',
      'Feeling very upset when reminded of the experience',
      'Strong physical reactions when reminded',
      'Avoiding memories, thoughts, or feelings about it',
      'Avoiding external reminders',
      'Trouble remembering important parts of the experience',
      'Strong negative beliefs about yourself or the world',
      'Blaming yourself or someone else for the experience',
      'Strong negative feelings (fear, anger, guilt, shame)',
      'Loss of interest in activities you used to enjoy',
      'Feeling distant or cut off from others',
      'Trouble experiencing positive feelings',
      'Irritable, angry, or aggressive behavior',
      'Taking risks or doing things that could cause harm',
      'Being super-alert or watchful',
      'Feeling jumpy or easily startled',
      'Difficulty concentrating',
      'Trouble falling or staying asleep',
    ],
    bands: [
      { max: 30, label: 'Below threshold', tone: 'good' },
      { max: 42, label: 'Probable PTSD', tone: 'moderate' },
      { max: 80, label: 'High PTSD symptoms', tone: 'severe' },
    ],
  },
  {
    id: 'audit',
    name: 'AUDIT-C',
    fullName: 'Alcohol Use Disorders Identification Test',
    description: 'Brief 3-item screen for hazardous drinking.',
    prompt: 'Over the past year:',
    options: [
      { label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 },
    ],
    questions: [
      'How often did you have a drink containing alcohol? (0=never … 4=4+ /week)',
      'How many drinks on a typical day when drinking? (0=1-2 … 4=10+)',
      'How often did you have 6+ drinks on one occasion? (0=never … 4=daily)',
    ],
    bands: [
      { max: 2, label: 'Low risk', tone: 'good' },
      { max: 4, label: 'Possible risk', tone: 'mild' },
      { max: 8, label: 'Hazardous use', tone: 'moderate' },
      { max: 12, label: 'High risk', tone: 'severe' },
    ],
  },
];

export function scoreBand(s: Screener, total: number) {
  for (const b of s.bands) if (total <= b.max) return b;
  return s.bands[s.bands.length - 1];
}
