import React from 'react'

function CandyDispenser() {
  const initialCandies        = ['snickers', 'skittles', 'twix', 'milky way']
  const [candies, setCandies] = React.useState(initialCandies)


  /* Sin useCallback
  const dispense = candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }
  */

  /* con useCallback */
  const dispense = React.useCallback(candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }, [])

  return (
    <div style= {styles.stylesContainer}>
      <h1>Candy Dispenser</h1>
      <div >
        <h3>Available Candy</h3>
        {
          candies.length === 0 ? (
            <button style = { styles.styleButton } onClick={() => setCandies(initialCandies)}>Refill</button>
          ) : (
            <ul styles= {styles.stylesUl} >
              {candies.map(candy => (
                <li style = {styles.styleLi} key={candy}>
                  <button style = { styles.styleButton } onClick={() => dispense(candy)}>Grab</button> {candy}
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  )
}

const styles = {
  stylesContainer: {
    background  : 'white',
    padding     : '20px',
    border      : '2px solid black',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  styleButton : {
    backgroundColor: 'teal',
    color          : 'white',
    cursor         : 'pointer',
    padding        : '8px 15px',
    borderRadius   : '4px',
    borderWidth    : '1px',
    borderStyle    : 'solid',
    borderColor    : 'teal',
    borderImage    : 'initial',
    transition     : 'all 200ms ease 0s'
  },
  stylesUl : {
    listStylePosition : 'inside',
    display           : 'block',
    listStyleType     : 'disc',
    marginBlockStart  : '1em',
    marginBlockEnd    : '1em',
    marginInlineStart : '0px',
    marginInlineEnd   : '0px',
    paddingInlineStart: '40px',
    marginRight       : '0',
    marginTop         : '0',
    paddingBottom     : '0',
    paddingLeft       : '0',
    paddingRight      : '0',
    paddingTop        : '0',
    marginBottom      : '1.55rem',
  },
  styleLi: {
    paddingLeft: '0',
    marginBottom: 'calc(1.55rem / 2)',
    display: 'list-item',
    textAlign: 'left',

  }
}

export default CandyDispenser
