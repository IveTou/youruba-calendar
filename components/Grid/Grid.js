import React from 'react'
import PropTypes from 'prop-types'

import S from './Grid.style'

const Grid = ({ rows, pattern, header }) => {
  const matrix = Array(rows).fill(pattern)

  return (
    <>
      <S.Header>
        {header.map((e, index) =>
          <S.HeaderCell key={index}>{e}</S.HeaderCell>
        )}
      </S.Header>
      <S.Box>
        <S.Grid>
          {matrix.map((row, i) => (
            <S.Row key={i} percent={rows}>
              {row.map((element, j) => (
                <S.Cell key={`${i}-${j}`}>{element}</S.Cell>
              ))}
            </S.Row>
          ))}
        </S.Grid>
      </S.Box>
    </>
  )
}

Grid.propTypes = {
  rows: PropTypes.number,
  pattern: PropTypes.array,
  header: PropTypes.array
}

Grid.defaultProps = {
  rows: 6,
  pattern: [],
  header: []
}

export default Grid
