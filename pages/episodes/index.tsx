import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Card} from '../../components/Card/Card';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';

export const getServerSideProps = async ({res}:any) => {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=100')

    const episodes = await API.rickAndMorty.getEpisodes()

    if(!episodes) {
        return  {
            notFound: true
        }
    }

    return {
        props: {
            episodes
        }
    }
}

type Props = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: Props) => {
    const {episodes} = props

    const episodesList = episodes.results.map(episode => (
        <Card key={episode.id} name={episode.name}/>
    ))
    return (
        <>
            <PageWrapper>
                {episodesList}
            </PageWrapper>
        </>
    )
}

Episodes.getLayout = getLayout
export default Episodes;