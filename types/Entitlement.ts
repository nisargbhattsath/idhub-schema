export type EntitlementForm = {
  dataType: string;
  description: string;
  name: string;
  options?: string[];
  required: boolean;
};

export type EntitlementWorkflowConfig = {
  approvalWorkflow: string;
  approvalWorkflowDisplayName: string;
} & Record<string, string>;

export type Entitlement = {
  _id: {
    $oid: string;
  };
  collection: "Entitlement";
  createdOn: string;
  lastSyncedOn:
    | string
    | {
        $date: {
          $numberLong: string;
        };
      };
  targetSystemDisplayName: string;
  targetSystemId: string;
  targetSystemName: string;

  IDM: string;
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
  workflowRequestFormId: string;
  form: EntitlementForm[];
} & EntitlementWorkflowConfig;
