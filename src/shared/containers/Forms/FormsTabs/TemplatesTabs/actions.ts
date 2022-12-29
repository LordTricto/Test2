/* eslint-disable */
import { handleApiRequest } from 'Utils/handleApiRequest';
import { FORM_ERRORS } from 'Containers/Core/actions';

export const SET_TEMPLATES = 'SET_TEMPLATES';
export const RESET_TEMPLATES = 'RESET_TEMPLATES';
export const SET_TEMPLATE_SELECTED = 'SET_TEMPLATE_SELECTED';
export const SET_TEMPLATE_TO_DELETE = 'SET_TEMPLATE_TO_DELETE';
export const SET_ADD_TEMPLATE = 'SET_ADD_TEMPLATE';
export const RESET_ADD_TEMPLATE = 'RESET_ADD_TEMPLATE';
export const REMOVE_TEMPLATE_TO_DELETE = 'REMOVE_TEMPLATE_TO_DELETE';
export const FETCHING_COMPANY_TEMPLATES = 'FETCHING_COMPANY_TEMPLATES';
export const DELETE_TEMPLATE = 'DELETE_TEMPLATE';
export const TEMPLATE_DELETED = 'TEMPLATE_DELETED';
export const TEMPLATE_CREATE_ERRORS = 'TEMPLATE_CREATE_ERRORS';
export const TEMPLATE_ADDED = 'TEMPLATE_ADDED';

interface ActionTypes {
  SET_TEMPLATES: object;
  RESET_TEMPLATES: any;
  SET_ADD_TEMPLATE: string;
  RESET_ADD_TEMPLATE: string;
  SET_TEMPLATE_SELECTED: object;
  TEMPLATE_CREATE_ERRORS: any;
  SET_TEMPLATE_TO_DELETE: string;
  REMOVE_TEMPLATE_TO_DELETE: boolean;
  FETCHING_COMPANY_TEMPLATES: boolean;
  DELETE_TEMPLATE: string;
  TEMPLATE_DELETED: boolean;
  TEMPLATE_ADDED: boolean;
}

interface MessageAction {
  type: keyof ActionTypes;
  payload: any;
}

export type templatesActionTypes = MessageAction;

export const listCompanyTemplates =
  (companyId: string, userId: number) =>
  async (dispatch: any, _getState = null, utils: any) => {
    // we'll enable the spinner
    setFetchingTemplates(true);
    const response = await handleApiRequest(dispatch, utils.Api.get(`/companies/${companyId}/contract-forms`));
    if (response?.data) {
      dispatch({
        type: SET_TEMPLATES,
        payload: { data: response.data, userId },
      });
    } else {
      // we'll disable the spinner if something goes wrong with the API
      setFetchingTemplates(false);
    }
  };

export const deleteTemplate =
  (contractId: string) =>
  async (dispatch: any, _getState = null, utils: any) => {
    // Ensure we have an id
    const response = await handleApiRequest(dispatch, utils.Api.delete(`/contract-forms/${contractId}`, {}));
    if (typeof response === 'string') {
      dispatch(removeTemplateToDelete());
      dispatch(setIsTemplateDeleted(true));
    }
  };

export const createTemplate =
  (data: any) =>
  async (dispatch: any, _getState = null, utils: any) => {
    const response = await handleApiRequest(dispatch, utils.Api.post(`/contract-forms`, data), TEMPLATE_CREATE_ERRORS);
    if (response?.data) {
      dispatch(resetAddTemplate());
      dispatch(setTemplateAdded(true));
    }
  };

/*
 * NON API THUNKS
 * */

export const setTemplateSelected = (selected: object) => async (dispatch: any) => {
  dispatch({
    type: SET_TEMPLATE_SELECTED,
    payload: selected,
  });
};
export const setTemplateToDelete = (selectedId: number) => async (dispatch: any) => {
  dispatch({
    type: SET_TEMPLATE_TO_DELETE,
    payload: selectedId,
  });
};
export const removeTemplateToDelete = () => async (dispatch: any) => {
  dispatch({
    type: REMOVE_TEMPLATE_TO_DELETE,
  });
};

export const setFetchingTemplates = (value: boolean) => (dispatch) => {
  dispatch({
    type: FETCHING_COMPANY_TEMPLATES,
    payload: value,
  });
};

export const setIsTemplateDeleted = (value: boolean) => async (dispatch: any) => {
  dispatch({
    type: TEMPLATE_DELETED,
    payload: value,
  });
};

export const addTemplate = () => async (dispatch: any) => {
  dispatch({
    type: SET_ADD_TEMPLATE,
  });
};
export const resetAddTemplate = () => async (dispatch: any) => {
  dispatch({
    type: RESET_ADD_TEMPLATE,
  });
};
export const setTemplateAdded = (value: boolean) => async (dispatch: any) => {
  dispatch({
    type: TEMPLATE_ADDED,
    payload: value,
  });
};

export const resetAllTemplates = () => async (dispatch: any) => {
  dispatch({
    type: RESET_TEMPLATES,
  });
};
