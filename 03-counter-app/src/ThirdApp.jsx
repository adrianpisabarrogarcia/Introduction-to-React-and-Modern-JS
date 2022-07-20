//añadir la dependencia en la terminal con yarn add prop-types, npm install prop-types
import PropTypes from "prop-types"

const ThirdApp = ({ title, subtitle }) => {
    
    //asi mejor no
    /*
    if (!title) {
        throw new Error('Title is required')
    }
    */

    return(
        <div>ThirdApp ➡️ { title} - { subtitle } </div>
    )
}

export default ThirdApp


ThirdApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}