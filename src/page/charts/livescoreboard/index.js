import React, { useState, useEffect } from 'react';


const parties = [
    { id: 1, name: 'Party A', votes: 100 },
    { id: 2, name: 'Party B', votes: 80 },
    { id: 3, name: 'Party C', votes: 120 },
    { id: 4, name: 'Party D', votes: 90 },
    { id: 5, name: 'Party E', votes: 110 },
    { id: 6, name: 'Party F', votes: 70 },
    { id: 7, name: 'Party G', votes: 130 },
    { id: 8, name: 'Party H', votes: 95 },
    { id: 9, name: 'Party I', votes: 85 },
    { id: 10, name: 'Party J', votes: 105 },
    { id: 11, name: 'Party K', votes: 75 },
    { id: 12, name: 'Party L', votes: 115 },
    { id: 13, name: 'Party M', votes: 65 },
    { id: 14, name: 'Party N', votes: 125 },
    { id: 15, name: 'Party O', votes: 88 },
    { id: 16, name: 'Party P', votes: 102 },
    { id: 17, name: 'Party Q', votes: 78 },
    { id: 18, name: 'Party R', votes: 95 }
    
];


const LiveVoteScoreboard = () => {
    const [partyVotes, setPartyVotes] = useState(parties);

    // Function to simulate live vote updates
    useEffect(() => {
        const interval = setInterval(() => {
            // Simulating live vote updates by incrementing votes for random parties
            const updatedPartyVotes = partyVotes.map(party => ({
                ...party,
                votes: party.votes + Math.floor(Math.random() * 10)
            }));

            // Sort the parties based on votes in descending order
            updatedPartyVotes.sort((a, b) => b.votes - a.votes);

            // Animate the swapping of elements
            animateSorting(partyVotes, updatedPartyVotes);

            setPartyVotes(updatedPartyVotes);
        }, 1000); // Change the interval as needed

        return () => clearInterval(interval);
    }, [partyVotes]);

    const animateSorting = (oldPartyVotes, newPartyVotes) => {
        const animations = [];
    
        // Compare new votes with old votes and find indices to animate
        for (let i = 0; i < newPartyVotes.length; i++) {
            const oldIndex = oldPartyVotes.findIndex(p => p.id === newPartyVotes[i].id);
            if (i !== oldIndex) {
                animations.push({ oldIndex, newIndex: i });
            }
        }
    
        // Animate the swapping
        animations.forEach(animation => {
            const { oldIndex, newIndex } = animation;
            const item = document.getElementById(`party-${newPartyVotes[newIndex].id}`);
            const offset = (newIndex - oldIndex) * item.offsetHeight; // Calculate offset based on the new index
           
            item.style.transform = `translateY(${offset}px)`;
            item.style.transition = 'transform 1s';
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
                item.style.transition = 'transform 0.5s';
            }, 1000);
        });
    };
    

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Live Vote Scoreboard</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                    <tr className='mb-5'>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Party</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Votes</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {partyVotes.map(party => (
                        <tr key={party.id} id={`party-${party.id}`}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <span className="font-semibold">{party.name}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="h-2 bg-gray-200 rounded overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${(party.votes / 200) * 10}%` }}></div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-gray-900">{party.votes} votes</div>
                            </td>
                          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



  export default LiveVoteScoreboard;
