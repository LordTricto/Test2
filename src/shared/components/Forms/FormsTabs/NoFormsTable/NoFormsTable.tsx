import React, { memo } from 'react';
import { Table, TableHeader, TableRow, Th } from 'Components/Table';

import { Icon } from 'Components/Icons';
import { areEqual } from 'Utils/equalityChecks';
import classes from './noFormsTable.module.css';

interface Props {
  iconType: string;
}

const NoFormsTable = ({ iconType }: Props) => (
  <div>
    <Table className={`table ${classes.projectListWrapper}`}>
      <TableHeader>
        <TableRow>
          <Th>Address</Th>
          <Th>Project Number</Th>
          <Th>Project Alias</Th>
          <Th>Date Created</Th>
          <Th />
        </TableRow>
      </TableHeader>
    </Table>
    <div className={`d-flex justify-content-center align-items-center flex-column w-100 ${classes.noProjectsContent}`}>
      <p className={classes.noProjectsText}>No projects yet. Create a new project</p>
      {iconType === 'my' && <Icon type="rocketemblem" />}
    </div>
  </div>
);

NoFormsTable.defaultProps = {};

const NoFormsTableMemo = memo(NoFormsTable, areEqual);

export { NoFormsTableMemo as NoFormsTable };
