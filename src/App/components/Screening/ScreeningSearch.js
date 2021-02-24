import React, { Component } from 'react'
import SearchField from "react-search-field";

class ScreeningSearch extends Component {
  render() {
    return (
      <div>
        <SearchField
          placeholder="Search by Email"
          className="test-class"
        />
      </div>
    )
  }
}

export default ScreeningSearch
