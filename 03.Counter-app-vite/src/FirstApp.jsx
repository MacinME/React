const message = {
    name: 'Macin',
    power: 'Fast'
};
import PropTypes from 'prop-types';

const getGreeting = (username) => {
    return `My username: ${ username }`
}

export const FirstApp = ( { title, total } ) => {

  return (
    <>
        <code>{ getGreeting('MacinDev') }</code>
        <h2>{ title }</h2>
        <div>{ Math.pow( total, 2 ) }</div>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
}


FirstApp.defaultProps = {
    title: 'There is not title available',
    total: 'This is not a String',
    newProp: 5 + 5,
}