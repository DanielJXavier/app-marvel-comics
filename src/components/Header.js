import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { updateFilter, fetchCharacters } from '../actions'

import './Header.sass'
import search from '../assets/images/search.svg'

const Header = (props) => {
  const { action, filter } = props
  const { updateFilter, fetchCharacters } = props

  let actionElement
  if (action === 'back') {
    actionElement = <Link to="/" className="back">back</Link>
  } else {
    actionElement =
      <div className="search">
        <input type="text" placeholder="Search characters by name" value={filter} onChange={(e) => updateFilter(e.target.value)} onKeyDown={(e) => e.keyCode === 13 && fetchCharacters(true)} />
        {filter && <button className="clear" onClick={() => updateFilter() && fetchCharacters(true)}><span></span><span></span></button>}
        <button className="filter">
          <img src={search} alt="Edit icon" onClick={() => fetchCharacters(true)} />
        </button>
      </div>
  }

  return (
    <div className="Header">
      <h1 className="title">Marvel Characters</h1>
      {actionElement}
    </div>
  )
}

const mapStateToProps = (state) => ({
  filter: state.filter.filter
})

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  fetchCharacters: (reset) => dispatch(fetchCharacters(reset))
})

Header.propTypes = {
  action: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
