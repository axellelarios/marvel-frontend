// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 

const Characters = ({search, setSearch}) => {


    const handleTitleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <main>
            <div className="container">
                <Title title="Find a character you like" />
            </div>
        </main>
    )
}

export default Characters;