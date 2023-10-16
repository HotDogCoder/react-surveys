import React from 'react'
import { HiMailOpen } from 'react-icons/hi';

type Case = {
    id: number;
    name: string;
    code: string;
    description: string;
    fullname: string;
}

type Props = {
    tasks: Case[]
}

const PanelTasks = ({tasks = []}: Props) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-lg">
            <div className="p-0">
                <h2 className="p-4 text-xl font-bold">{tasks.length > 0 ? 'Tareas Recientes':'No tiene tareas asignadas'}</h2>
                <hr className="border-t-2 border-gray-300"/>
                <ul className="p-2">
                    {tasks.map((item) => (
                        <li key={item.id} className="px-2 bg-gray-50 hover:bg-gray-100 rounded my-1">
                            <div className="flex items-center">
                                <div className='flex items-center p-2'>
                                    <HiMailOpen/>
                                </div>
                                <div className='p-2'>
                                    <p className="text-lg font-medium text-gray-900">{item.name}</p>
                                    <p className="text-gray-500 text-sm">Cod. {item.code}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </>
  )
}

export default PanelTasks