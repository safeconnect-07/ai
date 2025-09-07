
export enum IssueType {
  Bug = 'Bug',
  Vulnerability = 'Vulnerability',
  CodeSmell = 'Code Smell',
}

export interface Issue {
  type: IssueType;
  line: number;
  description: string;
  suggestion: string;
}

export interface AnalysisReport {
  score: number;
  summary: string;
  issues: Issue[];
}
