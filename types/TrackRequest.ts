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

export type EntitlementForm = {
  dataType: string;
  description: string;
  name: string;
  options?: string[];
  required: boolean;
};

export type TargetSystemEntitlement = {
  approvalWorkflow: string;
  approvalWorkflowDisplayName: string;
  description: string;
  displayName: string;
  /**
   * Comma separated list used for certification tag list
   */
  isCertifiable: string;
  isRequestable: boolean;
  name: string;
  performer: string;
  riskLevel: string;
  /**
   * Comma separated list used for Search Catalog
   */
  searchTags: string;
  type: string;
  form: EntitlementForm[];
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

export type TargetSystemPayload = {
  IDM: string;
  /**
   * IT Owner Login
   */
  ITOwner: string;
  applicationURL?: string;
  approvalWorkflow: string;
  approvalWorkflowDisplayName: string;
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
  /**
   * User Reason for adding this app
   */
  reason: string;
  requestFormId?: string;
  requestFormName?: string;
  riskLevel: string;
  schedule: {
    repeat: string;
    [key: string]: string;
  };
  /**
   * Comma separated list used for Search Catalog
   */
  searchTags: string;
  trustedReconciliation: boolean;
  workflowRequestFormId?: string;
  form: TargetSystemForm[];
  entitlements: TargetSystemEntitlement[];
} & TargetSystemIntegrationType;

export type TrackRequestRequester = {
  displayName: string;
  email: string;
  login: string;
};

export type TrackRequestPayload = {
  entityId: string;
  entityType: "TargetSystem" | string;
  "target-system": TargetSystemPayload;
  type: "create" | string;
};

export type TrackRequestHistory = {
  diff: {
    payload: TrackRequestPayload;
    requester: TrackRequestRequester;
    status: string;
  };
  snapshot: Omit<TrackRequest, "history">;
  timeStamp: string;
};

export type TrackRequest = {
  _id: {
    $oid: string;
  };
  IDM: string;
  collection: "UserRequest";
  /**
   * Creation Date
   * @type Date
   */
  createdOn: string;
  /**
   * User Entered Justification for Request
   */
  justification: string;
  requestType: "Catalog";
  /**
   * Request Creator Info
   */
  requester: TrackRequestRequester;
  resolution: "Initiated" | "Success" | string;
  /**
   * Status of Request
   * @description This status is managed by Workflow Engine
   */
  status: string;
  /**
   * Short Description about Request
   */
  summary: string;
  workflowName: string;
  payload: TrackRequestPayload;
  history: TrackRequestHistory[];
};
