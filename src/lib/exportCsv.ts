import { DISORDERS, CATEGORIES } from '@/data/disorders';

function esc(v: unknown): string {
  const s = String(v ?? '').replace(/"/g, '""');
  return `"${s}"`;
}

export function buildDisorderCsv(): string {
  const headers = [
    'id', 'name', 'shortName', 'category', 'icd10', 'icd11',
    'prevalence', 'onsetTypical', 'overviewClinical',
    'criteriaCount', 'comorbidities', 'differentials', 'therapies', 'medicationClasses',
  ];
  const rows = DISORDERS.map((d) => [
    d.id, d.name, d.shortName ?? '', d.category, d.icd10 ?? '', d.icd11 ?? '',
    d.prevalence ?? '', d.onsetTypical ?? '', d.overviewClinical,
    d.criteriaSummary.length,
    (d.comorbidities ?? []).join('; '),
    (d.differentials ?? []).join('; '),
    (d.treatments?.therapies ?? []).join('; '),
    (d.treatments?.medicationClasses ?? []).join('; '),
  ]);
  return [headers.map(esc).join(','), ...rows.map((r) => r.map(esc).join(','))].join('\n');
}

export function downloadDisorderCsv() {
  const csv = buildDisorderCsv();
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `psychref-disorders-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export { CATEGORIES };
