import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';
import './sample-page.scss';

import { Section, Main, PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';

import { Button } from '@patternfly/react-core';

const SampleComponent = asyncComponent(() => import('../../PresentationalComponents/SampleComponent/sample-component'));
// const PageHeader2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header'));
// const PageHeaderTitle2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header-title'));

const data = {
    machine: {
        name: 'my.upgraded.machine.com',
        id: '1be168ff837f043bde17c0314341c84271047b31'
    }
};

const getLinkForMachine = machine => {
    return <Link to={ `/inventory/${machine.id}` }><i className='pf-icon pf-icon-monitoring'></i>{ `${machine.name}` }</Link>;
};

class SamplePage extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Leapp Upgrade Report'/>
                    <p>{ getLinkForMachine(data.machine) }</p>
                </PageHeader>
                <Main>
                    <h1> Sample Component </h1>
                    <SampleComponent> Sample Component </SampleComponent>
                    <h1> Cards </h1>
                    <h1> Buttons </h1>
                    <Section type='button-group'>
                        <Button variant='primary'> PF-Next Primary Button </Button>
                        <Button variant='secondary'> PF-Next Secondary Button </Button>
                        <Button variant='tertiary'> PF-Next Tertiary Button </Button>
                        <Button variant='danger'> PF-Next Danger Button </Button>
                    </Section>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(SamplePage);
