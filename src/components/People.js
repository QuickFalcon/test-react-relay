import Person from './Person'
import {
    createFragmentContainer,
    // graphql
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const People = (props) => {

    /*const people = [
        {
            name: 'Francisco',
            phone: '9999999999999'
        },
        {
            name: 'Lulu',
            phone: '222222'
        }
    ] */
    const { person } = props

    console.log('@@@People-props', props)

    return (
        <div>
            {person.allPersons.edges.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default createFragmentContainer( People, {link: graphql`
    fragment People_person on Query {
        allPersons {
            ...Person_person
        }
    }
`})