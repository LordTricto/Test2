import React, { memo } from 'react';

import { FormsTabs } from 'Components/Tabs';
import { TemplatesTab } from 'Containers/Forms/FormsTabs';
import { areEqual } from 'Utils/equalityChecks';

const FormsTabsContainer = () => (
  <>
    <FormsTabs id="forms-tabs">
      <TemplatesTab />
    </FormsTabs>
  </>
);

const FormsTabsContainerMemo = memo(FormsTabsContainer, areEqual);

export { FormsTabsContainerMemo as FormsTabs };
