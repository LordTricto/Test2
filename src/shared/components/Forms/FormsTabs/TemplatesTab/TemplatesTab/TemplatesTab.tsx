/* eslint-disable no-console */
import React, { memo } from 'react';
import { Spinner } from 'Components/Spinner';
import { PurpleButton } from 'Components/Button/PurpleButton';
import { areEqual } from 'Utils/equalityChecks';
import { CompanyFormsModal } from 'Containers/Forms/Modals';
import classes from './templatesTab.module.css';
import { Templates } from '../../Templates/Templates';

interface Props {
  fetching: boolean;
  templates: CompanyFormsModal[];
  onButtonClick: (e: any) => void;
}

const TemplatesTab = ({ templates, fetching, onButtonClick }: Props) => (
  <div className={classes.employeesContent}>
    <div className={`d-flex justify-content-start align-items-center ${classes.contentHeader}`}>
      <h2>Form Templates</h2>
      <PurpleButton className={classes.inviteButton} onClick={onButtonClick}>
        Add +
      </PurpleButton>
    </div>
    {fetching && <Spinner loading />}
    {!fetching && <Templates iconType="my" templates={templates} />}
  </div>
);

const TemplatesTabMemo = memo(TemplatesTab, areEqual);

export { TemplatesTabMemo as TemplatesTab };
