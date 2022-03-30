import React from 'react'
import PropTypes from 'prop-types'

import S from './Grid.style'

const Grid = ({ rows, pattern }) => {
  const matrix = Array(rows).fill(pattern)

  return (
    <S.Box>
      <S.Grid>
        {matrix.map((row, i) => (
          <S.Row key={i} percent={rows}>
            {row.map((element, j) => (
              <S.Element key={`${i}-${j}`}>{element}</S.Element>
            ))}
          </S.Row>
        ))}
      </S.Grid>
    </S.Box>
  )
}

Grid.propTypes = {
  rows: PropTypes.number,
  pattern: PropTypes.array
}

Grid.defaultProps = {
  rows: 6,
  pattern: []
}

export default Grid
