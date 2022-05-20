import React from 'react'
import PropTypes from 'prop-types'

import S from './Grid.style'

const Grid = ({ data, header, square }) => {
  const rows = data.length

  return (
    <S.Wrapper>
      <S.Header>
        {header.map((e, index) =>
          <S.HeaderCell key={index}>{e.slice(0,2)}</S.HeaderCell>
        )}
      </S.Header>
      <S.Box percent={!square && header.length/* TODO: make it more semantic */}>
        <S.Grid>
          {data.map((row, i) => (
            <S.Row key={i} percent={rows}>
              {row.map(({ day, onMonth }, j) => (
                <S.Cell key={`${i}-${j}`} active={onMonth}>{day}</S.Cell>
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
  square: PropTypes.bool
}

Grid.defaultProps = {
  data: [],
  header: [],
  square: false
}

export default Grid
