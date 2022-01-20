import { useCallback, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { InfiniteLoader, List } from 'react-virtualized'
import 'react-virtualized/styles.css'

const remoteRowCount = 10000

function App() {
  const [list, setList] = useState<any[]>([])
  const [total, setTotal] = useState<number>(0)
  // const [state, setstate] = useState(initialState)
  const isRowLoaded = useCallback(({ index }) => {
    return !!list[index]
    // return false
  }, [])

  useEffect(() => {
    setList(createList(0, 9))
    setTotal(100)
  }, [])

  const createList = useCallback((from, to) => {
    let result = []
    for (let i = from; i <= to; i++) {
      result.push(i)
    }
    return result
  }, [])

  const getList = useCallback(
    (startIndex, stopIndex) => {
      // 记录startIndex stopIndex的只
      const len = list.length
      console.log('----list', list)

      console.log('----len', len)
      if (len >= stopIndex) {
        return {
          hasNew: false,
          list: [],
        }
      } else {
        // const difLen = stopIndex - len;
        return {
          hasNew: true,
          list: createList(len, stopIndex),
        }
      }
    },
    [list],
  )

  const loadMoreRows = useCallback(
    ({ startIndex, stopIndex }) => {
      console.log('------startIndex', startIndex)
      console.log('------stopIndex', stopIndex)

      return new Promise((res, rej) => {
        setTimeout(() => {
          setList((pre) => {
            if (pre.length) {
              const { hasNew, list } = getList(startIndex, stopIndex)
              return !hasNew ? pre : [...pre, ...list]
              // return [...pre, ...getList(startIndex, stopIndex)]
            } else {
              return createList(0, 9)
            }
          })
        }, 500)
      })
    },
    [getList],
  )

  const rowRenderer = useCallback(
    ({ key, index, style }) => {
      if (!list.length) return null
      console.log('-----list', list.length)
      return (
        <div key={key} style={style}>
          {list[index] !== undefined ? list[index] : 'loading...'}
        </div>
      )
    },
    [list],
  )

  const handleAddItem = useCallback(() => {
    console.log('-=----')
    setList((pre) => [new Date().getTime(), ...pre])
  }, [])
  if (!list.length) return null
  return (
    <>
      <button onClick={handleAddItem}>add item</button>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={total}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={200}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={total}
            rowHeight={20}
            rowRenderer={rowRenderer}
            width={300}
          />
        )}
      </InfiniteLoader>
    </>
  )
}

export default App
