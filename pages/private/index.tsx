import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import * as path from 'node:path';
import * as fs from 'fs/promises';
import {LoginNavigate} from '../../hoc/LoginNavigate';

const Private = () => {

    return (
        <LoginNavigate>
            <PageWrapper>
                PRIVATE PAGE
            </PageWrapper>
        </LoginNavigate>
    )
}

Private.getLayout = getLayout
export default Private;