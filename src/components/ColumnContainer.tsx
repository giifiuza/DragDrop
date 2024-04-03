import { useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import { Column, Id, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: String) => void;

  createTask: (columnId: Id) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}
function ColumnContainer(props: Props) {
  const { column, deleteColumn, updateColumn, createTask, deleteTask, tasks } = props;
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id as UniqueIdentifier,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-[#161C22] w-[350px] opacity-90 border-2 border-rose-500 h-[500px] max-h-[500px] rounded-md flex flex-col text-white"
      >
        {" "}
      </div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-[#161C22] w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col text-white"
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className=" text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-4 border-gray-800 flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-[#161C22] px-2 py-1 text-sm rounded-full">
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black focus:border-rose-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="stroke-gray-500 hover:stroke-white hover:bg-[#161C22] rounded px-1 py-2"
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        {tasks.map((task) => (
            <TaskCard key={task?.id} task={task} deleteTask={deleteTask}/>
        ))}
      </div>
      <button
        onClick={()=>{
            createTask(column.id)
        }}
        className="flex gap-2 items-center border-[#161C22] border-2 rounded-md p-4 border-x-[#161c22] hover:bg-[#0D1117] active:bg-black"
      >
        <PlusIcon />
        New task
      </button>
    </div>
  );
}

export default ColumnContainer;
