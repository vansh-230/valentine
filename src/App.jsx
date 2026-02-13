import { useState } from 'react';
import ValentineProposal from './components/ValentineProposal';
import VaultLock from './components/VaultLock';
import OpenWhenSection from './components/OpenWhenSection';
import CouponBook from './components/CouponBook';
import './App.css';

function App() {
  const [hasAcceptedProposal, setHasAcceptedProposal] = useState(false);
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);

  const handleProposalAccept = () => {
    setHasAcceptedProposal(true);
  };

  const handleVaultUnlock = () => {
    setIsVaultUnlocked(true);
  };

  return (
    <div className="app">
      {!hasAcceptedProposal ? (
        <ValentineProposal onAccept={handleProposalAccept} />
      ) : !isVaultUnlocked ? (
        <VaultLock onUnlock={handleVaultUnlock} />
      ) : (
        <div className="main-content">
          <OpenWhenSection />
          <CouponBook />

          {/* Footer */}
          <footer className="footer">
            <p>Made with 💖 for someone special</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
