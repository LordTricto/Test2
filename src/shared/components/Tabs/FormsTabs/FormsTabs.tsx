import React, { ReactNode, memo, useState } from 'react';

import { Icon } from 'Components/Icons';
import { areEqual } from 'Utils/equalityChecks';
import { width } from 'Utils/screen';
import { Tab } from '../Tab';
import classes from './forms.tabs.module.css';

interface Props {
  id?: string;
  className?: string;
  children?: ReactNode;
}

const createTabs = (activeTab: string, onTabClick: (e: any) => void) => (
  <>
    <Tab
      key="forms-tab"
      id="forms-tab"
      className={`${classes.flexCenter} ${classes.button} ${
        activeTab === 'forms-tab' ? `active ${classes['active-Tab']}` : ''
      }`}
      target="forms"
      onClick={onTabClick}
    >
      <>
        <Icon type="projects" className={classes.icon} />
        <span>Contract Forms</span>
      </>
    </Tab>
  </>
);

/*
  In order to override bootstraps active class on tabs, there is a click event onTabClick, which will get the name of the tab that was clicked
  and then trigger a re-render.  Note in the createTabs method above, where the active class is added or not, based on which tab was clicked.
*/
const FormsTabs = ({ id = 'tabs', className, children }: Props) => {
  // We want to set the initial active tab to the first tab in the incoming tabList
  const [activeTab, setActiveTab] = useState('forms-tab');

  const onTabClick = (e: any) => {
    // Occasionally, e.currentTarget is undefined.  Set the current activeTab if we run into this bug
    setActiveTab(e?.currentTarget?.id || activeTab);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className={classes.peopleTabWrapper}>
            <div className={classes.tabsContainer}>
              <ul
                className={`nav nav-tabs ${width < 576 ? 'flex-sm-column' : 'width'}   ${classes.tabs} ${
                  className || ''
                }`}
                id={id}
                role="tablist"
              >
                {createTabs(activeTab, onTabClick)}
              </ul>
            </div>
            <div className="tab-content w-100 h-100 d-inline-block" id="peopleTabContent" style={{ height: 'auto' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormsTabs.defaultProps = {
  id: undefined,
  className: undefined,
  children: undefined,
};
const FormsTabsMemo = memo(FormsTabs, areEqual);
export { FormsTabsMemo as FormsTabs };
