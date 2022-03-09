const Person = (props) => {

    const { person } = props

    return (
        <div>
            <span>{ person.name }</span>
            <span>{ person.phone }</span>
        </div>
    )
}

export default Person