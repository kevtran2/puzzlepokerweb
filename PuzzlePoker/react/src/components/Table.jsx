import React from 'react';
import Card from './Card';

const playerPositions = [
    { name: "BB", stack: 1000, betSize: 0, className: "top-0 left-1/2 -translate-y-1/2 -translate-x-1/2", betClassName: "below" },
    { name: "LJ", stack: 1000, betSize: 0, className: "top-12 right-0 -translate-y-1/2", betClassName: "below" },
    { name: "HJ", stack: 1000, betSize: 0, className: "bottom-12 right-0 translate-y-1/2", betClassName: "above" },
    { name: "CO", stack: 1000, betSize: 0, className: "bottom-0 left-1/2 translate-y-1/2 translate-x-[-50%]", betClassName: "above" },
    { name: "BTN", stack: 1000, betSize: 0, className: "bottom-12 left-0 translate-y-1/2", betClassName: "above" },
    { name: "SB", stack: 1000, betSize: 0, className: "top-12 left-0 -translate-y-1/2", betClassName: "below" },
];

function Table() {
    return (
        <div className="flex justify-left items-center">
            <div className="relative w-[800px] h-[400px] bg-green-900 rounded-full border-8 border-amber-950 shadow-xl">
                {playerPositions.map((player, i) => (
                    <div key={i}>
                        <div
                            className={`absolute ${player.className} text-white font-semibold text-sm text-center`}
                        >
                            {player.betClassName === 'above' && (<div className={`flex mb-2 justify-center items-center`}>
                                20
                                <div className={`bg-red-700 ml-1 rounded-full w-[1vw] h-[1vw]`}></div>
                            </div>)}
                            <div
                                className='flex'>
                                <Card suit='hearts' rank='A' />
                                <Card suit='clubs' rank='6' />
                            </div>
                            <div className='bg-gray-900 py-1 rounded-md shadow-md'>
                                <div>
                                    {player.name}
                                </div>
                                <div>
                                    {player.stack}
                                </div>
                            </div>
                            {player.betClassName === 'below' && (<div className={`flex mt-2 justify-center items-center`}>
                                100
                                <div className={`bg-red-700 ml-1 rounded-full w-[1vw] h-[1vw]`}></div>
                            </div>)}
                        </div>
                    </div>

                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-full font-bold">
                    Pot: 0
                </div>
            </div>
        </div>
    );
}

export default Table;