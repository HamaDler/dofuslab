/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Stat } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: items
// ====================================================

export interface items_items_stats {
  __typename: "ItemStats";
  maxValue: number | null;
  stat: Stat | null;
}

export interface items_items_conditions {
  __typename: "ItemConditions";
  stat: Stat | null;
  isGreaterThan: boolean | null;
  limit: number | null;
}

export interface items_items_itemType_eligibleItemSlots {
  __typename: "ItemSlot";
  id: any;
}

export interface items_items_itemType {
  __typename: "ItemType";
  id: any;
  eligibleItemSlots: items_items_itemType_eligibleItemSlots[];
}

export interface items_items {
  __typename: "Item";
  id: any;
  name: string;
  imageUrl: string;
  stats: items_items_stats[];
  conditions: items_items_conditions[];
  itemType: items_items_itemType;
}

export interface items {
  items: items_items[];
}
