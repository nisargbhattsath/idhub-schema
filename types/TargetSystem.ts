export type TargetSystemForm = {
  dataType: string;
  isAccountName: boolean;
  isDisabled: boolean;
  isMultiValue: boolean;
  isReconKey: boolean;
  isRequired: boolean;
  isVisible: boolean;
  matchingAttribute: string;
  name: string;
  syncDirection: string;
  options?: string[];
};

export type TargetSystemIntegrationType =
  | {
      integrationLevel: "Disconnected";
      schedule: {
        repeat: "Do not repeat";
      };
    }
  | {
      integrationLevel: "Connected";
      connectionCredentials: string;
      connectorCredentials: string;
      connectorPassword: string;
      connectorURL: string;
      connectorUserName: string;
      reconSchedule: string;
      reconScheduleEndDate: string;
      reconciliationSchedule: string;
      schedule: {
        repeat: string;
        [key: string]: string;
      };
    };

export type TargetSystemWorkflowConfig = {
  approvalWorkflow: string;
  approvalWorkflowDisplayName: string;
} & Record<string, string>;

export type TargetSystem = {
  _id: {
    $oid: string;
  };
  collection: "TargetSystem";
  createdOn: string;
  archiveId?: string;

  IDM: string;
  /**
   * IT Owner Login
   */
  ITOwner: string;
  applicationURL?: string;

  authenticationType: string;
  /**
   * Business Owner Login
   */
  businessOwner: string;
  description: string;
  displayName: string;
  /**
   * Comma separated list used for certification tag list
   */
  isCertifiable: string;
  isRequestable: boolean;
  logoURL?: string;
  name: string;
  performer: string;
  requestFormId?: string;
  requestFormName?: string;
  riskLevel: string;
  /**
   * Comma separated list used for Search Catalog
   */
  searchTags: string;
  trustedReconciliation: boolean;
  workflowRequestFormId?: string;
  form: TargetSystemForm[];
} & TargetSystemIntegrationType &
  TargetSystemWorkflowConfig;
