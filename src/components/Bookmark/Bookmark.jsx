
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className='bg-white rounded-lg m-3'>
      <h5 className="text-lg font-semibold p-5">{title}</h5>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}

export default Bookmark
