import {
    useFragment,
    graphql
} from 'react-relay'
import environment from '../Enviroment'
import People from './People'
// import graphql from 'babel-plugin-relay/macro'

const PeopleListQuery = graphql`
    query PeopleListQuery {
        ...People_person
    }
`

const PeopleList = ({fragmentRef}) => {

    const data = useFragment(PeopleListQuery, fragmentRef)
    if (data.allPersons) {
        return <People person={data.allPersons} /> 
    }
    return <div>Error!!!!</div>
}

export default PeopleList