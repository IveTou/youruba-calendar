import { useRouter } from 'next/router'

import UIBase from '../../containers/UIBase'
import S from './TaskBar.style'
import { MONTHS } from '../../constants'

const TaskBar = () => {
  const router = useRouter()
  const { view, year, month, day } = router.query

  return (
    <UIBase>
      <S.TaskBar>
        <S.Content>
          <S.Title>{MONTHS[month-1]} {year}</S.Title>
          <S.ToolBar>
            <S.ArrowButtons>
              <S.Arrow>{`<`}</S.Arrow>
              <S.Arrow>{`>`}</S.Arrow>
            </S.ArrowButtons>
          </S.ToolBar>
        </S.Content>
      </S.TaskBar>
    </UIBase>
  )
}

export default TaskBar
