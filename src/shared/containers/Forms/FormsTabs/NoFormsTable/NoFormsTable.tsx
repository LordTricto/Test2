import React, { memo } from 'react';

import { NoFormsTable } from 'Components/Forms/FormsTabs/NoFormsTable';
import { areEqual } from 'Utils/equalityChecks';

interface Props {
  iconType: string;
}

const NoFormsTableContainer = ({ iconType }: Props) => <NoFormsTable iconType={iconType} />;

const NoFormsTableContainerMemo = memo(NoFormsTableContainer, areEqual);

export { NoFormsTableContainerMemo as NoFormsTable };
