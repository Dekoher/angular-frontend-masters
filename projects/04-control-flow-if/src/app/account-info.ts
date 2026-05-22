export interface AccountInfo {
  name: string;
  membershipStatus: 'silver' | 'gold' | 'platinum';
  validThru: string;
  CVV: string;
  testingControlFlows: 'elseIf' | 'switch'
}
