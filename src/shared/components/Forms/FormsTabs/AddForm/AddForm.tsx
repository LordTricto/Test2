/* eslint-disable no-console */
import React, { memo, useCallback, useEffect, useState } from 'react';

import { areEqual, areEqualShallow } from 'Utils/equalityChecks';

import { PurpleButton } from 'Components/Button';
import { CheckBox } from 'Components/CheckBox';
import { Label } from 'Components/Label';
import { Modal } from 'Components/Modal';
import { TextArea } from 'Components/TextArea';
import { useSelector } from 'react-redux';
import { firstCompanyIdSelector } from 'Containers/Projects/selectors';
import { InviteEmployeesToast } from './InviteEmployeesToast';

import classes from './addForm.module.css';

interface Props {
  isOpen?: boolean;
  showToast: boolean;
  toastMessage: string;
  onSendClick: (e: any) => void;
  onClickCloseAddForm: (e: any) => void;
  header: any;
  footer: any;
}

const AddForm = ({
  isOpen = false,
  showToast,
  toastMessage,
  onSendClick,
  onClickCloseAddForm,
  header,
  footer,
}: Props) => {
  const firstCompanyId = useSelector(firstCompanyIdSelector, areEqual);

  const [isSignatureRequired, setIsSignatureRequired] = useState(false);
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setTemplate('');
      setIsSignatureRequired(false);
    }
  }, [isOpen]);

  const onNameChange = useCallback((e: any) => {
    setName(e.target.value);
  }, []);
  const onTemplateChange = useCallback((e: any) => {
    setTemplate(e.target.value);
  }, []);

  const onRequiredSignatureCheckboxClick = useCallback(() => {
    setIsSignatureRequired((prev) => !prev);
  }, []);

  const onSend = useCallback(() => {
    onSendClick({
      company_id: firstCompanyId,
      name,
      replacement_tags: 'name',
      status: 'active',
      template,
      has_signature: isSignatureRequired,
    });
  }, [name, template, firstCompanyId, isSignatureRequired]);

  return (
    <Modal
      id="addForm"
      classes={classes}
      title="Add Contract Form"
      isOpen={isOpen}
      dataBsBackdrop="static"
      dataBsKeyboard="false"
      leftHeaderIcon="projects"
      modalHeader
      modalCloseClick={onClickCloseAddForm}
      toast={<InviteEmployeesToast showToast={showToast} message={toastMessage} />}
    >
      {header}
      <div className={classes.AddFormContent}>
        <div className={classes.AddFormName}>
          <Label ariaLabel="Name" className={classes.label} htmlFor="name">
            Form Name
          </Label>
          <input
            id="name"
            value={name}
            name="name"
            type="text"
            className={`${classes.validateField} `}
            aria-label="Name"
            autoComplete="off"
            onChange={onNameChange}
          />
        </div>
        <div className={classes.AddFormSignature}>
          <Label ariaLabel="Required Signature" className={classes.label} htmlFor="requiredSignature">
            Required Signature
          </Label>
          <CheckBox
            checked={isSignatureRequired}
            className={classes.inputText}
            onChange={onRequiredSignatureCheckboxClick}
          />
        </div>
        <div className={classes.AddFormTemplate}>
          <Label ariaLabel="Contact Template" className={classes.label} htmlFor="contactTemplate">
            Contact Template
          </Label>
          <div className={classes.AddFormTemplateBody}>
            <div className={classes.AddFormSignatureAside}>
              <span>~~~~name~~~~~</span>
              <span>~~~~project~~~~~</span>
              <span>~~~~job_no~~~~~</span>
              <span>~~~~company~~~~~</span>
              <span>~~~~current_date~~~~~</span>
              <span>~~~~date_of_loss~~~~~</span>
              <span>~~~~company_address~~~~~</span>
              <span>~~~~policy_holder_name~~~~~</span>
              <span>~~~~policy_number~~~~~</span>
              <span>~~~~claim_number~~~~~</span>
              <span>~~~~input~~~~~</span>
              <span>~~~~checkbox~~~~~</span>
            </div>
            <div className={classes.AddFormSignatureMain}>
              <TextArea
                name="name"
                value={template}
                ariaLabel="Template"
                placeholder="Template"
                minRows={20}
                maxRows={20}
                cols={32}
                rows={20}
                maxLength={255}
                onChange={onTemplateChange}
                className={classes.textArea}
                resizable={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.AddFormSignatureFooter}>
        <div>
          <PurpleButton
            className={classes.sendButton}
            type="button"
            onClick={onSend}
            disabled={name.length < 1 || template.length < 1}
          >
            <span>Add Contract</span>
          </PurpleButton>
        </div>
      </div>
      {footer}
    </Modal>
  );
};

AddForm.defaultProps = {
  isOpen: false,
};

// This to allows default props
const AddFormMemo = memo(AddForm, areEqualShallow);

export { AddFormMemo as AddForm };
