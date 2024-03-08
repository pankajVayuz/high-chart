import React, { useState, useEffect } from "react";

const parties = [
  { id: 1, name: "Party A", votes: 100 },
  { id: 2, name: "Party B", votes: 80 },
  { id: 3, name: "Party C", votes: 120 },
  { id: 4, name: "Party D", votes: 90 },
  { id: 5, name: "Party E", votes: 110 },
  { id: 6, name: "Party F", votes: 70 },
  { id: 7, name: "Party G", votes: 130 },
  { id: 8, name: "Party H", votes: 95 },
  { id: 9, name: "Party I", votes: 85 },
  { id: 10, name: "Party J", votes: 105 },
  { id: 11, name: "Party K", votes: 75 },
  { id: 12, name: "Party L", votes: 115 },
  { id: 13, name: "Party M", votes: 65 },
  { id: 14, name: "Party N", votes: 125 },
  { id: 15, name: "Party O", votes: 88 },
  { id: 16, name: "Party P", votes: 102 },
  { id: 17, name: "Party Q", votes: 78 },
  { id: 18, name: "Party R", votes: 95 },
];

const LiveVoteScoreboard = () => {
    
  
    const [partyVotes, setPartyVotes] = useState(parties);
    const [sortedPartyVotes, setSortedPartyVotes] = useState(parties); // New state for sorted data
    const [sortedPartyVotesLowToHigh, setSortedPartyVotesLowToHigh] = useState(parties); // New state for sorted data
    const [highToLowActive, setHighToLowActive] = useState(false);
    const [lowToHighActive, setLowToHighActive] = useState(false);
    const progressBarColors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
      "#ff8000",
      "#8000ff",
      "#0080ff",
      "#80ff00",
      "#008000",
      "#800000",
      "#000080",
      "#808080",
      "#ff8080",
      "#80ff80",
      "#8080ff",
      "#ffff80",
      "#ff80ff",
    ];
  
    useEffect(() => {
      const dataUpdateInterval = setInterval(() => {
        const updatedPartyVotes = partyVotes.map((party) => ({
          ...party,
          votes: party.votes + Math.floor(Math.random() * 10),
        }));
        setPartyVotes(updatedPartyVotes);
  
        // Update sortedPartyVotes if sorting is active
        if (highToLowActive) {
          const sortedVotes = [...updatedPartyVotes].sort((a, b) => b.votes - a.votes);
          setSortedPartyVotes(sortedVotes);
        }
        if (lowToHighActive) {
          const sortedVotes = [...updatedPartyVotes].sort((a, b) => a.votes - b.votes);
          setSortedPartyVotesLowToHigh(sortedVotes);
        }
      }, 500);
  
      return () => {
        clearInterval(dataUpdateInterval);
      };
    }, [partyVotes, highToLowActive,lowToHighActive]);
  
    const toggleSortingHighToLow = () => {
      setHighToLowActive(!highToLowActive);
      setLowToHighActive(false);
    };
    const toggleSortingLowToHigh = () => {
      setLowToHighActive(!lowToHighActive);
      setHighToLowActive(false);
    };
  
    const votesData = highToLowActive ? sortedPartyVotes:lowToHighActive?sortedPartyVotesLowToHigh:partyVotes; // Decide which data to render
  
    return (
      <div className="container mx-auto py-8">
     <div className="flex justify-between p-4">

     <h2 className="text-2xl font-bold mb-4">Live Vote Scoreboard</h2>
        <button
  onClick={toggleSortingHighToLow}
  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
    highToLowActive ? "bg-red-500 hover:bg-red-700" : ""
  }`}
>
  {highToLowActive ? " High to Low Stop Sorting" : "High to Low Start Sorting"}
</button>
        <button
  onClick={toggleSortingLowToHigh}
  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
    lowToHighActive ? "bg-red-500 hover:bg-red-700" : ""
  }`}
>
  {lowToHighActive ? "Low to high Stop Sorting" : "Low to high Start Sorting"}
</button>
     </div>
  
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr className="mb-5">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Party
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Progress
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Votes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {votesData.map((party, index) => (
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
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${(party.votes / 200) * 10}%`,
                        backgroundColor:
                          progressBarColors[index % progressBarColors.length],
                      }}
                    ></div>
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
