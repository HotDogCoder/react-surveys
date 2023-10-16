import React from 'react'
import { HiMailOpen } from 'react-icons/hi';

type Alert = {
    id: number;
    name: string;
    code: string;
    description: string;
    fullname: string;
}

type Props = {
    alerts: Alert[]
}

const PanelAlerts = ({alerts = []}: Props) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-lg">
            <div className="p-0">
                <h2 className="p-4 text-xl font-bold">{alerts.length > 0 ? 'Alertas Recientes':'No tiene alertas pendientes'}</h2>
                <hr className="border-t-2 border-gray-300"/>

                {alerts.length > 0 ? (<ul className="p-2">
                    {alerts.map((item) => (
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
                </ul>) : (
                    <div>
                        
                    </div>
                )}
            </div>
        </div>

    </>
  )
}

export default PanelAlerts