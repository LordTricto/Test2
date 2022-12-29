/* eslint-disable no-console */
import React, { memo, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { areEqual } from 'Utils/equalityChecks';
import { AddForm } from 'Components/Forms/FormsTabs/AddForm';
import { createTemplate, resetAddTemplate } from 'Containers/Forms/FormsTabs/TemplatesTabs/actions';
import { templateCreatedSelector } from 'Containers/Forms/FormsTabs/TemplatesTabs/selectors';

interface Props {
  isOpen?: boolean;
  modalCloseClick: (e: any) => void;
  header?: any;
  footer?: any;
}

const AddFormContainer = ({ isOpen, modalCloseClick, header, footer }: Props) => {
  const dispatch = useDispatch();

  const templateCreated = useSelector(templateCreatedSelector, areEqual);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // email field is only cleared when email is sent and the modal is closed
  // API errors
  //  const errors = {
  //     name: useSelector(nameErrorSelector, areEqual),
  //     template: useSelector(templateErrorSelector, areEqual),
  //   };

  useEffect(() => {
    if (templateCreated) {
      setShowToast(true);
      dispatch(resetAddTemplate());
    }
  }, [templateCreated]);

  // Toast timeout
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }
  }, [showToast]);

  const onSendClick = useCallback((e: any) => {
    dispatch(createTemplate(e));
    setToastMessage('Form added');
  }, []);

  console.log(templateCreated);

  return (
    <div>
      <AddForm
        header={header}
        footer={footer}
        isOpen={isOpen}
        onSendClick={onSendClick}
        showToast={showToast}
        toastMessage={toastMessage}
        onClickCloseAddForm={modalCloseClick}
      />
    </div>
  );
};

AddFormContainer.defaultProps = {
  isOpen: false,
  header: null,
  footer: null,
};

// This allows for default props if they exist
const AddFormContainerMemo = memo(AddFormContainer, areEqual);

export { AddFormContainerMemo as AddForm };
