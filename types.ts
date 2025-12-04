export interface CommissionTier {
  min: number;
  max: number | null;
  rate: number;
}

export interface BonusRules {
  hoursFor50: number;
  hoursFor100: number;
  minBCPH: number;
}

export interface CalculatorState {
  hoursWorked: number;
  callsPerHour: number;
}
