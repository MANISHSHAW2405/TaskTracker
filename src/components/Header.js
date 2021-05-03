
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {

    return (
<header className ='header'>
    <h1 >
    {title}   
    </h1>
    <Button color ={showAdd ? 'red' : 'green'} text = {showAdd ? 'close':'add'} onClick = {onAdd}/>
         
        </header>
    )
}
Header.defaultProps={
    title: 'default task tracker',
}
export default Header
//PropTypes here
// Header.prototype={
//     title: PropTypes.string.isRequired,
// }

//CSS here
// const headingStyle ={
//     color : 'red',backgroundColor:'black',
// }

