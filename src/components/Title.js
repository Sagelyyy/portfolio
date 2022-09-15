import './Title.css'

const Title = (props) => {
    return(
        <div className='title--container'>
            <h1 className='title--text'>{props.title}</h1>
        </div>
    )
}

export default Title