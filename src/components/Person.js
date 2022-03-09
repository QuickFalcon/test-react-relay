import {
    createFragmentContainer,
    // graphql
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const Person = (props) => {

    const { person } = props

    console.log('@@@Person-props', props)

    return (
        <div>
            <span>{ person.name }</span>
            <span>{ person.phone }</span>
        </div>
    )
}

export default createFragmentContainer (Person, {link: graphql`
    fragment Person_person on Person {
        id
        name
        phone
    }
`})