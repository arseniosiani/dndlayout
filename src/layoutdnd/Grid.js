import styled from 'styled-components'
import { useDrop,useDragLayer } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const S = {}
S.Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: ${({w}) => w}px;
  height: ${({ h }) => h}px;
  gap: ${({ gap }) => gap}px;

  background-color:red;
`

const DndGrig = ({ w, h, size, gap = 10 }) => {
  return     (<DndProvider backend={HTML5Backend}>
  <Grid w={w} h={h} size={size } gap={gap}>

  </Grid>
</DndProvider>)
}

const Grid = ({ w, h, size, gap = 10 }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      // accept: ItemTypes.KNIGHT,
      // canDrop: () => game.canMoveKnight(x, y),
       drop: () => console.log,
      // collect: (monitor) => ({
      //   isOver: !!monitor.isOver(),
      //   canDrop: !!monitor.canDrop(),
      // }),
    }),
    // [game],
  )

  return (
	    <S.Grid w={w} h={h} size={size } gap={gap}>
      { }
      </S.Grid>

  );
}

export default DndGrig;
