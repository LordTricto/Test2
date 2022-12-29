// import { formatPhone, getFirstLetterUppercase } from 'Utils/helpers';
import {
  SET_TEMPLATES,
  // SET_TEMPLATE_SELECTED,
  // TEMPLATE_DELETED,
  FETCHING_COMPANY_TEMPLATES,
  templatesActionTypes,
  SET_TEMPLATE_TO_DELETE,
  REMOVE_TEMPLATE_TO_DELETE,
  TEMPLATE_DELETED,
  SET_ADD_TEMPLATE,
  RESET_ADD_TEMPLATE,
  TEMPLATE_ADDED,
  TEMPLATE_CREATE_ERRORS,
  RESET_TEMPLATES,
} from './actions';

const initialState = {
  templatesInitials: [],
  // totalTemplate: 0,
  // selectedEmployee: {},
  templateCreated: false,
  fetchingCompanyTemplates: true,
  templateDeleted: false,
  templateIdToDelete: '',
  templateCreateErrors: null,

  // Modals
  isDeleteModalOpen: false,
  isAddModalOpen: false,
};

export const templatesReducer = (state = initialState, action: templatesActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TEMPLATES: {
      return {
        ...state,
        templatesInitials: action.payload.data,
        // totalTemplate, // set total to show or hide the placeholders
        fetchingCompanyTemplates: false, // we'll hide the spinner once everything processed
      };
    }
    case SET_TEMPLATE_TO_DELETE:
      return {
        ...state,
        isDeleteModalOpen: true,
        templateIdToDelete: payload,
      };
    case FETCHING_COMPANY_TEMPLATES:
      return {
        ...state,
        fetchingCompanyTemplates: payload,
      };
    case TEMPLATE_DELETED:
      return {
        ...state,
        templateDeleted: payload,
      };
    case RESET_TEMPLATES:
      return {
        ...state,
        templatesInitials: [],
        templateCreated: false,
        fetchingCompanyTemplates: true,
        templateDeleted: false,
        templateIdToDelete: '',
        templateCreateErrors: null,
        isDeleteModalOpen: false,
        isAddModalOpen: false,
      };
    case REMOVE_TEMPLATE_TO_DELETE:
      return {
        ...state,
        isDeleteModalOpen: false,
        templateIdToDelete: '',
        // templateDeleted: false,
      };
    case SET_ADD_TEMPLATE:
      return {
        ...state,
        isAddModalOpen: true,
        templateCreated: false,
      };
    case RESET_ADD_TEMPLATE:
      return {
        ...state,
        isAddModalOpen: false,
        templateCreated: false,
      };
    case TEMPLATE_ADDED:
      return {
        ...state,
        templateCreated: payload,
        // templateDeleted: false,
      };
    case TEMPLATE_CREATE_ERRORS:
      return {
        ...state,
        templateCreateErrors: payload,
      };
    default:
      return state;
  }
};
