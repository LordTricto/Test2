import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from 'Components/Icons';
import { areEqual } from 'Utils/equalityChecks';
import { setTemplateToDelete } from 'Containers/Forms/FormsTabs/TemplatesTabs/actions';
import classes from './deleteForm.module.css';

interface Props {
  formId: number;
}

const DeleteFormContainer = ({ formId }: Props) => {
  const dispatch = useDispatch();

  // this is to open the modal, use a selector and pass the formId, and reset the selector on modal cancel or close
  const onClickDeleteIcon = useCallback((e: any) => {
    e.preventDefault();
    dispatch(setTemplateToDelete(formId));
  }, []);

  return <Icon type="trash" className={classes.downloadIcon} onClick={onClickDeleteIcon} />;
};

const DeleteFormContainerMemo = memo(DeleteFormContainer, areEqual);

export { DeleteFormContainerMemo as DeleteFormContainer };
