/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { areEqual } from 'Utils/equalityChecks';
// import { countries } from 'Utils/data';

import { FormToast } from 'Components/Forms/FormsTabs';
import { TabContent } from 'Components/Tabs';
import { TemplatesTab } from 'Components/Forms';

// import { InviteTemplates } from 'Containers/InviteTemplates';
// import { formatPhoneNumberInternational } from 'Utils/helpers';
// import { isCompanyAdmin } from 'Utils/roles';

import { firstCompanyIdSelector } from 'Containers/Projects/selectors';
import { useUser } from 'Context/User';
import { UserModel } from 'Containers/User/Models/UserModel';
// import { companyTemplateRolesSelector } from 'Containers/User/selector';
// import { listCompanyTemplateRoles } from 'Containers/User/actions';
import { DeleteFormModal } from 'Components/Forms/FormsTabs/DeleteFormModal';
import { AddForm } from 'Containers/addForms';
import {
  templatesInitialsSelector,
  // totalTemplatesSelector,
  // selectedTemplateSelector,
  templateCreatedSelector,
  templateDeletedSelector,
  fetchingCompanyTemplatesSelector,
  deleteTemplateModalSelector,
  addTemplateModalSelector,
  templateIdToDeleteSelector,
} from '../selectors';
import {
  addTemplate,
  deleteTemplate,
  listCompanyTemplates,
  removeTemplateToDelete,
  resetAddTemplate,
  resetAllTemplates,
  // setTemplateSelected,
  // deleteTemplate,
  // syncRoleToTemplate,
  // detachRoleFromTemplate,
  setTemplateAdded,
  setIsTemplateDeleted,
} from '../actions';
// import {AddForm} from 'Components/Forms/FormsTabs/AddForm';

const TemplatesTabContainer = () => {
  const dispatch = useDispatch();

  const { id: userId }: UserModel = useUser();

  const fetching = useSelector(fetchingCompanyTemplatesSelector, areEqual);
  const firstCompanyId = useSelector(firstCompanyIdSelector, areEqual);
  const isAddModalOpen = useSelector(addTemplateModalSelector, areEqual);
  const templateDeleted = useSelector(templateDeletedSelector, areEqual);
  const templateCreated = useSelector(templateCreatedSelector, areEqual);
  const templatesInitials = useSelector(templatesInitialsSelector, areEqual);
  const isDeleteModalOpen = useSelector(deleteTemplateModalSelector, areEqual);
  const templateIdToDelete = useSelector(templateIdToDeleteSelector, areEqual);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (firstCompanyId) {
      dispatch(listCompanyTemplates(firstCompanyId, userId));
    }
  }, [firstCompanyId, userId]);

  useEffect(() => {
    return () => {
      dispatch(resetAllTemplates());
    };
  }, []);

  useEffect(() => {
    if (templateDeleted) {
      // reload template list
      dispatch(listCompanyTemplates(firstCompanyId, userId));

      // handle toast
      setToastMessage('Form Deleted');
      setShowToast(true);

      setTimeout(() => {
        setToastMessage('');
        setShowToast(false);
      }, 1500);

      // reset deleted status
      dispatch(setIsTemplateDeleted(false));
    }
  }, [templateDeleted, firstCompanyId, userId]);

  useEffect(() => {
    if (templateCreated) {
      // reload template list
      dispatch(listCompanyTemplates(firstCompanyId, userId));

      // handle toast
      setShowToast(true);
      setToastMessage('Form Created');

      setTimeout(() => {
        setToastMessage('');
        setShowToast(false);
      }, 1500);

      dispatch(setTemplateAdded(false));
    }
  }, [templateCreated, firstCompanyId, userId]);

  const modalCloseClick = useCallback((e: any) => {
    e.preventDefault();
    dispatch(removeTemplateToDelete());
  }, []);

  const addModalCloseClick = useCallback((e: any) => {
    e.preventDefault();
    dispatch(resetAddTemplate());
  }, []);

  const deleteTemplateClick = useCallback(() => {
    if (templateIdToDelete) {
      dispatch(deleteTemplate(templateIdToDelete));
    }
  }, [templateIdToDelete]);

  const onAddButton = useCallback((e: any) => {
    e.preventDefault();
    dispatch(addTemplate());
  }, []);

  const closeToast = useCallback((e: any) => {
    e.preventDefault();
    setShowToast(false);
  }, []);

  return (
    <TabContent key="tab-content-templates-people" id="templates" className="show active position-relative">
      <TemplatesTab fetching={fetching} templates={templatesInitials} onButtonClick={onAddButton} />

      <AddForm isOpen={isAddModalOpen} modalCloseClick={addModalCloseClick} />

      <DeleteFormModal
        id=""
        title="Contact Form"
        isOpen={isDeleteModalOpen}
        modalCloseClick={modalCloseClick}
        onDeleteButtonClick={deleteTemplateClick}
      />
      <FormToast isDisplayed={showToast} message={toastMessage} closeToast={closeToast} />
    </TabContent>
  );
};

TemplatesTabContainer.defaultProps = {};

const TemplatesTabContainerMemo = memo(TemplatesTabContainer, areEqual);

export { TemplatesTabContainerMemo as TemplatesTab };
