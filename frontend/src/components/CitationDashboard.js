import { useAccount, useContractRead, useContractEvent } from 'wagmi'
import { getResearchCoinContract } from '../utils/web3'

export default function CitationDashboard() {
  const { address } = useAccount()
  
  // 1. Fetch user's RSC balance
  const { data: balance } = useContractRead({
    ...getResearchCoinContract(),
    functionName: 'balanceOf',
    args: [address],
    watch: true
  })

  // 2. Listen for new citation events
  useContractEvent({
    ...getResearchCoinContract(),
    eventName: 'CitationRewarded',
    listener(log) {
      console.log('New citation detected:', log)
      // Update UI accordingly
    }
  })

  // 3. Fetch papers (simplified - you'll need your own logic)
  const papers = [
    { doi: '10.123/abc', citations: 42, earned: 420 },
    { doi: '10.456/def', citations: 15, earned: 150 }
  ]

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium">Your RSC Balance</h3>
        <p className="text-2xl">{balance ? parseInt(balance.toString()) / 1e18 : 0} RSC</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Your Papers</h3>
        {papers.map((paper, i) => (
          <div key={i} className="p-3 border rounded-lg hover:bg-gray-50">
            <p className="font-mono text-sm">{paper.doi}</p>
            <div className="flex justify-between mt-1">
              <span>Citations: {paper.citations}</span>
              <span className="text-green-600">+{paper.earned} RSC</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}