import React, { memo } from 'react';

import { areEqual } from 'Utils/equalityChecks';

import { FormsTabs } from 'Components/Tabs';

import { TemplatesTab } from 'Containers/Forms/FormsTabs';

const FormTabsContainer = () => (
  <FormsTabs id="Form-tabs">
    <TemplatesTab />
  </FormsTabs>
);

FormTabsContainer.defaultProps = {};

const FormTabsContainerMemo = memo(FormTabsContainer, areEqual);

export { FormTabsContainerMemo as FormTabs };
