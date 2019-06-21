import React from 'react'
import Columns from './Columns'

function Table () {
  return (
    <table style={styles.tableStyles}>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  )
}

const styles = {
  tableStyles: {
    margin: '0 auto',
  },

}
export default Table
