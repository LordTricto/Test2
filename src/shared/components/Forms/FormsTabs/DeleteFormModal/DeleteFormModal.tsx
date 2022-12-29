import React, { memo } from 'react';

import { Modal } from 'Components/Modal';
import { areEqual } from 'Utils/equalityChecks';
import { Button } from 'Components/Button';

import classes from './deleteFormModal.module.css';

interface Props {
  id: string;
  title: string;
  isOpen: boolean;
  coreFetching?: boolean;
  modalCloseClick: (e: any) => void;
  onDeleteButtonClick?: (e: any) => void;
}
const DeleteFormModal = ({ id, title, isOpen, coreFetching, modalCloseClick, onDeleteButtonClick }: Props) => (
  <div className={classes.deleteFormModalWrapper}>
    <Modal
      id={id && id.toString()}
      classes={classes}
      title={`Delete ${title}`}
      isOpen={isOpen}
      modalHeader
      modalFooter
      footerButtons={
        <Button
          className={`${classes.delete}`}
          id={id && id.toString()}
          onClick={onDeleteButtonClick}
          disabled={coreFetching}
        >
          Delete
        </Button>
      }
      closeButtonText="Cancel"
      dataBsBackdrop="static"
      dataBsKeyboard="false"
      modalCloseClick={modalCloseClick}
    >
      <div className={classes.deleteModalCopy}>
        <p>Are you sure you want to delete this form?</p>
      </div>
    </Modal>
  </div>
);
DeleteFormModal.defaultProps = {
  coreFetching: false,
  onDeleteButtonClick: undefined,
};
const DeleteFormModalMemo = memo(DeleteFormModal, areEqual);

export { DeleteFormModalMemo as DeleteFormModal };
