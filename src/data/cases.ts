// Educational vignettes - paraphrased, fictional. NOT real patients.
export interface CaseScenario {
  id: string;
  title: string;
  vignette: string;
  options: { id: string; label: string; correct?: boolean }[];
  explanation: string;
  disorderId?: string;
}

export const CASES: CaseScenario[] = [
  {
    id: 'c1',
    title: 'Persistent low mood, 3 weeks',
    vignette:
      'A 28-year-old reports 3 weeks of low mood, loss of interest in hobbies, fatigue, hypersomnia, feelings of worthlessness, and impaired concentration affecting work. No history of mania or psychosis. No substance use.',
    options: [
      { id: 'a', label: 'Major Depressive Disorder', correct: true },
      { id: 'b', label: 'Bipolar I Disorder' },
      { id: 'c', label: 'Adjustment Disorder' },
      { id: 'd', label: 'Persistent Depressive Disorder (Dysthymia)' },
    ],
    explanation:
      '5+ depressive symptoms for ≥2 weeks with functional impairment and no manic/hypomanic history points to MDD. PDD requires ≥2 years of symptoms; adjustment disorder needs an identifiable stressor and fewer criteria.',
    disorderId: 'mdd',
  },
  {
    id: 'c2',
    title: 'Sudden surges of fear',
    vignette:
      'A 34-year-old describes recurrent unexpected episodes of palpitations, chest tightness, dizziness, and fear of dying, peaking within minutes. Now avoids driving alone for fear of another episode.',
    options: [
      { id: 'a', label: 'Generalized Anxiety Disorder' },
      { id: 'b', label: 'Panic Disorder', correct: true },
      { id: 'c', label: 'Specific Phobia' },
      { id: 'd', label: 'Social Anxiety Disorder' },
    ],
    explanation:
      'Recurrent unexpected panic attacks plus persistent worry about future attacks and behavioral change is characteristic of Panic Disorder. GAD involves chronic worry across domains rather than discrete attacks.',
    disorderId: 'panic',
  },
  {
    id: 'c3',
    title: 'Re-experiencing after assault',
    vignette:
      'A 22-year-old, 2 months after a serious assault, reports intrusive memories, nightmares, hypervigilance, exaggerated startle, and avoidance of locations resembling the event.',
    options: [
      { id: 'a', label: 'Acute Stress Disorder' },
      { id: 'b', label: 'PTSD', correct: true },
      { id: 'c', label: 'Adjustment Disorder' },
      { id: 'd', label: 'Specific Phobia' },
    ],
    explanation:
      'Symptoms beyond 1 month with intrusion, avoidance, negative cognitions/mood, and hyperarousal after a Criterion-A event support PTSD. Acute Stress Disorder is diagnosed within the first month.',
    disorderId: 'ptsd',
  },
  {
    id: 'c4',
    title: 'Repetitive checking',
    vignette:
      'A 19-year-old describes intrusive thoughts that the stove is on, leading to repeated checking up to 30 times before leaving home. They recognize the thoughts as excessive but feel unable to stop.',
    options: [
      { id: 'a', label: 'Generalized Anxiety Disorder' },
      { id: 'b', label: 'OCD', correct: true },
      { id: 'c', label: 'Specific Phobia' },
      { id: 'd', label: 'Schizophrenia' },
    ],
    explanation:
      'Ego-dystonic intrusive thoughts paired with ritualized behaviors performed to neutralize anxiety is hallmark OCD. GAD lacks discrete obsessions/compulsions.',
    disorderId: 'ocd',
  },
  {
    id: 'c5',
    title: 'Elevated mood, decreased need for sleep',
    vignette:
      'A 25-year-old presents with one week of elevated mood, grandiosity, decreased need for sleep (3h), pressured speech, and impulsive spending. No psychotic features. Hospitalization not required.',
    options: [
      { id: 'a', label: 'Bipolar II Disorder' },
      { id: 'b', label: 'Bipolar I Disorder', correct: true },
      { id: 'c', label: 'Cyclothymia' },
      { id: 'd', label: 'Major Depressive Disorder' },
    ],
    explanation:
      'A full manic episode (≥1 week, marked impairment or hospitalization eligible) defines Bipolar I. Bipolar II requires hypomania + MDE without a full manic episode.',
    disorderId: 'bipolar1',
  },
];
