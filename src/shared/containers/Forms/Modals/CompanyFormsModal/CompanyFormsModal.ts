/* eslint-disable */

export type CompanyFormsDataModal = {
  data: Array<CompanyFormsModal>;
};

export type CompanyFormsModal = {
  readonly id: number;
  company_id: string;
  name: string;
  replacement_tags: string;
  status: string;
  template?: string;
  updated_at?: string;
  created_at: string;
  deleted_at: string;
  has_signature: boolean;
};
