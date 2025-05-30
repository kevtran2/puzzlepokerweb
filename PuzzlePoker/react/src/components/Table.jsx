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
            <div className="relative w-[800px] h-[400px] bg-green-900 rounded-full border-8 border-amber-950 shadow-xl mr-16">
                {playerPositions.map((player, i) => (
                    <div key={i}>
                        <div
                            className={`absolute ${player.className} text-white font-semibold text-sm text-center`}
                        >
                            {player.betClassName === 'above' && (<div className={`flex mb-2 justify-center items-center`}>
                                20
                                <div className={`bg-red-600 ml-1 rounded-full border-2 border-dashed border-red-900 w-4 h-4`}></div>
                            </div>)}
                            <div
                                className='flex'>
                                <Card suit='hearts' rank='A' />
                                <Card suit='clubs' rank='6' />
                            </div>
                            <div className='bg-blue-950 py-1 rounded-md shadow-md'>
                                <div>
                                    {player.name}
                                </div>
                                <div>
                                    {player.stack}
                                </div>
                            </div>
                            {player.betClassName === 'below' && (<div className={`flex mt-2 justify-center items-center`}>
                                100
                                <div className={`bg-red-600 ml-1 rounded-full border-2 border-dashed border-red-900 w-4 h-4`}></div>
                            </div>)}
                        </div>
                    </div>

                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-full font-bold">
                    Pot: 0
                </div>
            </div>
            <div className='flex flex-col border-4 border-gray-600 bg-blue-950 p-4 rounded-md text-white'>
                <h1 className='italic'>In this scenario, would you...</h1>
                <button className='bg-red-800 rounded-md mb-2 mt-2 px-8 py-4 text-lg font-bold border border-gray-500 hover:bg-red-700'>FOLD</button>
                <button className='bg-yellow-700 rounded-md mb-2 px-8 py-4 text-lg font-bold border border-gray-500 hover:bg-yellow-600'>CALL</button>
                <button className='bg-green-800 rounded-md mb-2 px-8 py-4 text-lg font-bold border border-gray-500 hover:bg-green-700'>BET 60</button>
                <button className='bg-green-800 rounded-md mb-2 px-8 py-4 text-lg font-bold border border-gray-500 hover:bg-green-700'>ALL IN</button>
            </div>
        </div>
    );
}

export default Table;