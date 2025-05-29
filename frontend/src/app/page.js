import { useAccount, useNetwork, useBalance } from 'wagmi'
import WalletButton from '../components/WalletButton'
import PaperMintForm from '../components/PaperMintForm'
import CitationDashboard from '../components/CitationDashboard'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { data: maticBalance } = useBalance({ address })

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-indigo-600">Cite2Earn</h1>
        <WalletButton />
      </header>

      {/* Connection Status */}
      {isConnected ? (
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <p>Connected to: {chain?.name} (ID: {chain?.id})</p>
          <p>Your address: {address}</p>
          <p>Balance: {maticBalance?.formatted} MATIC</p>
        </div>
      ) : (
        <div className="mb-8 p-4 bg-yellow-100 rounded-lg">
          <p>Connect your wallet to begin</p>
        </div>
      )}

      {/* Main Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mint New Paper</h2>
          <PaperMintForm />
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Citations</h2>
          <CitationDashboard />
        </section>
      </div>
    </main>
  )
}