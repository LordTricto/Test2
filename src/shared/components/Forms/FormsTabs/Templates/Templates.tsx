import { CompanyFormsModal } from 'Containers/Forms/Modals/CompanyFormsModal';
import { DeleteForm, NoFormsTable } from 'Containers/Forms';
import React, { memo } from 'react';
import { Table, TableBody, TableColumn, TableHeader, TableRow, Th } from 'Components/Table';

import { areEqual } from 'Utils/equalityChecks';
import { formatDate } from 'Utils/helpers';
import classes from './templates.module.css';

interface Props {
  iconType?: string;
  templates: CompanyFormsModal[];
}

const Templates = ({ iconType, templates }: Props) =>
  templates.length > 0 ? (
    <Table className={`table ${classes.projectListWrapper}`}>
      <TableHeader>
        <TableRow>
          <Th>Template Name</Th>
          <Th>Date Created</Th>
          <Th />
        </TableRow>
      </TableHeader>
      <TableBody>
        {templates.map((_temp: CompanyFormsModal) => (
          <TableRow key={_temp.id}>
            <TableColumn dataId={_temp.id}>
              <p className={classes.street}>{_temp.name}</p>
            </TableColumn>
            <TableColumn dataId={_temp.id} className={classes.columnContent}>
              <p className={classes.numberAndDate}>{formatDate(_temp.created_at, 'PP')}</p>
            </TableColumn>
            <TableColumn>
              <DeleteForm formId={_temp.id} />
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoFormsTable iconType={iconType} />
  );

Templates.defaultProps = {
  iconType: 'my',
};

const TemplatesMemo = memo(Templates, areEqual);

export { TemplatesMemo as Templates };
