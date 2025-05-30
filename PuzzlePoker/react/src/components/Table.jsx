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

function Table({ tablePuzzle }) {
    if (!tablePuzzle) {
        return null;
    }

    const { scenario, solution } = tablePuzzle;
    const { description, communityCards, potSize, positions } = scenario;

    return (
        <div className="flex justify-left items-center">
            <div
                className="relative w-[800px] h-[400px] rounded-full border-8 border-amber-950 shadow-xl mr-16"
                style={{
                    backgroundColor: '#065f46',
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='10' cy='10' r='1' fill='%2304a96d' fill-opacity='0.15'/></svg>")`,
                    backgroundRepeat: 'repeat'
                }}
            >
                {playerPositions.map((player, i) => (
                    <div key={i}>
                        <div
                            className={`absolute ${player.className} text-white font-semibold text-sm text-center`}
                        >
                            {positions[i]?.betSize > 0 && player.betClassName === 'above' && (<div className={`flex mb-2 justify-center items-center`}>
                                {positions[i]?.betSize}
                                <div className={`bg-red-600 ml-1 rounded-full border-2 border-dashed border-red-900 w-4 h-4`}></div>
                            </div>)}
                            {positions[i]?.holeCards.length == 2 && (
                                <div
                                    className='flex items-center justify-center'>
                                    <Card suit={`${positions[i]?.holeCards[0].suit}`} rank={`${positions[i]?.holeCards[0].rank}`} />
                                    <Card suit={`${positions[i]?.holeCards[1].suit}`} rank={`${positions[i]?.holeCards[1].rank}`} />
                                </div>)}
                            <div className={`bg-gray-800 w-28 py-1 rounded-md shadow-md ${positions[i]?.isHero ? 'border border-4 border-blue-900' : ''}`}>
                                <div>
                                    {positions[i]?.position}
                                </div>
                                <div>
                                    {positions[i]?.stack}
                                </div>
                            </div>
                            {positions[i]?.betSize > 0 && player.betClassName === 'below' && (<div className={`flex mt-2 justify-center items-center`}>
                                {positions[i]?.betSize}
                                <div className={`bg-red-600 ml-1 rounded-full border-2 border-dashed border-red-900 w-4 h-4`}></div>
                            </div>)}
                        </div>
                    </div>

                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-full font-bold">
                    Pot: 0
                </div>
            </div>
            <div className="flex flex-col gap-4 border-4 border-gray-600 bg-blue-950 p-6 rounded-xl text-white w-64">
                <h1 className="text-lg mb-2 text-center">{description}</h1>
                <button className="bg-red-700 rounded-md py-3 px-8 text-lg font-semibold border border-gray-700 hover:bg-red-800 transition-colors duration-150">
                    {solution?.options[0]}
                </button>
                <button className="bg-gray-700 rounded-md py-3 px-8 text-lg font-semibold border border-gray-600 hover:bg-gray-800 transition-colors duration-150">
                    {solution?.options[1]}
                </button>
                <button className="bg-green-700 rounded-md py-3 px-8 text-lg font-semibold border border-gray-700 hover:bg-green-800 transition-colors duration-150">
                    {solution?.options[2]}
                </button>
                <button className="bg-green-800 rounded-md py-3 px-8 text-lg font-semibold border border-gray-700 hover:bg-green-900 transition-colors duration-150">
                    {solution?.options[3]}
                </button>
            </div>
        </div >
    );
}

export default Table;