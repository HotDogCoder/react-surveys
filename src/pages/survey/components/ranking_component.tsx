import React from 'react';
import { RankingModel } from '../redux/types/survey_types';


interface RankingComponentProps {
    data: RankingModel[];
}

const RankingComponent: React.FC<RankingComponentProps> = ({ data }) => {
    return (
        <div className="bg-stone-50 dark:bg-slate-700 p-4 rounded-lg flex flex-wrap">
            {data?.map((item, index) => (
                <div key={index} className="mb-4 p-4 rounded-md shadow-lg bg-white dark:bg-slate-500 m-1">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-stone-50">{item.title}</h2>
                    <p className="text-slate-700 dark:text-stone-50">Value: {item.value}</p>
                    <p className="text-slate-700 dark:text-stone-50">Survey Title: {item.survey.title}</p>
                    
                </div>
            ))}
        </div>
    );
}

export default RankingComponent;
