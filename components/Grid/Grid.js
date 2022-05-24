import React from 'react'
import PropTypes from 'prop-types'

import S from './Grid.style'

const Grid = ({ data, header, active, square, unique }) => {
  const rows = data.length

  return (
    <S.Wrapper>
      <S.Header>
        {header.map((e, index) =>
          <S.HeaderCell unique={unique} key={index}>{unique ? e : e.slice(0,2)}</S.HeaderCell>
        )}
      </S.Header>
      <S.Box percent={!square && header.length/* TODO: make it more semantic */}>
        <S.Grid>
          {data.map((row, i) => (
            <S.Row key={i} percent={rows}>
              {row.map(({ day, onMonth }, j) => (
                <S.Cell
                  key={`${i}-${j}`}
                  on={onMonth.toString()}
                  active={onMonth && parseInt(active) === parseInt(day)}
                >
                  {day}
                </S.Cell>
              ))}
            </S.Row>
          ))}
        </S.Grid>
      </S.Box>
    </S.Wrapper>
  )
}

Grid.propTypes = {
  data: PropTypes.array,
  header: PropTypes.array,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number 
  ]),
  square: PropTypes.bool,
  unique: PropTypes.bool
}

Grid.defaultProps = {
  data: [],
  header: [],
  square: false
}

export default Grid
