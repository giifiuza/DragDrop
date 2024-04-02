import { useState } from 'react'
import PlusIcon from '../icons/PlusIcon'
import { Column } from '../types';
import ColumnContainer from './ColumnContainer';

function KanbanBoard() {
    const [columns, setColumns] = useState<Column[]>([]);
    console.log(columns)
    return (
        <div className='m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]'>
            <div className='m-auto flex gap-4'>
                <div className='flex gap-4'>{columns.map(col => <div><ColumnContainer column={col}/></div>)}</div>
                <button onClick={createNewColumn} className=' flex gap-2 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-black border-2 border-columnBackgroundColor text-white p-4 ring-rose-500 hover:ring-2'>
                    <PlusIcon />Add column</button>

            </div>
        </div>
    )

    function createNewColumn() {
        const columnToAdd: Column = {
            id: generateId(),
            title: `Column ${columns.length + 1}`,

        }

        setColumns([...columns, columnToAdd])
    }
}

function generateId() {
    return Math.floor(Math.random() * 10001)
}

export default KanbanBoard
