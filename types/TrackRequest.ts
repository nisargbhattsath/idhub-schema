import type { TargetSystem } from "./TargetSystem";
import type { Entitlement } from "./Entitlement";

export type TargetSystemPayload = Omit<
  TargetSystem,
  "_id" | "archiveId" | "collection" | "createdOn"
> & {
  /**
   * User Reason for adding this app
   */
  reason: string;
  entitlements: Array<
    Omit<
      Entitlement,
      | "_id"
      | "collection"
      | "createdOn"
      | "lastSyncedOn"
      | "targetSystemDisplayName"
      | "targetSystemId"
      | "targetSystemName"
    >
  >;
};

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
  justification?: string;
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
