import { Column } from "../types"

interface Props {
    column: Column
}
function ColumnContainer(props: Props) {
    const { column } = props;
    return (
        <div className="bg-[#161C22] w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col text-white">
            <div className=" text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-4 border-gray-800 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="flex justify-center items-center bg-[#161C22] px-2 py-1 text-sm rounded-full">0</div>
                    {column.title}
                </div>
                <button>Delete</button>
            </div>
           
            <div className="flex flex-grow">Content</div>
            <div className="flex ">Footer</div>
        </div>
    )
}

export default ColumnContainer
