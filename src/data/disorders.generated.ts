// AUTO-GENERATED paraphrased educational dataset (NOT verbatim DSM-5-TR text).
import type { Disorder } from './disorders';

export const EXTRA_DISORDERS: Disorder[] = 
[
  {
    "id": "mdd",
    "name": "Major Depressive Disorder",
    "category": "mood",
    "overviewSimple": "A condition where a person feels deeply sad, empty, or unable to enjoy life for at least two weeks, affecting daily functioning.",
    "overviewClinical": "One or more major depressive episodes — at least 2 weeks of depressed mood or anhedonia plus additional cognitive, neurovegetative, and somatic symptoms causing significant distress or impairment.",
    "criteriaSummary": [
      "Five or more depressive symptoms during the same 2-week period.",
      "At least one symptom is depressed mood or loss of interest/pleasure.",
      "Symptoms cause clinically significant distress or impairment.",
      "Not attributable to a substance or other medical condition.",
      "Episode is not better explained by a psychotic disorder."
    ],
    "keywords": [
      "depression",
      "sad",
      "sadness",
      "hopeless",
      "empty",
      "no energy",
      "anhedonia",
      "cant enjoy",
      "crying",
      "mdd",
      "low mood",
      "tired all the time"
    ],
    "shortName": "MDD",
    "icd10": "F32 / F33",
    "prevalence": "~7% adults / year",
    "onsetTypical": "Late teens to mid-20s",
    "symptoms": {
      "emotional": [
        "Persistent sadness",
        "Hopelessness",
        "Anhedonia",
        "Excessive guilt",
        "Worthlessness"
      ],
      "cognitive": [
        "Difficulty concentrating",
        "Indecisiveness",
        "Recurrent thoughts of death"
      ],
      "behavioral": [
        "Social withdrawal",
        "Reduced productivity",
        "Psychomotor slowing or agitation"
      ],
      "physical": [
        "Sleep disturbance",
        "Fatigue",
        "Appetite or weight changes"
      ]
    },
    "severity": {
      "mild": "Few symptoms beyond required, minor functional impairment.",
      "moderate": "Symptoms or impairment between mild and severe.",
      "severe": "Most symptoms present; markedly interferes with functioning."
    },
    "riskFactors": {
      "biological": [
        "Family history",
        "Neurochemical imbalances",
        "Female sex (post-puberty)"
      ],
      "environmental": [
        "Adverse childhood experiences",
        "Recent loss",
        "Chronic illness"
      ],
      "social": [
        "Isolation",
        "Low social support",
        "Socioeconomic stress"
      ]
    },
    "comorbidities": [
      "Anxiety disorders",
      "Substance use disorders",
      "Chronic pain"
    ],
    "differentials": [
      "Persistent Depressive Disorder",
      "Bipolar Depression",
      "Adjustment Disorder",
      "Bereavement"
    ],
    "treatments": {
      "therapies": [
        "Cognitive Behavioral Therapy (CBT)",
        "Behavioral Activation",
        "Interpersonal Therapy"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs",
        "Atypical antidepressants"
      ],
      "lifestyle": [
        "Regular aerobic exercise",
        "Sleep hygiene",
        "Social connection"
      ]
    },
    "warnings": [
      "Suicidal ideation requires urgent professional evaluation."
    ],
    "relatedIds": [
      "pdd",
      "bd1",
      "gad"
    ]
  },
  {
    "id": "pdd",
    "name": "Persistent Depressive Disorder",
    "category": "mood",
    "overviewSimple": "A long-lasting (2+ years) low-grade depression where a person rarely feels truly happy.",
    "overviewClinical": "Chronic depressed mood for most of the day, more days than not, for at least 2 years (1 year in youth), with associated symptoms.",
    "criteriaSummary": [
      "Depressed mood for at least 2 years.",
      "Two or more associated symptoms (appetite, sleep, energy, esteem, concentration, hopelessness).",
      "Never symptom-free for more than 2 months at a time.",
      "Significant distress or impairment."
    ],
    "keywords": [
      "dysthymia",
      "persistent depression",
      "always sad",
      "chronic sadness",
      "low mood years"
    ],
    "shortName": "PDD (Dysthymia)",
    "icd10": "F34.1",
    "prevalence": "~1.5% adults",
    "onsetTypical": "Childhood to early adulthood",
    "symptoms": {
      "emotional": [
        "Chronic low mood",
        "Pessimism",
        "Low self-esteem"
      ],
      "cognitive": [
        "Poor concentration",
        "Indecisiveness"
      ],
      "physical": [
        "Low energy",
        "Sleep issues",
        "Appetite changes"
      ]
    },
    "riskFactors": {
      "biological": [
        "Family history of mood disorders"
      ],
      "environmental": [
        "Chronic stress",
        "Early adversity"
      ]
    },
    "comorbidities": [
      "MDD ('double depression')",
      "Anxiety",
      "Substance use"
    ],
    "differentials": [
      "MDD",
      "Cyclothymia",
      "Adjustment Disorder"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Interpersonal Therapy"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs"
      ],
      "lifestyle": [
        "Routine",
        "Exercise"
      ]
    },
    "relatedIds": [
      "mdd",
      "cyclothymia"
    ]
  },
  {
    "id": "bd1",
    "name": "Bipolar I Disorder",
    "category": "mood",
    "overviewSimple": "Episodes of very high energy and mood (mania) that often alternate with periods of depression.",
    "overviewClinical": "At least one manic episode (≥1 week or any duration if hospitalization required), often with depressive episodes.",
    "criteriaSummary": [
      "Distinct period of abnormally elevated, expansive, or irritable mood and increased activity/energy.",
      "Three or more manic symptoms (four if mood only irritable).",
      "Marked impairment, hospitalization, or psychotic features.",
      "Not attributable to substances or another medical condition."
    ],
    "keywords": [
      "bipolar",
      "mania",
      "manic",
      "high low",
      "mood swings",
      "euphoric",
      "grandiose"
    ],
    "shortName": "BD-I",
    "icd10": "F31",
    "prevalence": "~0.6% lifetime",
    "onsetTypical": "Late teens to mid-20s",
    "symptoms": {
      "emotional": [
        "Euphoria",
        "Irritability",
        "Grandiosity"
      ],
      "cognitive": [
        "Racing thoughts",
        "Distractibility",
        "Inflated self-esteem"
      ],
      "behavioral": [
        "Decreased need for sleep",
        "Pressured speech",
        "Risk-taking",
        "Goal-directed hyperactivity"
      ]
    },
    "severity": {
      "mild": "Minimum criteria met; manageable disruption.",
      "moderate": "Significant interference.",
      "severe": "Continuous supervision; psychotic features may be present."
    },
    "riskFactors": {
      "biological": [
        "Strong heritability"
      ],
      "environmental": [
        "Sleep disruption",
        "Substance use",
        "Stress"
      ]
    },
    "comorbidities": [
      "Anxiety disorders",
      "Substance use",
      "ADHD"
    ],
    "differentials": [
      "Bipolar II",
      "Schizoaffective Disorder",
      "Substance-induced mood",
      "ADHD"
    ],
    "treatments": {
      "therapies": [
        "Psychoeducation",
        "CBT",
        "Family-focused therapy"
      ],
      "medicationClasses": [
        "Lithium",
        "Anticonvulsants",
        "Atypical antipsychotics"
      ],
      "lifestyle": [
        "Regular sleep",
        "Mood tracking",
        "Avoid stimulants"
      ]
    },
    "warnings": [
      "Acute mania may require hospitalization.",
      "Suicide risk is elevated."
    ],
    "relatedIds": [
      "bd2",
      "cyclothymia",
      "mdd"
    ]
  },
  {
    "id": "bd2",
    "name": "Bipolar II Disorder",
    "category": "mood",
    "overviewSimple": "Periods of depression that alternate with milder highs (hypomania) — never full mania.",
    "overviewClinical": "At least one hypomanic episode (≥4 days) and at least one major depressive episode; no manic episodes.",
    "criteriaSummary": [
      "History of one or more hypomanic episodes.",
      "History of one or more major depressive episodes.",
      "Never had a manic episode.",
      "Symptoms cause distress or impairment."
    ],
    "keywords": [
      "bipolar 2",
      "hypomania",
      "mood swings"
    ],
    "shortName": "BD-II",
    "icd10": "F31.81",
    "prevalence": "~0.8% lifetime",
    "onsetTypical": "Mid-20s",
    "symptoms": {
      "emotional": [
        "Hypomanic elation",
        "Depressive lows"
      ],
      "cognitive": [
        "Racing thoughts in highs",
        "Cognitive slowing in lows"
      ],
      "behavioral": [
        "Increased activity in highs",
        "Withdrawal in lows"
      ]
    },
    "riskFactors": {
      "biological": [
        "Family history"
      ],
      "environmental": [
        "Sleep disruption",
        "Stress"
      ]
    },
    "comorbidities": [
      "Anxiety",
      "Substance use"
    ],
    "differentials": [
      "BD-I",
      "MDD",
      "Cyclothymia",
      "Borderline PD"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "IPSRT"
      ],
      "medicationClasses": [
        "Mood stabilizers",
        "Atypical antipsychotics"
      ],
      "lifestyle": [
        "Sleep regularity",
        "Mood tracking"
      ]
    },
    "relatedIds": [
      "bd1",
      "cyclothymia",
      "mdd"
    ]
  },
  {
    "id": "cyclothymia",
    "name": "Cyclothymic Disorder",
    "category": "mood",
    "overviewSimple": "Frequent mood ups and downs lasting 2+ years that are milder than full bipolar episodes.",
    "overviewClinical": "Numerous periods of hypomanic and depressive symptoms not meeting full criteria for episodes, present for ≥2 years.",
    "criteriaSummary": [
      "Hypomanic and depressive symptoms for ≥2 years (1 year in youth).",
      "Symptoms present at least half the time, no symptom-free period >2 months.",
      "No manic, hypomanic, or major depressive episode.",
      "Significant distress or impairment."
    ],
    "keywords": [
      "cyclothymia",
      "mood instability",
      "mild bipolar"
    ],
    "icd10": "F34.0",
    "prevalence": "~0.4–1% lifetime",
    "onsetTypical": "Adolescence to early adulthood",
    "symptoms": {
      "emotional": [
        "Mild euphoria",
        "Mild depression"
      ],
      "behavioral": [
        "Energy fluctuations"
      ]
    },
    "differentials": [
      "Bipolar I/II",
      "Borderline PD",
      "Substance-induced"
    ],
    "treatments": {
      "therapies": [
        "Psychoeducation",
        "CBT"
      ],
      "medicationClasses": [
        "Mood stabilizers (selective)"
      ],
      "lifestyle": [
        "Sleep",
        "Routine"
      ]
    },
    "relatedIds": [
      "bd1",
      "bd2"
    ]
  },
  {
    "id": "dmdd",
    "name": "Disruptive Mood Dysregulation Disorder",
    "category": "mood",
    "overviewSimple": "A childhood condition with frequent severe outbursts and constant irritability.",
    "overviewClinical": "Severe recurrent temper outbursts grossly out of proportion in intensity or duration, with chronically irritable mood between outbursts; onset before age 10.",
    "criteriaSummary": [
      "Severe verbal or behavioral outbursts ≥3 times per week.",
      "Persistently irritable or angry mood between outbursts.",
      "Symptoms ≥12 months in ≥2 settings.",
      "Diagnosis between ages 6 and 18."
    ],
    "keywords": [
      "dmdd",
      "child anger",
      "tantrums",
      "irritable child",
      "outbursts"
    ],
    "shortName": "DMDD",
    "icd10": "F34.81",
    "prevalence": "2–5% children",
    "onsetTypical": "Before age 10",
    "symptoms": {
      "emotional": [
        "Chronic irritability",
        "Anger"
      ],
      "behavioral": [
        "Tantrums",
        "Aggression"
      ]
    },
    "differentials": [
      "Oppositional Defiant Disorder",
      "Bipolar",
      "Intermittent Explosive Disorder",
      "ADHD"
    ],
    "treatments": {
      "therapies": [
        "Parent training",
        "CBT"
      ],
      "medicationClasses": [
        "Stimulants",
        "SSRIs (selective)"
      ],
      "lifestyle": [
        "Structured routines"
      ]
    },
    "relatedIds": [
      "odd",
      "adhd"
    ]
  },
  {
    "id": "pmdd",
    "name": "Premenstrual Dysphoric Disorder",
    "category": "mood",
    "overviewSimple": "Severe mood and physical symptoms in the week before menstruation that disrupt life.",
    "overviewClinical": "In the majority of cycles, distinct mood and physical symptoms present in the week before menses, improving within days after onset.",
    "criteriaSummary": [
      "≥5 symptoms in the final week before menses.",
      "≥1 affective symptom (mood lability, irritability, depressed mood, anxiety).",
      "Symptoms cause marked impairment.",
      "Confirmed by prospective ratings over ≥2 cycles."
    ],
    "keywords": [
      "pmdd",
      "pms",
      "premenstrual",
      "period mood"
    ],
    "shortName": "PMDD",
    "icd10": "N94.3",
    "prevalence": "~1.8–5.8% menstruating women",
    "onsetTypical": "Reproductive years",
    "symptoms": {
      "emotional": [
        "Mood lability",
        "Irritability",
        "Hopelessness",
        "Anxiety"
      ],
      "physical": [
        "Breast tenderness",
        "Bloating",
        "Joint pain",
        "Fatigue"
      ]
    },
    "differentials": [
      "MDD",
      "PMS",
      "Thyroid dysfunction"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Lifestyle changes"
      ],
      "medicationClasses": [
        "SSRIs (continuous or luteal)",
        "Combined oral contraceptives"
      ],
      "lifestyle": [
        "Exercise",
        "Sleep",
        "Reduce caffeine"
      ]
    },
    "relatedIds": [
      "mdd",
      "gad"
    ]
  },
  {
    "id": "gad",
    "name": "Generalized Anxiety Disorder",
    "category": "anxiety",
    "overviewSimple": "Constant, hard-to-control worry about many everyday things, lasting 6+ months.",
    "overviewClinical": "Excessive anxiety and worry occurring more days than not for at least 6 months about a number of events or activities, with associated somatic and cognitive symptoms.",
    "criteriaSummary": [
      "Excessive worry on most days for ≥6 months.",
      "Difficult to control the worry.",
      "≥3 of: restlessness, fatigue, concentration issues, irritability, muscle tension, sleep disturbance.",
      "Significant distress or impairment.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "worry",
      "anxious",
      "nervous",
      "gad",
      "always worried",
      "cant relax",
      "tense"
    ],
    "shortName": "GAD",
    "icd10": "F41.1",
    "prevalence": "~3% adults / year",
    "onsetTypical": "Median age 30",
    "symptoms": {
      "emotional": [
        "Apprehension",
        "On-edge feeling"
      ],
      "cognitive": [
        "Worry loops",
        "Concentration difficulty"
      ],
      "physical": [
        "Muscle tension",
        "Fatigue",
        "Sleep problems",
        "GI upset"
      ]
    },
    "differentials": [
      "Panic Disorder",
      "Social Anxiety",
      "OCD",
      "MDD",
      "Hyperthyroidism"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Acceptance & Commitment Therapy",
        "Mindfulness"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs",
        "Buspirone"
      ],
      "lifestyle": [
        "Reduce caffeine",
        "Exercise",
        "Sleep hygiene"
      ]
    },
    "relatedIds": [
      "panic",
      "sad",
      "mdd"
    ]
  },
  {
    "id": "panic",
    "name": "Panic Disorder",
    "category": "anxiety",
    "overviewSimple": "Sudden, intense fear attacks with body symptoms, plus worry about more attacks.",
    "overviewClinical": "Recurrent unexpected panic attacks plus ≥1 month of worry about additional attacks or maladaptive change in behavior.",
    "criteriaSummary": [
      "Recurrent unexpected panic attacks.",
      "≥1 attack followed by ≥1 month of persistent concern or behavioral change.",
      "Not attributable to a substance or medical condition.",
      "Not better explained by another mental disorder."
    ],
    "keywords": [
      "panic",
      "panic attack",
      "heart racing",
      "cant breathe",
      "chest tight",
      "sudden fear"
    ],
    "icd10": "F41.0",
    "prevalence": "~2–3% adults / year",
    "onsetTypical": "Late adolescence to mid-30s",
    "symptoms": {
      "physical": [
        "Heart palpitations",
        "Chest pain",
        "Shortness of breath",
        "Trembling",
        "Dizziness",
        "Sweating"
      ],
      "cognitive": [
        "Fear of losing control",
        "Fear of dying",
        "Derealization"
      ]
    },
    "differentials": [
      "Cardiac conditions",
      "Hyperthyroidism",
      "Substance intoxication",
      "PTSD",
      "Specific phobia"
    ],
    "treatments": {
      "therapies": [
        "CBT with interoceptive exposure",
        "Panic-focused psychodynamic therapy"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs",
        "Benzodiazepines (short-term)"
      ],
      "lifestyle": [
        "Avoid caffeine and stimulants"
      ]
    },
    "relatedIds": [
      "agora",
      "gad"
    ]
  },
  {
    "id": "agora",
    "name": "Agoraphobia",
    "category": "anxiety",
    "overviewSimple": "Fear of places or situations where escape might be hard, often leading to avoidance.",
    "overviewClinical": "Marked fear of ≥2 of: public transit, open spaces, enclosed spaces, lines/crowds, being outside the home alone.",
    "criteriaSummary": [
      "Marked fear in ≥2 agoraphobic situations.",
      "Fear that escape may be difficult or help unavailable.",
      "Situations almost always provoke fear.",
      "Actively avoided or endured with distress.",
      "≥6 months duration."
    ],
    "keywords": [
      "agoraphobia",
      "scared to leave home",
      "crowd fear",
      "open space fear"
    ],
    "icd10": "F40.00",
    "prevalence": "~1.7% adults / year",
    "onsetTypical": "Late teens to mid-30s",
    "symptoms": {
      "emotional": [
        "Anticipatory anxiety"
      ],
      "behavioral": [
        "Avoidance",
        "Need for companion"
      ]
    },
    "differentials": [
      "Specific phobia",
      "Social anxiety",
      "PTSD",
      "Panic Disorder"
    ],
    "treatments": {
      "therapies": [
        "Exposure therapy",
        "CBT"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs"
      ]
    },
    "relatedIds": [
      "panic",
      "sad"
    ]
  },
  {
    "id": "sad",
    "name": "Social Anxiety Disorder",
    "category": "anxiety",
    "overviewSimple": "Strong fear of being judged or embarrassed in social situations.",
    "overviewClinical": "Marked fear or anxiety about social situations involving possible scrutiny, lasting ≥6 months and causing impairment.",
    "criteriaSummary": [
      "Marked fear of social situations involving scrutiny.",
      "Fear of negative evaluation or rejection.",
      "Situations almost always provoke fear.",
      "Avoided or endured with intense distress.",
      "≥6 months duration."
    ],
    "keywords": [
      "social anxiety",
      "shy",
      "afraid people",
      "fear judgment",
      "blushing"
    ],
    "shortName": "Social Phobia",
    "icd10": "F40.10",
    "prevalence": "~7% adults / year",
    "onsetTypical": "Childhood to early teens",
    "symptoms": {
      "emotional": [
        "Embarrassment",
        "Self-consciousness"
      ],
      "physical": [
        "Blushing",
        "Sweating",
        "Trembling"
      ],
      "behavioral": [
        "Avoidance of social events",
        "Speaking softly"
      ]
    },
    "differentials": [
      "Avoidant PD",
      "Panic Disorder",
      "Autism",
      "Body Dysmorphic Disorder"
    ],
    "treatments": {
      "therapies": [
        "CBT with exposure",
        "Social skills training"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs",
        "Beta-blockers (performance)"
      ]
    },
    "relatedIds": [
      "gad",
      "avoidant_pd"
    ]
  },
  {
    "id": "specific_phobia",
    "name": "Specific Phobia",
    "category": "anxiety",
    "overviewSimple": "Intense fear of a specific object or situation (e.g., heights, spiders, needles).",
    "overviewClinical": "Marked fear of a specific object or situation that almost always provokes immediate fear and is avoided or endured with distress.",
    "criteriaSummary": [
      "Marked fear of a specific object/situation.",
      "Phobic stimulus almost always provokes fear.",
      "Actively avoided.",
      "Out of proportion to actual danger.",
      "≥6 months duration."
    ],
    "keywords": [
      "phobia",
      "fear of",
      "spider",
      "heights",
      "flying",
      "needle",
      "blood"
    ],
    "icd10": "F40.2",
    "prevalence": "~7–9% adults / year",
    "onsetTypical": "Childhood",
    "symptoms": {
      "emotional": [
        "Intense fear"
      ],
      "physical": [
        "Tachycardia",
        "Sweating",
        "Nausea"
      ]
    },
    "differentials": [
      "Panic Disorder",
      "PTSD",
      "Social Anxiety"
    ],
    "treatments": {
      "therapies": [
        "Exposure therapy",
        "Systematic desensitization"
      ]
    }
  },
  {
    "id": "separation_anx",
    "name": "Separation Anxiety Disorder",
    "category": "anxiety",
    "overviewSimple": "Strong fear of being apart from loved ones or home.",
    "overviewClinical": "Developmentally inappropriate and excessive fear concerning separation from attachment figures.",
    "criteriaSummary": [
      "≥3 of: distress at separation, worry about losing attachment figures, worry about untoward events, school refusal, fear of being alone, refusal to sleep away, nightmares, somatic complaints.",
      "≥4 weeks in children, ≥6 months in adults.",
      "Significant impairment."
    ],
    "keywords": [
      "separation anxiety",
      "clingy",
      "school refusal",
      "cant be alone"
    ],
    "icd10": "F93.0",
    "prevalence": "~4% children, ~1–2% adults",
    "onsetTypical": "Childhood, can persist",
    "differentials": [
      "GAD",
      "Agoraphobia",
      "School refusal due to other causes"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Parent training"
      ],
      "medicationClasses": [
        "SSRIs (selective)"
      ]
    }
  },
  {
    "id": "selective_mutism",
    "name": "Selective Mutism",
    "category": "anxiety",
    "overviewSimple": "Consistent failure to speak in specific social situations despite speaking in others.",
    "overviewClinical": "Consistent failure to speak in specific social situations where there is an expectation to speak, despite speaking in other situations, for ≥1 month.",
    "criteriaSummary": [
      "Consistent failure to speak in specific social situations.",
      "Interferes with achievement or communication.",
      "Duration ≥1 month (not first month of school).",
      "Not due to language or communication disorder."
    ],
    "keywords": [
      "selective mutism",
      "child wont speak",
      "mute at school"
    ],
    "icd10": "F94.0",
    "prevalence": "<1% children",
    "onsetTypical": "Before age 5",
    "differentials": [
      "Social Anxiety",
      "Autism",
      "Communication Disorder"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Behavioral interventions",
        "Stimulus fading"
      ]
    }
  },
  {
    "id": "ptsd",
    "name": "Posttraumatic Stress Disorder",
    "category": "trauma",
    "overviewSimple": "Distressing re-experiencing, avoidance, and arousal after a serious traumatic event.",
    "overviewClinical": "Following exposure to actual or threatened death, serious injury, or sexual violence: intrusion, avoidance, negative cognitions/mood, and arousal/reactivity changes for ≥1 month.",
    "criteriaSummary": [
      "Exposure to actual or threatened death, serious injury, or sexual violence.",
      "≥1 intrusion symptom (memories, dreams, flashbacks).",
      "≥1 persistent avoidance symptom.",
      "≥2 negative alterations in cognition/mood.",
      "≥2 marked alterations in arousal and reactivity.",
      "Duration >1 month with significant impairment."
    ],
    "keywords": [
      "ptsd",
      "trauma",
      "flashback",
      "nightmare",
      "hypervigilant",
      "trigger",
      "abuse",
      "combat"
    ],
    "shortName": "PTSD",
    "icd10": "F43.10",
    "prevalence": "~3.5% adults / year",
    "onsetTypical": "Any age after trauma",
    "symptoms": {
      "emotional": [
        "Fear",
        "Guilt",
        "Numbness"
      ],
      "cognitive": [
        "Flashbacks",
        "Intrusive memories",
        "Negative beliefs"
      ],
      "behavioral": [
        "Avoidance",
        "Hypervigilance",
        "Startle response"
      ],
      "physical": [
        "Sleep disturbance",
        "Tension"
      ]
    },
    "riskFactors": {
      "biological": [
        "Female sex",
        "Family history"
      ],
      "environmental": [
        "Severity/duration of trauma",
        "Repeated exposure"
      ],
      "social": [
        "Lack of support post-trauma"
      ]
    },
    "comorbidities": [
      "Depression",
      "Substance use",
      "Other anxiety disorders"
    ],
    "differentials": [
      "Acute Stress Disorder",
      "Adjustment Disorder",
      "Panic",
      "Dissociative disorders"
    ],
    "treatments": {
      "therapies": [
        "Trauma-focused CBT",
        "EMDR",
        "Prolonged Exposure",
        "Cognitive Processing Therapy"
      ],
      "medicationClasses": [
        "SSRIs",
        "SNRIs",
        "Prazosin (nightmares)"
      ],
      "lifestyle": [
        "Grounding skills",
        "Peer support"
      ]
    },
    "warnings": [
      "Suicide risk elevated; screen routinely."
    ],
    "relatedIds": [
      "asd",
      "adjustment",
      "cptsd"
    ]
  },
  {
    "id": "asd",
    "name": "Acute Stress Disorder",
    "category": "trauma",
    "overviewSimple": "PTSD-like symptoms in the first month after a traumatic event.",
    "overviewClinical": "Following trauma exposure, ≥9 symptoms across intrusion, negative mood, dissociation, avoidance, and arousal lasting 3 days to 1 month.",
    "criteriaSummary": [
      "Exposure to trauma as in PTSD.",
      "≥9 symptoms across categories.",
      "Duration 3 days to 1 month.",
      "Significant distress or impairment."
    ],
    "keywords": [
      "acute stress",
      "recent trauma",
      "shock"
    ],
    "icd10": "F43.0",
    "prevalence": "Variable post-trauma",
    "onsetTypical": "Within 1 month of trauma",
    "differentials": [
      "PTSD",
      "Adjustment Disorder",
      "Brief psychotic disorder"
    ],
    "treatments": {
      "therapies": [
        "Brief trauma-focused CBT"
      ]
    },
    "relatedIds": [
      "ptsd",
      "adjustment"
    ]
  },
  {
    "id": "adjustment",
    "name": "Adjustment Disorders",
    "category": "trauma",
    "overviewSimple": "Excessive emotional or behavioral reaction to a clear life stressor.",
    "overviewClinical": "Emotional or behavioral symptoms in response to an identifiable stressor, occurring within 3 months and not exceeding 6 months after the stressor ends.",
    "criteriaSummary": [
      "Symptoms within 3 months of an identifiable stressor.",
      "Marked distress out of proportion or significant impairment.",
      "Not another mental disorder or normal bereavement.",
      "Resolves within 6 months after stressor ends."
    ],
    "keywords": [
      "adjustment",
      "life change",
      "stress reaction",
      "divorce",
      "job loss"
    ],
    "icd10": "F43.2",
    "prevalence": "2–8% community",
    "onsetTypical": "Within 3 months of stressor",
    "differentials": [
      "MDD",
      "PTSD",
      "Normal stress reaction"
    ],
    "treatments": {
      "therapies": [
        "Brief supportive therapy",
        "Problem-solving therapy"
      ]
    }
  },
  {
    "id": "raD",
    "name": "Reactive Attachment Disorder",
    "category": "trauma",
    "overviewSimple": "A child rarely seeks comfort and shows little emotional response, often due to early neglect.",
    "overviewClinical": "Pattern of inhibited, emotionally withdrawn behavior toward caregivers in a child who experienced extremes of insufficient care.",
    "criteriaSummary": [
      "Consistent pattern of inhibited, emotionally withdrawn behavior toward adult caregivers.",
      "Persistent social/emotional disturbance.",
      "History of extremes of insufficient care.",
      "Onset before age 5."
    ],
    "keywords": [
      "attachment",
      "neglect",
      "cold child",
      "unresponsive child"
    ],
    "icd10": "F94.1",
    "prevalence": "<1% high-risk populations",
    "onsetTypical": "Before age 5",
    "differentials": [
      "Autism",
      "Intellectual Disability",
      "Disinhibited Social Engagement"
    ],
    "treatments": {
      "therapies": [
        "Stable caregiving",
        "Attachment-based interventions"
      ]
    }
  },
  {
    "id": "dsed",
    "name": "Disinhibited Social Engagement Disorder",
    "category": "trauma",
    "overviewSimple": "A child overly approaches and interacts with unfamiliar adults.",
    "overviewClinical": "Pattern in a child who actively approaches and interacts with unfamiliar adults, beyond cultural and developmental norms.",
    "criteriaSummary": [
      "Reduced reticence with unfamiliar adults.",
      "Overly familiar verbal or physical behavior.",
      "Diminished checking back with caregiver.",
      "Willingness to go off with strangers.",
      "History of insufficient care."
    ],
    "keywords": [
      "disinhibited",
      "overly friendly child",
      "strangers"
    ],
    "icd10": "F94.2",
    "onsetTypical": "Before age 5",
    "differentials": [
      "ADHD",
      "Autism",
      "RAD"
    ],
    "treatments": {
      "therapies": [
        "Stable caregiving",
        "Behavioral interventions"
      ]
    }
  },
  {
    "id": "pgd",
    "name": "Prolonged Grief Disorder",
    "category": "trauma",
    "overviewSimple": "Intense, lasting grief after a loved one's death that disrupts daily life.",
    "overviewClinical": "Persistent grief response with intense yearning or preoccupation with the deceased, lasting ≥12 months after the death (≥6 months in children/adolescents).",
    "criteriaSummary": [
      "Death of a loved one ≥12 months ago.",
      "Daily intense yearning or preoccupation.",
      "≥3 of 8 symptoms (identity disruption, disbelief, avoidance, intense pain, difficulty reintegrating, numbness, meaninglessness, loneliness).",
      "Clinically significant distress or impairment."
    ],
    "keywords": [
      "grief",
      "prolonged grief",
      "cant move on",
      "loss"
    ],
    "icd10": "F43.81",
    "onsetTypical": "At least 12 months after loss (6 in children)",
    "differentials": [
      "MDD",
      "PTSD",
      "Normal bereavement"
    ],
    "treatments": {
      "therapies": [
        "Complicated Grief Therapy",
        "CBT for grief"
      ]
    }
  },
  {
    "id": "ocd",
    "name": "Obsessive-Compulsive Disorder",
    "category": "ocd",
    "overviewSimple": "Unwanted repeating thoughts and rituals done to reduce anxiety.",
    "overviewClinical": "Presence of obsessions, compulsions, or both; symptoms are time-consuming or cause significant distress/impairment.",
    "criteriaSummary": [
      "Presence of obsessions, compulsions, or both.",
      "Symptoms are time-consuming (>1 hr/day) or cause distress/impairment.",
      "Not attributable to a substance or another medical condition.",
      "Not better explained by another mental disorder."
    ],
    "keywords": [
      "ocd",
      "obsessive",
      "compulsive",
      "rituals",
      "checking",
      "contamination",
      "intrusive thoughts"
    ],
    "shortName": "OCD",
    "icd10": "F42",
    "prevalence": "~1.2% adults / year",
    "onsetTypical": "Childhood to early 20s",
    "symptoms": {
      "cognitive": [
        "Intrusive thoughts",
        "Doubt",
        "Need for symmetry"
      ],
      "behavioral": [
        "Checking",
        "Cleaning",
        "Counting",
        "Mental rituals"
      ]
    },
    "differentials": [
      "GAD",
      "Specific phobia",
      "BDD",
      "Tic disorders",
      "OCPD"
    ],
    "treatments": {
      "therapies": [
        "Exposure & Response Prevention (ERP)",
        "CBT"
      ],
      "medicationClasses": [
        "SSRIs (often higher dose)",
        "Clomipramine"
      ]
    },
    "relatedIds": [
      "bdd",
      "hoarding",
      "ocpd"
    ]
  },
  {
    "id": "bdd",
    "name": "Body Dysmorphic Disorder",
    "category": "ocd",
    "overviewSimple": "Intense focus on perceived flaws in appearance that others barely notice.",
    "overviewClinical": "Preoccupation with one or more perceived defects in physical appearance not observable or appearing slight to others, with repetitive behaviors.",
    "criteriaSummary": [
      "Preoccupation with perceived appearance defects.",
      "Performed repetitive behaviors or mental acts (mirror checking, comparing).",
      "Significant distress or impairment.",
      "Not better explained by an eating disorder."
    ],
    "keywords": [
      "bdd",
      "ugly",
      "appearance",
      "mirror",
      "cosmetic"
    ],
    "shortName": "BDD",
    "icd10": "F45.22",
    "prevalence": "~2.4% adults",
    "onsetTypical": "Adolescence",
    "differentials": [
      "OCD",
      "Eating disorders",
      "Social Anxiety",
      "Delusional disorder"
    ],
    "treatments": {
      "therapies": [
        "CBT-BDD",
        "ERP"
      ],
      "medicationClasses": [
        "SSRIs (high dose)"
      ]
    },
    "warnings": [
      "Elevated suicide risk."
    ],
    "relatedIds": [
      "ocd",
      "sad"
    ]
  },
  {
    "id": "hoarding",
    "name": "Hoarding Disorder",
    "category": "ocd",
    "overviewSimple": "Persistent difficulty discarding possessions, leading to clutter.",
    "overviewClinical": "Persistent difficulty discarding possessions due to distress associated with discarding, resulting in accumulation that congests living areas.",
    "criteriaSummary": [
      "Persistent difficulty discarding.",
      "Distress associated with discarding.",
      "Accumulation congesting active living areas.",
      "Significant distress or impairment.",
      "Not attributable to another medical or mental condition."
    ],
    "keywords": [
      "hoarding",
      "cant throw away",
      "clutter"
    ],
    "icd10": "F42.3",
    "prevalence": "~2–6% adults",
    "onsetTypical": "Adolescence; worsens with age",
    "differentials": [
      "OCD",
      "Major Neurocognitive Disorder",
      "Depression"
    ],
    "treatments": {
      "therapies": [
        "CBT for hoarding",
        "Motivational interviewing"
      ]
    },
    "relatedIds": [
      "ocd"
    ]
  },
  {
    "id": "trich",
    "name": "Trichotillomania (Hair-Pulling Disorder)",
    "category": "ocd",
    "overviewSimple": "Recurrent pulling out of one's hair, causing hair loss.",
    "overviewClinical": "Recurrent hair pulling resulting in hair loss, with repeated attempts to stop.",
    "criteriaSummary": [
      "Recurrent hair pulling resulting in hair loss.",
      "Repeated attempts to decrease or stop.",
      "Significant distress or impairment.",
      "Not attributable to another medical or mental condition."
    ],
    "keywords": [
      "hair pulling",
      "trichotillomania"
    ],
    "icd10": "F63.3",
    "prevalence": "~1–2%",
    "onsetTypical": "Adolescence",
    "differentials": [
      "OCD",
      "BDD",
      "Stereotypic movement disorder"
    ],
    "treatments": {
      "therapies": [
        "Habit Reversal Training",
        "ACT"
      ],
      "medicationClasses": [
        "N-acetylcysteine (adjunct)"
      ]
    }
  },
  {
    "id": "excoriation",
    "name": "Excoriation (Skin-Picking) Disorder",
    "category": "ocd",
    "overviewSimple": "Recurrent skin picking that causes lesions.",
    "overviewClinical": "Recurrent skin picking resulting in skin lesions with repeated attempts to stop.",
    "criteriaSummary": [
      "Recurrent skin picking with lesions.",
      "Repeated attempts to stop.",
      "Significant distress or impairment.",
      "Not attributable to substance or medical condition."
    ],
    "keywords": [
      "skin picking",
      "excoriation",
      "dermatillomania"
    ],
    "icd10": "L98.1",
    "prevalence": "~1.4%",
    "onsetTypical": "Adolescence",
    "differentials": [
      "OCD",
      "BDD",
      "Dermatologic conditions"
    ],
    "treatments": {
      "therapies": [
        "Habit Reversal Training",
        "CBT"
      ]
    }
  },
  {
    "id": "scz",
    "name": "Schizophrenia",
    "category": "psychotic",
    "overviewSimple": "A serious condition with hallucinations, delusions, and disorganized thinking.",
    "overviewClinical": "≥2 characteristic symptoms (delusions, hallucinations, disorganized speech, grossly disorganized/catatonic behavior, negative symptoms) for ≥1 month, with continuous signs ≥6 months.",
    "criteriaSummary": [
      "≥2 of 5 characteristic symptoms for a significant portion of 1 month.",
      "At least one must be delusions, hallucinations, or disorganized speech.",
      "Marked decline in functioning.",
      "Continuous signs ≥6 months.",
      "Schizoaffective and mood disorders ruled out.",
      "Not due to substance/medical condition."
    ],
    "keywords": [
      "schizophrenia",
      "psychosis",
      "hallucinations",
      "voices",
      "delusions",
      "paranoia"
    ],
    "icd10": "F20.9",
    "prevalence": "~0.3–0.7% lifetime",
    "onsetTypical": "Late teens to mid-30s",
    "symptoms": {
      "cognitive": [
        "Delusions",
        "Disorganized thinking",
        "Cognitive deficits"
      ],
      "behavioral": [
        "Disorganized behavior",
        "Catatonia"
      ],
      "emotional": [
        "Flat affect",
        "Avolition",
        "Anhedonia"
      ]
    },
    "differentials": [
      "Schizoaffective",
      "Bipolar with psychotic features",
      "Substance-induced psychosis",
      "Schizophreniform"
    ],
    "treatments": {
      "therapies": [
        "CBT for psychosis",
        "Family psychoeducation",
        "Supported employment"
      ],
      "medicationClasses": [
        "Atypical antipsychotics",
        "Long-acting injectables"
      ]
    },
    "warnings": [
      "Higher suicide risk; requires multidisciplinary care."
    ],
    "relatedIds": [
      "schizoaffective",
      "schizophreniform",
      "brief_psychotic"
    ]
  },
  {
    "id": "schizoaffective",
    "name": "Schizoaffective Disorder",
    "category": "psychotic",
    "overviewSimple": "Schizophrenia symptoms occur with major mood episodes.",
    "overviewClinical": "Uninterrupted illness with a major mood episode concurrent with criterion A of schizophrenia, plus ≥2 weeks of delusions/hallucinations without prominent mood symptoms.",
    "criteriaSummary": [
      "Major mood episode concurrent with schizophrenia symptoms.",
      "Delusions/hallucinations for ≥2 weeks without prominent mood symptoms.",
      "Mood symptoms present for majority of illness.",
      "Not due to substance/medical."
    ],
    "keywords": [
      "schizoaffective"
    ],
    "icd10": "F25",
    "prevalence": "~0.3% lifetime",
    "onsetTypical": "Early adulthood",
    "differentials": [
      "Schizophrenia",
      "Bipolar with psychotic features",
      "MDD with psychotic features"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Psychoeducation"
      ],
      "medicationClasses": [
        "Antipsychotics",
        "Mood stabilizers",
        "Antidepressants"
      ]
    },
    "relatedIds": [
      "scz",
      "bd1"
    ]
  },
  {
    "id": "schizophreniform",
    "name": "Schizophreniform Disorder",
    "category": "psychotic",
    "overviewSimple": "Schizophrenia-like symptoms lasting between 1 and 6 months.",
    "overviewClinical": "Same symptoms as schizophrenia but episode lasts ≥1 month and <6 months.",
    "criteriaSummary": [
      "Criterion A of schizophrenia met.",
      "Episode lasts 1–6 months.",
      "Schizoaffective and mood ruled out.",
      "Not due to substance/medical."
    ],
    "keywords": [
      "schizophreniform"
    ],
    "icd10": "F20.81",
    "onsetTypical": "Late teens to early adulthood",
    "differentials": [
      "Schizophrenia",
      "Brief Psychotic Disorder"
    ],
    "treatments": {
      "medicationClasses": [
        "Antipsychotics"
      ],
      "therapies": [
        "Psychoeducation",
        "CBT"
      ]
    },
    "relatedIds": [
      "scz",
      "brief_psychotic"
    ]
  },
  {
    "id": "brief_psychotic",
    "name": "Brief Psychotic Disorder",
    "category": "psychotic",
    "overviewSimple": "Sudden psychotic symptoms lasting less than a month, often after stress.",
    "overviewClinical": "Presence of ≥1 psychotic symptom (delusions, hallucinations, disorganized speech, behavior) lasting ≥1 day and <1 month with eventual full return to baseline.",
    "criteriaSummary": [
      "≥1 of psychotic symptoms.",
      "Episode 1 day to <1 month.",
      "Full return to premorbid functioning.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "brief psychosis",
      "sudden psychosis"
    ],
    "icd10": "F23",
    "onsetTypical": "Average age 30s",
    "differentials": [
      "Schizophreniform",
      "Substance-induced",
      "Mood with psychotic features"
    ],
    "treatments": {
      "medicationClasses": [
        "Short-course antipsychotics"
      ],
      "therapies": [
        "Supportive psychotherapy"
      ]
    }
  },
  {
    "id": "delusional",
    "name": "Delusional Disorder",
    "category": "psychotic",
    "overviewSimple": "Persistent false beliefs without other major psychotic symptoms.",
    "overviewClinical": "Presence of ≥1 delusion for ≥1 month; criterion A of schizophrenia never met; functioning not markedly impaired.",
    "criteriaSummary": [
      "≥1 delusion lasting ≥1 month.",
      "Criterion A of schizophrenia never met.",
      "Functioning not markedly impaired apart from delusion.",
      "Mood episodes brief relative to delusional periods.",
      "Not due to substance/medical."
    ],
    "keywords": [
      "delusional",
      "false belief",
      "persecutory",
      "jealous"
    ],
    "icd10": "F22",
    "prevalence": "~0.2%",
    "onsetTypical": "Middle to late adulthood",
    "differentials": [
      "Schizophrenia",
      "BDD",
      "OCD with poor insight"
    ],
    "treatments": {
      "medicationClasses": [
        "Antipsychotics"
      ],
      "therapies": [
        "CBT (carefully)"
      ]
    }
  },
  {
    "id": "schizotypal",
    "name": "Schizotypal Personality Disorder",
    "category": "personality",
    "overviewSimple": "Eccentric thinking, behavior, and discomfort with close relationships.",
    "overviewClinical": "Pervasive pattern of social/interpersonal deficits, cognitive or perceptual distortions, and behavioral eccentricities.",
    "criteriaSummary": [
      "≥5 of 9: ideas of reference, odd beliefs, unusual perceptions, odd thinking/speech, suspiciousness, inappropriate affect, eccentric behavior, lack of close friends, excessive social anxiety."
    ],
    "keywords": [
      "schizotypal",
      "eccentric",
      "odd beliefs",
      "magical thinking"
    ],
    "icd10": "F21",
    "prevalence": "~3%",
    "onsetTypical": "Early adulthood",
    "differentials": [
      "Schizophrenia",
      "Autism",
      "Paranoid PD",
      "Schizoid PD"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Social skills training"
      ],
      "medicationClasses": [
        "Low-dose antipsychotics (selective)"
      ]
    }
  },
  {
    "id": "adhd",
    "name": "Attention-Deficit/Hyperactivity Disorder",
    "category": "neuro",
    "overviewSimple": "Persistent inattention and/or hyperactivity-impulsivity that disrupts daily functioning.",
    "overviewClinical": "Persistent pattern of inattention and/or hyperactivity-impulsivity present in ≥2 settings, with several symptoms before age 12, causing impairment.",
    "criteriaSummary": [
      "≥6 (≥5 if ≥17yo) inattention or hyperactivity-impulsivity symptoms ≥6 months.",
      "Several symptoms before age 12.",
      "Symptoms in ≥2 settings.",
      "Clear impairment.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "adhd",
      "add",
      "focus",
      "cant pay attention",
      "hyperactive",
      "impulsive",
      "distracted"
    ],
    "shortName": "ADHD",
    "icd10": "F90",
    "prevalence": "~5% children, ~2.5% adults",
    "onsetTypical": "Before age 12",
    "symptoms": {
      "cognitive": [
        "Inattention",
        "Forgetfulness",
        "Distractibility"
      ],
      "behavioral": [
        "Fidgeting",
        "Interrupting",
        "Restlessness",
        "Impulsivity"
      ]
    },
    "differentials": [
      "Anxiety",
      "Mood disorders",
      "Learning disorders",
      "Autism",
      "Sleep disorders"
    ],
    "treatments": {
      "therapies": [
        "Behavior therapy",
        "Coaching",
        "CBT for adults"
      ],
      "medicationClasses": [
        "Stimulants",
        "Atomoxetine",
        "Alpha-2 agonists"
      ],
      "lifestyle": [
        "Structure",
        "Sleep",
        "Exercise"
      ]
    },
    "relatedIds": [
      "odd",
      "sld"
    ]
  },
  {
    "id": "asd_neuro",
    "name": "Autism Spectrum Disorder",
    "category": "neuro",
    "overviewSimple": "Differences in social communication and restricted, repetitive behaviors or interests.",
    "overviewClinical": "Persistent deficits in social communication and interaction across contexts, plus restricted, repetitive patterns of behavior, with onset in early development.",
    "criteriaSummary": [
      "Persistent deficits in social communication/interaction (3 areas).",
      "Restricted, repetitive patterns (≥2 of 4).",
      "Symptoms present in early development.",
      "Significant impairment.",
      "Not better explained by ID."
    ],
    "keywords": [
      "autism",
      "asd",
      "spectrum",
      "sensory",
      "stimming",
      "social difficulty"
    ],
    "shortName": "ASD",
    "icd10": "F84.0",
    "prevalence": "~1–2%",
    "onsetTypical": "Early developmental period",
    "symptoms": {
      "behavioral": [
        "Repetitive behaviors",
        "Restricted interests",
        "Sensory sensitivities"
      ],
      "cognitive": [
        "Difficulty with social cues",
        "Concrete thinking"
      ]
    },
    "differentials": [
      "Social Communication Disorder",
      "ID",
      "ADHD",
      "Anxiety",
      "Schizophrenia"
    ],
    "treatments": {
      "therapies": [
        "Behavioral interventions",
        "Speech/OT",
        "Social skills training"
      ],
      "medicationClasses": [
        "Targeted (irritability, anxiety, ADHD)"
      ]
    }
  },
  {
    "id": "id_neuro",
    "name": "Intellectual Developmental Disorder",
    "category": "neuro",
    "overviewSimple": "Limitations in intellectual functioning and adaptive behavior beginning in development.",
    "overviewClinical": "Deficits in intellectual functions and adaptive functioning across conceptual, social, and practical domains, onset in developmental period.",
    "criteriaSummary": [
      "Deficits in intellectual functioning confirmed by clinical assessment and standardized testing.",
      "Deficits in adaptive functioning across ≥1 domain.",
      "Onset during developmental period."
    ],
    "keywords": [
      "intellectual disability",
      "developmental delay",
      "id"
    ],
    "shortName": "ID",
    "icd10": "F70-F79",
    "onsetTypical": "Developmental period",
    "differentials": [
      "Specific Learning Disorder",
      "Autism",
      "Communication disorders"
    ],
    "treatments": {
      "therapies": [
        "Educational interventions",
        "Adaptive skills training"
      ]
    }
  },
  {
    "id": "sld",
    "name": "Specific Learning Disorder",
    "category": "neuro",
    "overviewSimple": "Persistent difficulties learning reading, writing, or math despite typical schooling.",
    "overviewClinical": "Difficulties learning and using academic skills lasting ≥6 months despite intervention, with academic skills below age expectations.",
    "criteriaSummary": [
      "≥1 specific academic skill difficulty for ≥6 months.",
      "Academic skills well below expected.",
      "Onset during school years.",
      "Not due to ID, sensory deficits, or other disorders."
    ],
    "keywords": [
      "dyslexia",
      "dyscalculia",
      "learning disability",
      "reading difficulty"
    ],
    "icd10": "F81",
    "prevalence": "~5–15% school-age",
    "onsetTypical": "School-age",
    "differentials": [
      "ID",
      "ADHD",
      "Sensory deficits",
      "Inadequate instruction"
    ],
    "treatments": {
      "therapies": [
        "Specialized instruction",
        "Accommodations",
        "Tutoring"
      ]
    }
  },
  {
    "id": "comm_disorder",
    "name": "Language Disorder",
    "category": "neuro",
    "overviewSimple": "Persistent difficulties acquiring and using language.",
    "overviewClinical": "Persistent difficulties in the acquisition and use of language across modalities due to deficits in comprehension or production.",
    "criteriaSummary": [
      "Reduced vocabulary, limited sentence structure, impairments in discourse.",
      "Substantially below age expectations.",
      "Onset early developmental period.",
      "Not due to hearing impairment or other condition."
    ],
    "keywords": [
      "language delay",
      "speech delay"
    ],
    "icd10": "F80.2",
    "onsetTypical": "Early developmental period",
    "differentials": [
      "Hearing impairment",
      "ID",
      "Autism"
    ],
    "treatments": {
      "therapies": [
        "Speech-language therapy"
      ]
    }
  },
  {
    "id": "speech_sound",
    "name": "Speech Sound Disorder",
    "category": "neuro",
    "overviewSimple": "Persistent difficulty with speech sound production affecting intelligibility.",
    "overviewClinical": "Persistent difficulty with speech sound production interfering with intelligibility or communication.",
    "criteriaSummary": [
      "Difficulty with speech sound production.",
      "Interference with communication or participation.",
      "Onset in early development.",
      "Not due to congenital or acquired condition."
    ],
    "keywords": [
      "articulation",
      "lisp",
      "speech sound"
    ],
    "icd10": "F80.0",
    "treatments": {
      "therapies": [
        "Articulation therapy"
      ]
    }
  },
  {
    "id": "stuttering",
    "name": "Childhood-Onset Fluency Disorder (Stuttering)",
    "category": "neuro",
    "overviewSimple": "Disturbances in normal fluency and time patterning of speech.",
    "overviewClinical": "Disturbances in fluency including sound/syllable repetitions, prolongations, broken words, audible/silent blocking.",
    "criteriaSummary": [
      "Frequent fluency disturbances.",
      "Causes anxiety about speaking or impairment.",
      "Onset in developmental period.",
      "Not due to neurological condition."
    ],
    "keywords": [
      "stutter",
      "stammering",
      "fluency"
    ],
    "icd10": "F80.81",
    "onsetTypical": "Childhood",
    "treatments": {
      "therapies": [
        "Fluency-shaping therapy",
        "CBT for speech anxiety"
      ]
    }
  },
  {
    "id": "tourette",
    "name": "Tourette's Disorder",
    "category": "neuro",
    "overviewSimple": "Multiple motor tics and at least one vocal tic over more than a year.",
    "overviewClinical": "Multiple motor and ≥1 vocal tics, present for >1 year, with onset before age 18.",
    "criteriaSummary": [
      "Multiple motor and ≥1 vocal tic at some time.",
      "Tics may wax and wane but persist >1 year.",
      "Onset before age 18.",
      "Not due to substance or medical condition."
    ],
    "keywords": [
      "tourette",
      "tics",
      "vocal tic",
      "motor tic"
    ],
    "icd10": "F95.2",
    "prevalence": "~0.3–1% children",
    "onsetTypical": "Before age 18",
    "differentials": [
      "Persistent tic disorder",
      "Stereotypies",
      "OCD",
      "Functional movement disorders"
    ],
    "treatments": {
      "therapies": [
        "CBIT (Comprehensive Behavioral Intervention for Tics)"
      ],
      "medicationClasses": [
        "Alpha-2 agonists",
        "Antipsychotics (selective)"
      ]
    }
  },
  {
    "id": "dcd",
    "name": "Developmental Coordination Disorder",
    "category": "neuro",
    "overviewSimple": "Motor coordination difficulties that impact daily activities.",
    "overviewClinical": "Acquisition and execution of coordinated motor skills substantially below expectations.",
    "criteriaSummary": [
      "Motor skill acquisition below expected.",
      "Interferes with daily activities and academic performance.",
      "Onset in early developmental period.",
      "Not due to other medical condition."
    ],
    "keywords": [
      "coordination",
      "clumsy",
      "motor delay"
    ],
    "icd10": "F82",
    "onsetTypical": "Early developmental period",
    "treatments": {
      "therapies": [
        "Occupational therapy",
        "Task-oriented training"
      ]
    }
  },
  {
    "id": "stereotypic",
    "name": "Stereotypic Movement Disorder",
    "category": "neuro",
    "overviewSimple": "Repetitive, purposeless motor behaviors that interfere with activities or cause harm.",
    "overviewClinical": "Repetitive, seemingly driven, purposeless motor behavior that interferes with activities or results in self-injury.",
    "criteriaSummary": [
      "Repetitive purposeless motor behavior.",
      "Interferes with activities or causes self-injury.",
      "Onset in early developmental period.",
      "Not due to substance/medical."
    ],
    "keywords": [
      "stereotypic",
      "rocking",
      "head banging"
    ],
    "icd10": "F98.4",
    "treatments": {
      "therapies": [
        "Behavioral interventions",
        "Habit reversal"
      ]
    }
  },
  {
    "id": "an",
    "name": "Anorexia Nervosa",
    "category": "eating",
    "overviewSimple": "Severe food restriction and intense fear of gaining weight despite low body weight.",
    "overviewClinical": "Restriction of energy intake leading to significantly low body weight, intense fear of weight gain, and disturbance in body weight/shape experience.",
    "criteriaSummary": [
      "Restriction leading to significantly low body weight.",
      "Intense fear of gaining weight or behavior interfering with weight gain.",
      "Disturbance in body image."
    ],
    "keywords": [
      "anorexia",
      "not eating",
      "weight loss",
      "fear gain",
      "body image"
    ],
    "icd10": "F50.0",
    "prevalence": "~0.4% young women / year",
    "onsetTypical": "Adolescence",
    "symptoms": {
      "emotional": [
        "Fear of weight gain"
      ],
      "cognitive": [
        "Body image distortion"
      ],
      "behavioral": [
        "Food restriction",
        "Excessive exercise",
        "Purging (binge-purge subtype)"
      ],
      "physical": [
        "Amenorrhea",
        "Bradycardia",
        "Lanugo",
        "Cold intolerance"
      ]
    },
    "differentials": [
      "Bulimia",
      "Avoidant/Restrictive Food Intake Disorder",
      "Medical illness"
    ],
    "treatments": {
      "therapies": [
        "Family-Based Treatment (adolescents)",
        "CBT-E"
      ],
      "medicationClasses": [
        "Olanzapine (selective)"
      ],
      "lifestyle": [
        "Nutritional rehabilitation"
      ]
    },
    "warnings": [
      "Highest mortality of psychiatric disorders; requires medical monitoring."
    ],
    "relatedIds": [
      "bn",
      "bed",
      "arfid"
    ]
  },
  {
    "id": "bn",
    "name": "Bulimia Nervosa",
    "category": "eating",
    "overviewSimple": "Recurrent binge eating followed by compensatory behaviors like vomiting or excessive exercise.",
    "overviewClinical": "Recurrent binge episodes and inappropriate compensatory behaviors ≥1×/week for 3 months; self-evaluation unduly influenced by body shape and weight.",
    "criteriaSummary": [
      "Recurrent binge eating episodes.",
      "Recurrent compensatory behaviors.",
      "Both occur ≥1×/week for ≥3 months.",
      "Self-evaluation excessively influenced by body shape/weight.",
      "Not exclusively during anorexia."
    ],
    "keywords": [
      "bulimia",
      "binge purge",
      "vomiting",
      "laxatives"
    ],
    "icd10": "F50.2",
    "prevalence": "~0.3% / year",
    "onsetTypical": "Adolescence to young adult",
    "differentials": [
      "Anorexia binge-purge",
      "BED",
      "BDD"
    ],
    "treatments": {
      "therapies": [
        "CBT-E",
        "IPT"
      ],
      "medicationClasses": [
        "Fluoxetine"
      ]
    },
    "warnings": [
      "Electrolyte disturbances and dental erosion common."
    ],
    "relatedIds": [
      "an",
      "bed"
    ]
  },
  {
    "id": "bed",
    "name": "Binge-Eating Disorder",
    "category": "eating",
    "overviewSimple": "Recurrent episodes of eating large amounts with loss of control, without compensatory behavior.",
    "overviewClinical": "Recurrent binge eating with marked distress ≥1×/week for ≥3 months without regular compensatory behaviors.",
    "criteriaSummary": [
      "Recurrent binge episodes with loss of control.",
      "≥3 of: eating rapidly, until uncomfortably full, without hunger, alone due to embarrassment, disgusted/depressed afterward.",
      "Marked distress.",
      "≥1×/week for ≥3 months.",
      "Not associated with regular compensatory behaviors."
    ],
    "keywords": [
      "binge eating",
      "overeating",
      "loss of control food"
    ],
    "icd10": "F50.81",
    "prevalence": "~1.6% women, ~0.8% men",
    "onsetTypical": "Adolescence to adulthood",
    "differentials": [
      "Bulimia",
      "Obesity without BED",
      "Mood disorders"
    ],
    "treatments": {
      "therapies": [
        "CBT-E",
        "IPT",
        "DBT"
      ],
      "medicationClasses": [
        "SSRIs",
        "Lisdexamfetamine"
      ]
    },
    "relatedIds": [
      "bn",
      "an"
    ]
  },
  {
    "id": "arfid",
    "name": "Avoidant/Restrictive Food Intake Disorder",
    "category": "eating",
    "overviewSimple": "Avoidance or restriction of food not due to body image, leading to nutritional deficits.",
    "overviewClinical": "Eating or feeding disturbance manifested by failure to meet appropriate nutritional needs, not driven by body image concerns.",
    "criteriaSummary": [
      "Persistent failure to meet nutritional/energy needs.",
      "Significant weight loss, nutritional deficiency, dependence on supplements, or psychosocial impairment.",
      "Not better explained by lack of food or cultural practice.",
      "No body image disturbance.",
      "Not due to medical/mental disorder."
    ],
    "keywords": [
      "arfid",
      "picky eating",
      "food avoidance",
      "sensory food"
    ],
    "shortName": "ARFID",
    "icd10": "F50.82",
    "onsetTypical": "Childhood, can persist",
    "differentials": [
      "Anorexia",
      "Specific phobia",
      "Autism feeding"
    ],
    "treatments": {
      "therapies": [
        "Family-based feeding interventions",
        "CBT"
      ]
    }
  },
  {
    "id": "pica",
    "name": "Pica",
    "category": "eating",
    "overviewSimple": "Eating non-food substances persistently.",
    "overviewClinical": "Persistent eating of nonnutritive, nonfood substances over ≥1 month, inappropriate to developmental level.",
    "criteriaSummary": [
      "Persistent eating of nonnutritive substances ≥1 month.",
      "Inappropriate to developmental level.",
      "Not culturally supported.",
      "Warrants additional clinical attention."
    ],
    "keywords": [
      "pica",
      "eating dirt",
      "eating chalk"
    ],
    "icd10": "F50.8",
    "treatments": {
      "therapies": [
        "Behavioral interventions",
        "Address nutritional deficiencies"
      ]
    }
  },
  {
    "id": "rumination",
    "name": "Rumination Disorder",
    "category": "eating",
    "overviewSimple": "Repeated regurgitation of food without medical cause.",
    "overviewClinical": "Repeated regurgitation of food for ≥1 month; regurgitated food may be re-chewed, re-swallowed, or spit out.",
    "criteriaSummary": [
      "Repeated regurgitation ≥1 month.",
      "Not attributable to GI condition.",
      "Not exclusively during another eating disorder.",
      "Warrants clinical attention."
    ],
    "keywords": [
      "rumination",
      "regurgitation"
    ],
    "icd10": "F98.21",
    "treatments": {
      "therapies": [
        "Diaphragmatic breathing",
        "Behavioral interventions"
      ]
    }
  },
  {
    "id": "insomnia",
    "name": "Insomnia Disorder",
    "category": "sleep",
    "overviewSimple": "Trouble falling or staying asleep at least three nights a week for three months.",
    "overviewClinical": "Predominant complaint of sleep dissatisfaction with difficulty initiating, maintaining, or early-morning awakening, ≥3 nights/week for ≥3 months despite adequate opportunity.",
    "criteriaSummary": [
      "Sleep difficulty ≥3 nights/week for ≥3 months.",
      "Significant distress or impairment.",
      "Adequate opportunity for sleep.",
      "Not due to substance or medical condition.",
      "Not better explained by another sleep disorder."
    ],
    "keywords": [
      "insomnia",
      "cant sleep",
      "trouble sleeping",
      "wake up early"
    ],
    "icd10": "F51.01",
    "prevalence": "~10–15%",
    "onsetTypical": "Any age",
    "differentials": [
      "Sleep apnea",
      "Restless legs",
      "Mood/anxiety disorders",
      "Substance-induced"
    ],
    "treatments": {
      "therapies": [
        "CBT for Insomnia (CBT-I)",
        "Sleep restriction",
        "Stimulus control"
      ],
      "medicationClasses": [
        "Z-drugs (short-term)",
        "Melatonin agonists"
      ],
      "lifestyle": [
        "Sleep hygiene",
        "Limit screens"
      ]
    },
    "relatedIds": [
      "narcolepsy",
      "circadian"
    ]
  },
  {
    "id": "hypersomnolence",
    "name": "Hypersomnolence Disorder",
    "category": "sleep",
    "overviewSimple": "Excessive sleepiness despite getting enough nighttime sleep.",
    "overviewClinical": "Excessive sleepiness despite ≥7 hours sleep, with prolonged sleep, daytime lapses, or unrefreshing sleep, ≥3 days/week for ≥3 months.",
    "criteriaSummary": [
      "Excessive sleepiness ≥3 days/week for ≥3 months.",
      "Significant distress or impairment.",
      "Not better explained by another sleep, mental, or medical disorder."
    ],
    "keywords": [
      "hypersomnia",
      "always sleepy",
      "tired"
    ],
    "icd10": "G47.10",
    "onsetTypical": "Late teens to early adulthood",
    "differentials": [
      "Narcolepsy",
      "Sleep apnea",
      "Mood disorders",
      "Medication side effect"
    ],
    "treatments": {
      "medicationClasses": [
        "Modafinil",
        "Stimulants"
      ],
      "lifestyle": [
        "Scheduled naps",
        "Sleep hygiene"
      ]
    }
  },
  {
    "id": "narcolepsy",
    "name": "Narcolepsy",
    "category": "sleep",
    "overviewSimple": "Sudden urges to sleep during the day, sometimes with brief muscle weakness (cataplexy).",
    "overviewClinical": "Recurrent irrepressible need to sleep ≥3×/week for ≥3 months, with cataplexy, hypocretin deficiency, or REM latency abnormality.",
    "criteriaSummary": [
      "Recurrent irrepressible need to sleep ≥3×/week for ≥3 months.",
      "≥1 of: cataplexy, hypocretin deficiency, abnormal REM sleep latency."
    ],
    "keywords": [
      "narcolepsy",
      "cataplexy",
      "sleep attack"
    ],
    "icd10": "G47.4",
    "prevalence": "~0.02–0.05%",
    "onsetTypical": "Adolescence to early adulthood",
    "differentials": [
      "Hypersomnolence",
      "Sleep apnea",
      "Atonic seizures"
    ],
    "treatments": {
      "medicationClasses": [
        "Modafinil/armodafinil",
        "Sodium oxybate",
        "Pitolisant"
      ],
      "lifestyle": [
        "Scheduled naps"
      ]
    }
  },
  {
    "id": "apnea",
    "name": "Obstructive Sleep Apnea Hypopnea",
    "category": "sleep",
    "overviewSimple": "Repeated breathing pauses during sleep that disrupt rest.",
    "overviewClinical": "Polysomnographic evidence of ≥5 obstructive apneas/hypopneas per hour with symptoms, or ≥15 events/hour regardless.",
    "criteriaSummary": [
      "Polysomnographic evidence as above.",
      "Symptoms or no symptoms with ≥15 events/hour."
    ],
    "keywords": [
      "sleep apnea",
      "snoring",
      "gasping sleep"
    ],
    "icd10": "G47.33",
    "prevalence": "~10–20% adults",
    "onsetTypical": "Adulthood",
    "differentials": [
      "Central sleep apnea",
      "Insomnia",
      "Hypoventilation"
    ],
    "treatments": {
      "therapies": [
        "CPAP",
        "Oral appliances",
        "Positional therapy"
      ],
      "lifestyle": [
        "Weight loss",
        "Avoid alcohol"
      ]
    }
  },
  {
    "id": "circadian",
    "name": "Circadian Rhythm Sleep–Wake Disorders",
    "category": "sleep",
    "overviewSimple": "Misalignment between internal sleep clock and required schedule.",
    "overviewClinical": "Persistent or recurrent pattern of sleep disruption due to alteration of the circadian system or misalignment between circadian rhythm and required sleep–wake schedule.",
    "criteriaSummary": [
      "Persistent sleep disruption due to circadian alteration.",
      "Insomnia or excessive sleepiness.",
      "Significant distress or impairment."
    ],
    "keywords": [
      "circadian",
      "jet lag",
      "shift work",
      "delayed sleep"
    ],
    "icd10": "G47.2",
    "treatments": {
      "therapies": [
        "Bright light therapy",
        "Chronotherapy"
      ],
      "medicationClasses": [
        "Melatonin"
      ]
    }
  },
  {
    "id": "restless_legs",
    "name": "Restless Legs Syndrome",
    "category": "sleep",
    "overviewSimple": "Uncomfortable urge to move the legs, especially at night.",
    "overviewClinical": "Urge to move legs accompanied by uncomfortable sensations, worse at rest, partially relieved by movement, worse in evening.",
    "criteriaSummary": [
      "Urge to move legs ≥3×/week for ≥3 months.",
      "Significant distress or impairment.",
      "Not due to another condition or behavior."
    ],
    "keywords": [
      "restless legs",
      "rls",
      "leg urges"
    ],
    "icd10": "G25.81",
    "prevalence": "~2–7%",
    "onsetTypical": "Variable",
    "treatments": {
      "medicationClasses": [
        "Dopamine agonists",
        "Alpha-2-delta ligands",
        "Iron if low"
      ],
      "lifestyle": [
        "Iron evaluation",
        "Avoid caffeine"
      ]
    }
  },
  {
    "id": "nightmares",
    "name": "Nightmare Disorder",
    "category": "sleep",
    "overviewSimple": "Frequent disturbing dreams that disrupt sleep and functioning.",
    "overviewClinical": "Repeated occurrences of extended, dysphoric, well-remembered dreams; on awakening rapidly oriented and alert.",
    "criteriaSummary": [
      "Repeated dysphoric dreams.",
      "Rapid orientation on awakening.",
      "Significant distress or impairment."
    ],
    "keywords": [
      "nightmares",
      "bad dreams"
    ],
    "icd10": "F51.5",
    "differentials": [
      "PTSD",
      "Sleep terrors",
      "REM behavior disorder"
    ],
    "treatments": {
      "therapies": [
        "Imagery Rehearsal Therapy"
      ],
      "medicationClasses": [
        "Prazosin (PTSD-related)"
      ]
    }
  },
  {
    "id": "rbd",
    "name": "REM Sleep Behavior Disorder",
    "category": "sleep",
    "overviewSimple": "Acting out dreams during REM sleep — sometimes violently.",
    "overviewClinical": "Repeated episodes of arousal during REM with vocalization or complex motor behaviors.",
    "criteriaSummary": [
      "Repeated REM arousal episodes.",
      "Polysomnographic REM without atonia or strong clinical evidence.",
      "Not due to substance or medical."
    ],
    "keywords": [
      "rem behavior",
      "acting out dreams",
      "sleep punching"
    ],
    "icd10": "G47.52",
    "onsetTypical": "Older adulthood",
    "differentials": [
      "Sleep terrors",
      "Seizures",
      "Sleepwalking"
    ],
    "treatments": {
      "medicationClasses": [
        "Melatonin",
        "Clonazepam"
      ],
      "therapies": [
        "Bedroom safety measures"
      ]
    }
  },
  {
    "id": "aud",
    "name": "Alcohol Use Disorder",
    "category": "substance",
    "overviewSimple": "A pattern of alcohol use causing significant problems despite trying to control it.",
    "overviewClinical": "Problematic pattern of alcohol use leading to clinically significant impairment within a 12-month period; ≥2 of 11 criteria.",
    "criteriaSummary": [
      "Larger amounts/longer than intended.",
      "Persistent desire or unsuccessful efforts to cut down.",
      "Time spent obtaining/using/recovering.",
      "Craving.",
      "Failure to fulfill obligations.",
      "Continued use despite social/interpersonal problems.",
      "Important activities given up.",
      "Recurrent use in hazardous situations.",
      "Continued use despite physical/psychological problems.",
      "Tolerance.",
      "Withdrawal."
    ],
    "keywords": [
      "alcohol",
      "drinking problem",
      "alcoholic",
      "aud"
    ],
    "shortName": "AUD",
    "icd10": "F10.20",
    "prevalence": "~5–8% adults / year",
    "onsetTypical": "Late teens to mid-20s",
    "symptoms": {
      "behavioral": [
        "Binge drinking",
        "Hidden drinking"
      ],
      "physical": [
        "Tolerance",
        "Withdrawal symptoms"
      ]
    },
    "differentials": [
      "Hazardous use without disorder",
      "Other SUDs",
      "Mood/anxiety disorders"
    ],
    "treatments": {
      "therapies": [
        "Motivational Enhancement",
        "CBT",
        "12-step facilitation",
        "Mutual support groups"
      ],
      "medicationClasses": [
        "Naltrexone",
        "Acamprosate",
        "Disulfiram"
      ],
      "lifestyle": [
        "Trigger management",
        "Recovery network"
      ]
    },
    "warnings": [
      "Withdrawal can be life-threatening (delirium tremens)."
    ],
    "relatedIds": [
      "sud_general"
    ]
  },
  {
    "id": "oud",
    "name": "Opioid Use Disorder",
    "category": "substance",
    "overviewSimple": "A pattern of opioid use causing significant harm or distress.",
    "overviewClinical": "Problematic pattern of opioid use leading to clinically significant impairment within 12 months; ≥2 of 11 criteria similar to AUD.",
    "criteriaSummary": [
      "Same 11 criteria pattern adapted to opioids."
    ],
    "keywords": [
      "opioid",
      "heroin",
      "oxycodone",
      "painkillers"
    ],
    "icd10": "F11.20",
    "onsetTypical": "Variable; often follows medical use",
    "treatments": {
      "therapies": [
        "Contingency management",
        "CBT",
        "Mutual support"
      ],
      "medicationClasses": [
        "Buprenorphine",
        "Methadone",
        "Naltrexone"
      ]
    },
    "warnings": [
      "Overdose risk; ensure naloxone access."
    ]
  },
  {
    "id": "cud",
    "name": "Cannabis Use Disorder",
    "category": "substance",
    "overviewSimple": "Problematic cannabis use that causes significant harm.",
    "overviewClinical": "Problematic pattern of cannabis use leading to clinically significant impairment within 12 months.",
    "criteriaSummary": [
      "Same 11 criteria pattern adapted to cannabis."
    ],
    "keywords": [
      "cannabis",
      "marijuana",
      "weed"
    ],
    "icd10": "F12.20",
    "treatments": {
      "therapies": [
        "CBT",
        "MET",
        "Contingency management"
      ]
    }
  },
  {
    "id": "stimulant_ud",
    "name": "Stimulant Use Disorder",
    "category": "substance",
    "overviewSimple": "Problematic use of stimulants like cocaine or amphetamines.",
    "overviewClinical": "Problematic pattern of stimulant use leading to impairment within 12 months.",
    "criteriaSummary": [
      "Same 11 criteria pattern adapted to stimulants."
    ],
    "keywords": [
      "cocaine",
      "amphetamine",
      "meth",
      "stimulant"
    ],
    "icd10": "F15.20",
    "treatments": {
      "therapies": [
        "Contingency management",
        "CBT",
        "Matrix Model"
      ]
    },
    "warnings": [
      "Cardiovascular and psychiatric risks."
    ]
  },
  {
    "id": "tobacco_ud",
    "name": "Tobacco Use Disorder",
    "category": "substance",
    "overviewSimple": "Inability to control tobacco use despite harms.",
    "overviewClinical": "Problematic pattern of tobacco use leading to impairment within 12 months.",
    "criteriaSummary": [
      "Same 11 criteria pattern adapted to tobacco."
    ],
    "keywords": [
      "smoking",
      "tobacco",
      "nicotine",
      "vaping"
    ],
    "icd10": "F17.200",
    "prevalence": "High",
    "treatments": {
      "therapies": [
        "CBT",
        "Quit lines",
        "Behavioral counseling"
      ],
      "medicationClasses": [
        "NRT",
        "Varenicline",
        "Bupropion"
      ]
    }
  },
  {
    "id": "gambling",
    "name": "Gambling Disorder",
    "category": "substance",
    "overviewSimple": "Persistent problematic gambling causing distress.",
    "overviewClinical": "Persistent and recurrent problematic gambling behavior leading to impairment within 12 months; ≥4 of 9 criteria.",
    "criteriaSummary": [
      "Tolerance to gambling amounts.",
      "Restlessness when reducing.",
      "Repeated unsuccessful efforts.",
      "Preoccupation.",
      "Gambles when distressed.",
      "Chases losses.",
      "Lies about gambling.",
      "Jeopardizes relationships/jobs.",
      "Relies on others for money."
    ],
    "keywords": [
      "gambling",
      "betting",
      "casino"
    ],
    "icd10": "F63.0",
    "differentials": [
      "Manic episode",
      "Substance-induced",
      "Personality disorder"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Motivational interviewing",
        "Self-exclusion programs"
      ]
    },
    "warnings": [
      "Suicide risk elevated."
    ]
  },
  {
    "id": "bpd",
    "name": "Borderline Personality Disorder",
    "category": "personality",
    "overviewSimple": "Intense, unstable emotions and relationships, with fear of abandonment and impulsive actions.",
    "overviewClinical": "Pervasive pattern of instability in interpersonal relationships, self-image, affects, and marked impulsivity.",
    "criteriaSummary": [
      "≥5 of 9: abandonment fears, unstable relationships, identity disturbance, impulsivity, suicidal/self-harm, affective instability, emptiness, anger, transient paranoid/dissociative symptoms."
    ],
    "keywords": [
      "borderline",
      "bpd",
      "abandonment",
      "unstable",
      "self harm"
    ],
    "shortName": "BPD",
    "icd10": "F60.3",
    "prevalence": "~1.6–5.9%",
    "onsetTypical": "Early adulthood",
    "symptoms": {
      "emotional": [
        "Mood swings",
        "Emptiness",
        "Anger"
      ],
      "behavioral": [
        "Self-harm",
        "Impulsivity",
        "Reactive relationships"
      ]
    },
    "differentials": [
      "Bipolar",
      "Histrionic PD",
      "PTSD",
      "C-PTSD"
    ],
    "treatments": {
      "therapies": [
        "DBT",
        "Mentalization-Based Therapy",
        "Schema Therapy",
        "TFP"
      ],
      "medicationClasses": [
        "Adjunctive only"
      ]
    },
    "warnings": [
      "High self-harm and suicide risk."
    ],
    "relatedIds": [
      "histrionic",
      "narcissistic",
      "npd"
    ]
  },
  {
    "id": "npd",
    "name": "Narcissistic Personality Disorder",
    "category": "personality",
    "overviewSimple": "Pattern of grandiosity, need for admiration, and lack of empathy.",
    "overviewClinical": "Pervasive pattern of grandiosity, need for admiration, and lack of empathy beginning by early adulthood.",
    "criteriaSummary": [
      "≥5 of 9: grandiose self-importance, fantasies of success, beliefs of being special, requires admiration, entitled, exploitative, lacks empathy, envious, arrogant."
    ],
    "keywords": [
      "narcissist",
      "narcissistic",
      "npd",
      "grandiose"
    ],
    "shortName": "NPD",
    "icd10": "F60.81",
    "differentials": [
      "BPD",
      "Antisocial PD",
      "Histrionic PD"
    ],
    "treatments": {
      "therapies": [
        "Schema therapy",
        "TFP",
        "Mentalization-Based"
      ]
    }
  },
  {
    "id": "aspd",
    "name": "Antisocial Personality Disorder",
    "category": "personality",
    "overviewSimple": "Pattern of disregard for and violation of others' rights since age 15.",
    "overviewClinical": "Pervasive disregard for/violation of others' rights since age 15; conduct disorder evidence before 15; age ≥18.",
    "criteriaSummary": [
      "≥3 of 7: unlawful behavior, deceitfulness, impulsivity, irritability/aggression, reckless disregard, irresponsibility, lack of remorse.",
      "Age ≥18.",
      "Evidence of conduct disorder before 15."
    ],
    "keywords": [
      "antisocial",
      "sociopath",
      "psychopath",
      "aspd"
    ],
    "shortName": "ASPD",
    "icd10": "F60.2",
    "differentials": [
      "Substance use only",
      "Conduct disorder",
      "Manic episode",
      "NPD"
    ],
    "treatments": {
      "therapies": [
        "Cognitive therapy (limited evidence)",
        "Mentalization-based"
      ]
    }
  },
  {
    "id": "histrionic",
    "name": "Histrionic Personality Disorder",
    "category": "personality",
    "overviewSimple": "Pattern of excessive emotionality and attention-seeking.",
    "overviewClinical": "Pervasive pattern of excessive emotionality and attention-seeking.",
    "criteriaSummary": [
      "≥5 of 8: discomfort when not center of attention, sexually seductive behavior, shifting expression of emotions, uses appearance, impressionistic speech, theatrical, suggestible, considers relationships more intimate than they are."
    ],
    "keywords": [
      "histrionic",
      "attention seeking"
    ],
    "icd10": "F60.4",
    "differentials": [
      "BPD",
      "NPD",
      "Dependent PD"
    ],
    "treatments": {
      "therapies": [
        "Psychodynamic",
        "CBT"
      ]
    }
  },
  {
    "id": "avoidant_pd",
    "name": "Avoidant Personality Disorder",
    "category": "personality",
    "overviewSimple": "Pattern of social inhibition, feelings of inadequacy, and hypersensitivity to criticism.",
    "overviewClinical": "Pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation.",
    "criteriaSummary": [
      "≥4 of 7: avoids occupational activities, unwilling to engage unless certain of being liked, restraint in intimate relationships, preoccupation with criticism, inhibited in new situations, views self as inept, reluctant to take personal risks."
    ],
    "keywords": [
      "avoidant",
      "avpd",
      "inadequate",
      "inferior"
    ],
    "icd10": "F60.6",
    "differentials": [
      "Social Anxiety",
      "Dependent PD",
      "Schizoid PD"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Schema therapy"
      ]
    }
  },
  {
    "id": "dependent_pd",
    "name": "Dependent Personality Disorder",
    "category": "personality",
    "overviewSimple": "Excessive need to be cared for, leading to clinging behavior.",
    "overviewClinical": "Pervasive and excessive need to be taken care of leading to submissive and clinging behavior.",
    "criteriaSummary": [
      "≥5 of 8: difficulty with everyday decisions, needs others to assume responsibility, difficulty disagreeing, difficulty initiating projects, excessive lengths to obtain support, uncomfortable alone, urgently seeks new relationship, preoccupied with fears of being alone."
    ],
    "keywords": [
      "dependent",
      "clingy",
      "decisions"
    ],
    "icd10": "F60.7",
    "differentials": [
      "Avoidant PD",
      "BPD"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Assertiveness training"
      ]
    }
  },
  {
    "id": "ocpd",
    "name": "Obsessive-Compulsive Personality Disorder",
    "category": "personality",
    "overviewSimple": "Preoccupation with order, perfectionism, and control at the expense of flexibility.",
    "overviewClinical": "Pervasive preoccupation with orderliness, perfectionism, and mental/interpersonal control.",
    "criteriaSummary": [
      "≥4 of 8: preoccupation with details, perfectionism interfering with completion, excessive devotion to work, overconscientious about morality, inability to discard, reluctance to delegate, miserly, rigid and stubborn."
    ],
    "keywords": [
      "ocpd",
      "perfectionist",
      "controlling",
      "rigid"
    ],
    "shortName": "OCPD",
    "icd10": "F60.5",
    "differentials": [
      "OCD",
      "NPD",
      "Asperger pattern"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Schema therapy"
      ]
    }
  },
  {
    "id": "paranoid_pd",
    "name": "Paranoid Personality Disorder",
    "category": "personality",
    "overviewSimple": "Pervasive distrust and suspiciousness of others' motives.",
    "overviewClinical": "Pervasive distrust and suspiciousness such that others' motives are interpreted as malevolent.",
    "criteriaSummary": [
      "≥4 of 7: suspects exploitation, doubts loyalty, reluctant to confide, reads hidden meanings, persistent grudges, perceives attacks, recurrent suspicions of partner."
    ],
    "keywords": [
      "paranoid pd",
      "distrust",
      "suspicious"
    ],
    "icd10": "F60.0",
    "differentials": [
      "Schizotypal PD",
      "Delusional disorder",
      "Schizoid PD"
    ],
    "treatments": {
      "therapies": [
        "CBT (with strong rapport)",
        "Long-term psychotherapy"
      ]
    }
  },
  {
    "id": "schizoid",
    "name": "Schizoid Personality Disorder",
    "category": "personality",
    "overviewSimple": "Pattern of detachment from social relationships and restricted emotional expression.",
    "overviewClinical": "Pervasive detachment from social relationships and restricted range of emotional expression.",
    "criteriaSummary": [
      "≥4 of 7: neither desires nor enjoys close relationships, prefers solitary activities, little interest in sexual experiences, takes pleasure in few activities, lacks close friends, indifferent to praise/criticism, emotional coldness."
    ],
    "keywords": [
      "schizoid",
      "loner",
      "detached"
    ],
    "icd10": "F60.1",
    "differentials": [
      "Autism",
      "Schizotypal",
      "Avoidant PD"
    ],
    "treatments": {
      "therapies": [
        "Supportive psychotherapy"
      ]
    }
  },
  {
    "id": "did",
    "name": "Dissociative Identity Disorder",
    "category": "dissociative",
    "overviewSimple": "Two or more distinct identity states with gaps in memory and a sense of fragmented self.",
    "overviewClinical": "Disruption of identity characterized by ≥2 distinct personality states with recurrent gaps in recall.",
    "criteriaSummary": [
      "Disruption of identity by ≥2 distinct states.",
      "Recurrent gaps in recall of everyday events.",
      "Significant distress or impairment.",
      "Not part of broadly accepted cultural or religious practice.",
      "Not attributable to substance or medical."
    ],
    "keywords": [
      "did",
      "dissociative identity",
      "multiple personality",
      "alters"
    ],
    "shortName": "DID",
    "icd10": "F44.81",
    "prevalence": "~1.5%",
    "onsetTypical": "Childhood, recognized later",
    "differentials": [
      "PTSD",
      "Borderline PD",
      "Psychotic disorders",
      "Malingering"
    ],
    "treatments": {
      "therapies": [
        "Phase-oriented trauma-informed psychotherapy"
      ]
    },
    "warnings": [
      "High suicide and self-harm risk."
    ]
  },
  {
    "id": "dpdr",
    "name": "Depersonalization/Derealization Disorder",
    "category": "dissociative",
    "overviewSimple": "Persistent feelings of being detached from oneself or surroundings.",
    "overviewClinical": "Persistent or recurrent depersonalization, derealization, or both, with intact reality testing.",
    "criteriaSummary": [
      "Persistent depersonalization/derealization.",
      "Intact reality testing.",
      "Significant distress or impairment.",
      "Not due to substance/medical or another disorder."
    ],
    "keywords": [
      "depersonalization",
      "derealization",
      "unreal",
      "detached self"
    ],
    "icd10": "F48.1",
    "prevalence": "~2%",
    "onsetTypical": "Adolescence",
    "differentials": [
      "Panic attacks",
      "PTSD",
      "Substance intoxication",
      "Seizure"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Grounding skills",
        "Trauma-focused therapy if indicated"
      ]
    }
  },
  {
    "id": "dissociative_amnesia",
    "name": "Dissociative Amnesia",
    "category": "dissociative",
    "overviewSimple": "Inability to recall important personal information, usually after stress or trauma.",
    "overviewClinical": "Inability to recall important autobiographical information, usually traumatic, inconsistent with ordinary forgetting.",
    "criteriaSummary": [
      "Inability to recall important autobiographical information.",
      "Significant distress or impairment.",
      "Not due to substance/medical.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "amnesia",
      "memory gap",
      "cant remember"
    ],
    "icd10": "F44.0",
    "differentials": [
      "Major neurocognitive disorder",
      "Substance-induced amnesia",
      "Malingering"
    ],
    "treatments": {
      "therapies": [
        "Phase-oriented trauma psychotherapy"
      ]
    }
  },
  {
    "id": "alz",
    "name": "Major Neurocognitive Disorder Due to Alzheimer's Disease",
    "category": "neurocognitive",
    "overviewSimple": "A progressive brain disease causing memory loss and cognitive decline.",
    "overviewClinical": "Major neurocognitive disorder with insidious onset and gradual progression of cognitive impairment in ≥2 domains, meeting criteria for probable or possible Alzheimer's etiology.",
    "criteriaSummary": [
      "Significant cognitive decline in ≥1 domain.",
      "Interferes with independence.",
      "Insidious onset, gradual progression.",
      "Probable AD if genetic evidence or clear decline in ≥2 domains."
    ],
    "keywords": [
      "alzheimer",
      "dementia",
      "memory loss",
      "forgetful"
    ],
    "shortName": "Alzheimer's",
    "icd10": "G30 / F02",
    "prevalence": "~5–8% over 65 (rising with age)",
    "onsetTypical": "Older adulthood",
    "symptoms": {
      "cognitive": [
        "Memory loss",
        "Word-finding difficulty",
        "Disorientation",
        "Executive decline"
      ],
      "behavioral": [
        "Wandering",
        "Apathy",
        "Agitation"
      ]
    },
    "differentials": [
      "Vascular dementia",
      "Lewy body dementia",
      "Frontotemporal",
      "Depression-related cognitive impairment"
    ],
    "treatments": {
      "therapies": [
        "Cognitive stimulation",
        "Caregiver support"
      ],
      "medicationClasses": [
        "Cholinesterase inhibitors",
        "Memantine",
        "Anti-amyloid (selective)"
      ]
    },
    "warnings": [
      "Safety planning critical (driving, medications, wandering)."
    ],
    "relatedIds": [
      "mci",
      "vascular_dementia",
      "lbd",
      "ftd"
    ]
  },
  {
    "id": "vascular_dementia",
    "name": "Vascular Neurocognitive Disorder",
    "category": "neurocognitive",
    "overviewSimple": "Cognitive decline caused by reduced blood flow to the brain.",
    "overviewClinical": "Neurocognitive disorder with onset temporally related to ≥1 cerebrovascular event or evidence of cerebrovascular disease.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Clinical features consistent with vascular etiology.",
      "Cerebrovascular evidence by imaging or temporal relationship to events."
    ],
    "keywords": [
      "vascular dementia",
      "stroke dementia"
    ],
    "icd10": "F01",
    "onsetTypical": "Older adulthood",
    "differentials": [
      "Alzheimer",
      "Mixed dementia"
    ],
    "treatments": {
      "therapies": [
        "Vascular risk control",
        "Cognitive rehab"
      ],
      "medicationClasses": [
        "Manage hypertension, diabetes, lipids"
      ]
    }
  },
  {
    "id": "lbd",
    "name": "Neurocognitive Disorder with Lewy Bodies",
    "category": "neurocognitive",
    "overviewSimple": "A type of dementia with fluctuating cognition, visual hallucinations, and movement issues.",
    "overviewClinical": "NCD with core features of fluctuating cognition, recurrent visual hallucinations, and parkinsonism.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Insidious onset and gradual progression.",
      "≥2 core or 1 core + 1 suggestive feature."
    ],
    "keywords": [
      "lewy body",
      "lbd",
      "visual hallucinations elderly"
    ],
    "icd10": "G31.83",
    "onsetTypical": "Older adulthood",
    "differentials": [
      "Alzheimer",
      "Parkinson disease dementia",
      "Delirium"
    ],
    "treatments": {
      "medicationClasses": [
        "Cholinesterase inhibitors",
        "Avoid antipsychotics if possible"
      ],
      "therapies": [
        "Caregiver support"
      ]
    },
    "warnings": [
      "Severe sensitivity to antipsychotics."
    ]
  },
  {
    "id": "ftd",
    "name": "Frontotemporal Neurocognitive Disorder",
    "category": "neurocognitive",
    "overviewSimple": "A dementia affecting personality, behavior, or language earlier than memory.",
    "overviewClinical": "NCD with insidious onset and gradual progression; behavioral or language variant predominant.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Insidious onset.",
      "Either behavioral variant (≥3 features) or language variant."
    ],
    "keywords": [
      "frontotemporal",
      "ftd",
      "personality change",
      "behavioral dementia"
    ],
    "icd10": "G31.09",
    "onsetTypical": "50s–60s",
    "differentials": [
      "Alzheimer",
      "Primary psychiatric disorder",
      "Vascular"
    ],
    "treatments": {
      "therapies": [
        "Behavioral management",
        "Speech therapy"
      ],
      "medicationClasses": [
        "SSRIs for behavior"
      ]
    }
  },
  {
    "id": "parkinsons_ncd",
    "name": "Neurocognitive Disorder Due to Parkinson's Disease",
    "category": "neurocognitive",
    "overviewSimple": "Cognitive decline that develops in the context of Parkinson's disease.",
    "overviewClinical": "NCD that develops in the context of established Parkinson's disease, with insidious onset and gradual progression.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Disturbance occurs in setting of established PD.",
      "No other etiology.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "parkinson dementia"
    ],
    "icd10": "F02.80",
    "treatments": {
      "therapies": [
        "Multidisciplinary care"
      ],
      "medicationClasses": [
        "Cholinesterase inhibitors"
      ]
    }
  },
  {
    "id": "huntington_ncd",
    "name": "Neurocognitive Disorder Due to Huntington's Disease",
    "category": "neurocognitive",
    "overviewSimple": "Cognitive decline associated with Huntington's disease.",
    "overviewClinical": "NCD with insidious onset and gradual progression in person with established or at-risk for Huntington's disease.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Insidious onset and gradual progression.",
      "Clinically established Huntington or risk based on family history/genetic testing."
    ],
    "keywords": [
      "huntington",
      "huntingtons disease"
    ],
    "icd10": "F02.80",
    "treatments": {
      "therapies": [
        "Multidisciplinary care",
        "Genetic counseling"
      ]
    }
  },
  {
    "id": "hiv_ncd",
    "name": "Neurocognitive Disorder Due to HIV Infection",
    "category": "neurocognitive",
    "overviewSimple": "Cognitive impairment associated with HIV infection.",
    "overviewClinical": "NCD attributable to documented HIV infection, not better explained by secondary brain diseases.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Documented HIV infection.",
      "Not better explained by secondary disease."
    ],
    "keywords": [
      "hiv dementia",
      "hiv cognitive"
    ],
    "icd10": "F02.80",
    "treatments": {
      "therapies": [
        "Optimal antiretroviral therapy"
      ]
    }
  },
  {
    "id": "tbi_ncd",
    "name": "Neurocognitive Disorder Due to Traumatic Brain Injury",
    "category": "neurocognitive",
    "overviewSimple": "Cognitive changes following a head injury.",
    "overviewClinical": "NCD attributable to traumatic brain injury with onset immediately after or upon recovery of consciousness, persisting past acute post-injury period.",
    "criteriaSummary": [
      "Criteria for major or mild NCD.",
      "Evidence of TBI.",
      "NCD presents immediately or persists past acute period."
    ],
    "keywords": [
      "tbi",
      "head injury cognitive",
      "post concussion"
    ],
    "icd10": "F02.80",
    "treatments": {
      "therapies": [
        "Cognitive rehabilitation",
        "Multidisciplinary care"
      ]
    }
  },
  {
    "id": "delirium",
    "name": "Delirium",
    "category": "neurocognitive",
    "overviewSimple": "A sudden, fluctuating change in attention and awareness due to a medical cause.",
    "overviewClinical": "Disturbance in attention and awareness developing over a short period, with fluctuating course and additional cognitive disturbance.",
    "criteriaSummary": [
      "Disturbance in attention and awareness.",
      "Develops over hours to days, fluctuates.",
      "Additional cognitive disturbance.",
      "Not better explained by another NCD or coma.",
      "Evidence of physiological cause."
    ],
    "keywords": [
      "delirium",
      "sudden confusion",
      "ICU confusion"
    ],
    "icd10": "F05",
    "prevalence": "High in hospitalized elderly",
    "onsetTypical": "Hours to days",
    "symptoms": {
      "cognitive": [
        "Inattention",
        "Disorientation",
        "Memory deficit"
      ],
      "behavioral": [
        "Agitation or hypoactivity",
        "Sleep–wake disruption"
      ]
    },
    "differentials": [
      "Major NCD",
      "Acute psychosis",
      "Severe depression"
    ],
    "treatments": {
      "therapies": [
        "Treat underlying cause",
        "Reorientation",
        "Sleep–wake support"
      ],
      "medicationClasses": [
        "Low-dose antipsychotics for severe agitation (selective)"
      ]
    },
    "warnings": [
      "Medical emergency; identify and treat underlying cause urgently."
    ]
  },
  {
    "id": "mci",
    "name": "Mild Neurocognitive Disorder",
    "category": "neurocognitive",
    "overviewSimple": "Modest cognitive decline that doesn't yet interfere with independence.",
    "overviewClinical": "Modest cognitive decline in ≥1 domain that does not interfere with independence in everyday activities.",
    "criteriaSummary": [
      "Modest cognitive decline.",
      "Cognitive deficits do not interfere with independence.",
      "Not exclusively during delirium.",
      "Not better explained by another mental disorder."
    ],
    "keywords": [
      "mci",
      "mild cognitive impairment"
    ],
    "icd10": "G31.84",
    "treatments": {
      "therapies": [
        "Cognitive training",
        "Lifestyle interventions",
        "Vascular risk reduction"
      ]
    }
  },
  {
    "id": "ssd",
    "name": "Somatic Symptom Disorder",
    "category": "trauma",
    "overviewSimple": "Distressing physical symptoms with excessive thoughts or behaviors about them.",
    "overviewClinical": "≥1 distressing somatic symptom plus excessive thoughts, feelings, or behaviors related to symptoms, persisting >6 months.",
    "criteriaSummary": [
      "≥1 distressing somatic symptom.",
      "Excessive thoughts/feelings/behaviors related to symptoms.",
      "Persistent (typically >6 months)."
    ],
    "keywords": [
      "somatic",
      "physical symptoms",
      "health worry"
    ],
    "icd10": "F45.1",
    "differentials": [
      "Illness Anxiety Disorder",
      "Conversion Disorder",
      "Anxiety/Depressive disorders"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Mindfulness-based"
      ],
      "medicationClasses": [
        "Antidepressants when comorbid"
      ]
    }
  },
  {
    "id": "iad",
    "name": "Illness Anxiety Disorder",
    "category": "trauma",
    "overviewSimple": "Preoccupation with having or acquiring a serious illness despite few or no symptoms.",
    "overviewClinical": "Preoccupation with having or acquiring a serious illness; somatic symptoms not present or mild.",
    "criteriaSummary": [
      "Preoccupation with serious illness.",
      "Somatic symptoms not present or mild.",
      "High anxiety about health.",
      "Excessive health behaviors or maladaptive avoidance.",
      "≥6 months."
    ],
    "keywords": [
      "health anxiety",
      "hypochondria",
      "illness anxiety"
    ],
    "icd10": "F45.21",
    "differentials": [
      "SSD",
      "OCD",
      "GAD",
      "Delusional disorder"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Mindfulness"
      ],
      "medicationClasses": [
        "SSRIs"
      ]
    }
  },
  {
    "id": "conversion",
    "name": "Functional Neurological Symptom (Conversion) Disorder",
    "category": "trauma",
    "overviewSimple": "Neurological-like symptoms that aren't explained by a neurological disease.",
    "overviewClinical": "≥1 symptom of altered voluntary motor or sensory function with clinical evidence of incompatibility with neurological/medical conditions.",
    "criteriaSummary": [
      "≥1 altered motor/sensory symptom.",
      "Clinical evidence of incompatibility.",
      "Not better explained by another disorder.",
      "Causes distress or impairment."
    ],
    "keywords": [
      "conversion",
      "functional neurological",
      "fnd",
      "non epileptic"
    ],
    "icd10": "F44.4",
    "treatments": {
      "therapies": [
        "Physiotherapy",
        "CBT",
        "Psychoeducation"
      ]
    }
  },
  {
    "id": "factitious",
    "name": "Factitious Disorder",
    "category": "trauma",
    "overviewSimple": "Falsifying physical or psychological symptoms in oneself or another without external reward.",
    "overviewClinical": "Falsification of physical or psychological signs or symptoms or induction of injury or disease, without obvious external rewards.",
    "criteriaSummary": [
      "Falsification of symptoms or induction of injury.",
      "Presents to others as ill or impaired.",
      "Behavior evident in absence of external rewards.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "factitious",
      "munchausen",
      "fake illness"
    ],
    "icd10": "F68.10",
    "differentials": [
      "Malingering",
      "SSD",
      "Conversion"
    ],
    "treatments": {
      "therapies": [
        "Long-term psychotherapy",
        "Care coordination"
      ]
    }
  },
  {
    "id": "enuresis",
    "name": "Enuresis",
    "category": "neuro",
    "overviewSimple": "Repeated involuntary urination at an age when continence is expected.",
    "overviewClinical": "Repeated voiding into bed or clothes ≥2×/week for ≥3 months, in a child ≥5 years.",
    "criteriaSummary": [
      "Repeated voiding ≥2×/week for ≥3 months or causing impairment.",
      "Chronological age ≥5 years.",
      "Not due to substance/medical."
    ],
    "keywords": [
      "bedwetting",
      "enuresis",
      "wetting"
    ],
    "icd10": "F98.0",
    "onsetTypical": "Childhood",
    "treatments": {
      "therapies": [
        "Bell-and-pad alarm",
        "Behavioral interventions"
      ],
      "medicationClasses": [
        "Desmopressin (selective)"
      ]
    }
  },
  {
    "id": "encopresis",
    "name": "Encopresis",
    "category": "neuro",
    "overviewSimple": "Repeated passage of feces into inappropriate places at age ≥4.",
    "overviewClinical": "Repeated passage of feces into inappropriate places (involuntary or intentional) at least monthly for ≥3 months in a child ≥4 years.",
    "criteriaSummary": [
      "Repeated passage of feces ≥1×/month for ≥3 months.",
      "Chronological age ≥4 years.",
      "Not due to substance/medical other than constipation."
    ],
    "keywords": [
      "encopresis",
      "soiling"
    ],
    "icd10": "F98.1",
    "onsetTypical": "Childhood",
    "treatments": {
      "therapies": [
        "Bowel training",
        "Family education"
      ],
      "medicationClasses": [
        "Laxatives (medical)"
      ]
    }
  },
  {
    "id": "gender_dysphoria",
    "name": "Gender Dysphoria",
    "category": "trauma",
    "overviewSimple": "Significant distress related to incongruence between experienced and assigned gender.",
    "overviewClinical": "Marked incongruence between experienced/expressed gender and assigned gender, of ≥6 months duration, with clinically significant distress or impairment.",
    "criteriaSummary": [
      "Marked incongruence ≥6 months.",
      "≥2 of 6 indicators (adolescents/adults).",
      "Significant distress or impairment."
    ],
    "keywords": [
      "gender dysphoria",
      "gender identity"
    ],
    "icd10": "F64.0",
    "treatments": {
      "therapies": [
        "Gender-affirming psychotherapy",
        "Family support"
      ],
      "medicationClasses": [
        "Gender-affirming care per established guidelines"
      ]
    }
  },
  {
    "id": "odd",
    "name": "Oppositional Defiant Disorder",
    "category": "neuro",
    "overviewSimple": "A pattern of angry/irritable mood and defiant behavior in children.",
    "overviewClinical": "Pattern of angry/irritable mood, argumentative/defiant behavior, or vindictiveness lasting ≥6 months.",
    "criteriaSummary": [
      "≥4 symptoms across 3 categories for ≥6 months.",
      "Behaviors with at least one individual not a sibling.",
      "Causes distress or impairment.",
      "Not part of psychosis or mood disorder.",
      "Frequency exceeds developmental norms."
    ],
    "keywords": [
      "odd",
      "defiant",
      "oppositional",
      "argumentative child"
    ],
    "shortName": "ODD",
    "icd10": "F91.3",
    "prevalence": "~3.3% children",
    "onsetTypical": "Preschool to adolescence",
    "differentials": [
      "Conduct Disorder",
      "DMDD",
      "ADHD",
      "Autism"
    ],
    "treatments": {
      "therapies": [
        "Parent management training",
        "Collaborative Problem Solving"
      ]
    },
    "relatedIds": [
      "dmdd",
      "conduct"
    ]
  },
  {
    "id": "conduct",
    "name": "Conduct Disorder",
    "category": "neuro",
    "overviewSimple": "Repetitive behavior violating others' rights or major social rules.",
    "overviewClinical": "Repetitive and persistent pattern in which the basic rights of others or major age-appropriate norms are violated.",
    "criteriaSummary": [
      "≥3 of 15 behaviors in past 12 months across 4 categories.",
      "Significant impairment.",
      "Age-appropriate specifiers."
    ],
    "keywords": [
      "conduct",
      "aggressive child",
      "rule breaking"
    ],
    "icd10": "F91",
    "prevalence": "~2–10% children/adolescents",
    "onsetTypical": "Childhood to adolescence",
    "differentials": [
      "ODD",
      "ADHD",
      "Adjustment Disorder",
      "Bipolar"
    ],
    "treatments": {
      "therapies": [
        "Multisystemic Therapy",
        "Functional Family Therapy",
        "Parent training"
      ]
    }
  },
  {
    "id": "ied",
    "name": "Intermittent Explosive Disorder",
    "category": "neuro",
    "overviewSimple": "Recurrent outbursts of aggression disproportionate to provocation.",
    "overviewClinical": "Recurrent behavioral outbursts representing failure to control aggressive impulses.",
    "criteriaSummary": [
      "Verbal or non-injurious aggression ≥2×/week for 3 months OR ≥3 outbursts causing damage in 12 months.",
      "Aggression grossly out of proportion.",
      "Outbursts not premeditated.",
      "Cause distress, impairment, or legal/financial consequences.",
      "Age ≥6.",
      "Not better explained by another disorder."
    ],
    "keywords": [
      "ied",
      "explosive",
      "outbursts",
      "anger"
    ],
    "shortName": "IED",
    "icd10": "F63.81",
    "onsetTypical": "Childhood to adolescence",
    "differentials": [
      "ADHD",
      "ASPD",
      "BPD",
      "DMDD",
      "Substance-induced"
    ],
    "treatments": {
      "therapies": [
        "CBT",
        "Anger management"
      ],
      "medicationClasses": [
        "SSRIs (selective)",
        "Mood stabilizers"
      ]
    }
  },
  {
    "id": "kleptomania",
    "name": "Kleptomania",
    "category": "neuro",
    "overviewSimple": "Recurrent failure to resist impulses to steal items not needed.",
    "overviewClinical": "Recurrent failure to resist impulses to steal objects not needed for personal use or monetary value.",
    "criteriaSummary": [
      "Recurrent stealing impulses.",
      "Increasing tension before act.",
      "Pleasure or relief during act.",
      "Not committed for anger/vengeance.",
      "Not better explained by conduct disorder, mania, or ASPD."
    ],
    "keywords": [
      "kleptomania",
      "stealing"
    ],
    "icd10": "F63.2",
    "treatments": {
      "therapies": [
        "CBT"
      ],
      "medicationClasses": [
        "SSRIs (selective)",
        "Naltrexone"
      ]
    }
  },
  {
    "id": "pyromania",
    "name": "Pyromania",
    "category": "neuro",
    "overviewSimple": "Deliberate fire setting on more than one occasion driven by fascination.",
    "overviewClinical": "Deliberate and purposeful fire setting on more than one occasion, with tension before and pleasure during/after.",
    "criteriaSummary": [
      "Deliberate fire setting ≥2 occasions.",
      "Tension before, pleasure during.",
      "Fascination with fire.",
      "Not for monetary gain, ideology, anger, or improving living circumstances.",
      "Not better explained by conduct disorder, mania, or ASPD."
    ],
    "keywords": [
      "pyromania",
      "fire setting",
      "arson"
    ],
    "icd10": "F63.1",
    "treatments": {
      "therapies": [
        "CBT",
        "Family interventions"
      ]
    }
  },
  {
    "id": "paraphilic_general",
    "name": "Paraphilic Disorders (Overview)",
    "category": "trauma",
    "overviewSimple": "Atypical sexual interests that cause distress, impairment, or harm to others.",
    "overviewClinical": "Recurrent paraphilic urges/behaviors causing distress, impairment, or risk of harm; specific disorders in DSM-5-TR include voyeuristic, exhibitionistic, frotteuristic, sexual masochism, sexual sadism, pedophilic, fetishistic, transvestic disorders.",
    "criteriaSummary": [
      "Atypical sexual interest ≥6 months.",
      "Causes distress/impairment OR involves nonconsenting persons or risk of harm."
    ],
    "keywords": [
      "paraphilic",
      "paraphilia"
    ],
    "icd10": "F65",
    "treatments": {
      "therapies": [
        "CBT",
        "Risk management",
        "Specialized forensic care"
      ]
    },
    "warnings": [
      "Risk to others must be addressed; mandatory reporting may apply."
    ]
  },
  {
    "id": "cptsd",
    "name": "Complex PTSD (Educational)",
    "category": "trauma",
    "overviewSimple": "Recognized in ICD-11: PTSD plus persistent issues with self-concept, emotion regulation, and relationships after prolonged trauma.",
    "overviewClinical": "ICD-11 construct (not a separate DSM-5-TR diagnosis): PTSD core symptoms plus disturbances in self-organization (affect dysregulation, negative self-concept, interpersonal disturbances) following prolonged repeated trauma.",
    "criteriaSummary": [
      "PTSD criteria met.",
      "Disturbances in self-organization (3 domains).",
      "Significant impairment.",
      "Note: Not a formal DSM-5-TR diagnosis; included for educational completeness."
    ],
    "keywords": [
      "complex ptsd",
      "cptsd",
      "childhood trauma",
      "developmental trauma"
    ],
    "icd10": "F43.81",
    "differentials": [
      "PTSD",
      "BPD",
      "Dissociative disorders"
    ],
    "treatments": {
      "therapies": [
        "Phase-based trauma therapy",
        "STAIR",
        "DBT skills"
      ]
    },
    "relatedIds": [
      "ptsd",
      "bpd",
      "did"
    ]
  }
];