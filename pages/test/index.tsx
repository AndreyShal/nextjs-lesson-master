import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import * as path from 'node:path';
import * as fs from 'fs/promises';

export const getStaticProps = async () => {
    const getParsedData = async (): Promise<{title: string}> => {
        const filePath = path.join(process.cwd(), 'public', 'staticData.json')

        try {
            const jsonData = await fs.readFile(filePath)
            return JSON.parse(jsonData.toString())
        } catch (err) {
            return {title: 'no title'}
        }
    }


    const {title} = await getParsedData()

    return {
        props: {
            title
        }
    }
}

type Props = {
    title: string
}

const Test = (props: Props) => {
    const {title} = props

    return (
        <>
            <PageWrapper>
                {title}
            </PageWrapper>
        </>
    )
}

Test.getLayout = getLayout
export default Test;