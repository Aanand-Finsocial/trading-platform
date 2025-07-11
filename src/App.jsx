import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'
import Navbar from './components/Navbar/Navbar'
import AIAssistant from './components/AIAssistant/AIAssistant'
import Home from './pages/Home/Home'
import HomeLoggedIn from './pages/Home/HomeLoggedIn'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Assets from './pages/Assets/Assets'
import RewardsHub from "./pages/Profile/RewardsHub"
import USDMFutures from './pages/Futures/USDMFutures'
import COINMFutures from './pages/Futures/COINMFutures'
import Options from './pages/Futures/Options'
import SpotPage from './pages/Trade/SpotPage'
import MarginPage from './pages/Trade/MarginPage'
import P2P from './pages/Trade/P2P'
import Bot from './pages/Trade/Bot'
import Earn from './pages/Earn/Earn'
import Square from './pages/Square/Square'
import Academy from './pages/Square/Academy'
import Blog from './pages/Square/Blog'
import Research from './pages/Square/Research'
import VIPInstitutional from './pages/More/VIPInstitutional'
import Affiliate from './pages/More/Affiliate'
import Referral from './pages/More/Referral'
import Launchpool from "./pages/More/Launchpool"
import Megadrop from "./pages/More/Megadrop"
import Miningpool from "./pages/More/Miningpool"
import Nft from "./pages/More/Nft"
import Pay from "./pages/More/Pay"
import FanToken from "./pages/More/FanToken"
import FinsocialWallet from "./pages/More/FinsocialWallet"
import Charity from "./pages/More/Charity"
import BnbChain from "./pages/More/BnbChain"
import Markets from "./pages/Markets/Markets"
import Convert from "./pages/Trade/Convert"
import CopyTradingPage from "./pages/Trade/CopyTradingPage"
import ApiPage from "./pages/Trade/ApiPage"
import Verify from './pages/Verify/Verify'
import Ref from './pages/Profile/Refferal'
import Settings from './pages/Profile/ProfileSetting'
import Travel from './pages/More/Travel'
import SimpleEarn from "./pages/Earn/SimpleEarn"
import Funding from './pages/Funding/Funding'
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import { useUser } from './contexts/UserContext'
import AccountStatement from "./pages/AccountStatement/AccountStatement"
import Verification from "./pages/Verification/Verification"
import Terms from "./pages/Legal/Terms"
import Privacy from "./pages/Legal/Privacy"
import Support from "./pages/Support/Support"
import Deposit from "./pages/Deposit/Deposit"
import About from "./pages/About/About"
import Help from "./pages/Help/Help"
import Blog1 from "./pages/Company/Blog"
import Careers from "./pages/Company/Careers"
import Press from "./pages/Company/Press"
import Cookies from "./pages/Legal/Cookies"
import Risk from "./pages/Legal/Risk"
import Compliance from "./pages/Legal/Compliance"
import BuySell from "./pages/BuyCrypto/BuySell";
import LimitBuy from "./pages/BuyCrypto/LimitBuy";
import RecurringBuy from "./pages/BuyCrypto/RecurringBuy";
import Deposit1 from "./pages/BuyCrypto/Deposit";
import Alpha from "./pages/Trade/Alpha";
import Mission from './pages/More/Mission'
import Approach from './pages/More/Approach'
import Scholarship from './pages/More/Scholarship'
import WhoWeAre from './pages/More/WhoWeAre'
import Impact from './pages/More/Impact'
import Commitments from './pages/More/Commitments'


// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useUser()
  return isAuthenticated ? children : <Home />
}

// Public Route wrapper (redirect to dashboard if logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useUser()
  return !isAuthenticated ? children : <HomeLoggedIn />
}

function AppContent() {
  const { isAuthenticated } = useUser()

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/assets" element={
              <ProtectedRoute>
                <Assets />
              </ProtectedRoute>
            } />
            <Route path="/deposit" element={
              <ProtectedRoute>
                <Deposit />
              </ProtectedRoute>
            } />
            <Route
              path="/buy-crypto"
              element={
                <ProtectedRoute>
                  <BuySell />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buy-crypto/limit-buy"
              element={
                <ProtectedRoute>
                  <LimitBuy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buy-crypto/Recurring-buy"
              element={
                <ProtectedRoute>
                  <RecurringBuy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buy-crypto/Deposit-buy"
              element={
                <ProtectedRoute>
                  <Deposit1 onPurpose={"Deposit"} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buy-crypto/withdraw-buy"
              element={
                <ProtectedRoute>
                  <Deposit1 onPurpose={"Withdraw"} />
                </ProtectedRoute>
              }
            />
            <Route path="/rewards" element={
              <ProtectedRoute>
                <RewardsHub />
              </ProtectedRoute>
            } />
             <Route path="/forgot-password" element={
              
                <ForgotPassword />
              
            } />
            <Route path="/about" element={
              
                <About />
              
            } />
            <Route path="/help" element={
              
                <Help />
              
            } />
             <Route path="/blog" element={
              
                <Blog1 />
              
            } />
             <Route
              path="/trade/alpha"
              element={
                <ProtectedRoute>
                  <Alpha />
                </ProtectedRoute>
              }
            />
           
            <Route path="/press" element={<Press />} />
            <Route path="/terms" element={
              
                <Terms/>
              
            } />
            <Route path="/support" element={
              
                <Support/>
              
            } />
            <Route path="/privacy" element={
              
                <Privacy />
              
            } />
             <Route path="/cookies" element={
              
                <Cookies />
              
            } />
             <Route path="/risk" element={
              
                <Risk />
              
            } />
             <Route path="/compliance" element={
              
                <Compliance />
              
            } />
            <Route path="/futures/usd-m" element={
              <ProtectedRoute>
                <USDMFutures />
              </ProtectedRoute>
            } />
            <Route path="/futures/coin-m" element={
              <ProtectedRoute>
                <COINMFutures />
              </ProtectedRoute>
            } />
            <Route path="/futures/options" element={
              <ProtectedRoute>
                <Options />
              </ProtectedRoute>
            } />
            <Route path="/home" element={
              <ProtectedRoute>
                <HomeLoggedIn />
              </ProtectedRoute>
            } />
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route path="/trade/spot" element={
              <ProtectedRoute>
                <SpotPage />
              </ProtectedRoute>
            } />
            <Route path="/trade/margin" element={
              <ProtectedRoute>
                <MarginPage />
              </ProtectedRoute>
            } />
            <Route path="/trade/p2p" element={
              <ProtectedRoute>
                <P2P />
              </ProtectedRoute>
            } />
            <Route path="/trade/convert" element={
              <ProtectedRoute>
                <Convert/>
              </ProtectedRoute>
            } />
            <Route path="/trade/trading-bots" element={
              <ProtectedRoute>
                <Bot />
              </ProtectedRoute>
            } />
            <Route path="/trade/copy-trading" element={
              <ProtectedRoute>
                <CopyTradingPage />
              </ProtectedRoute>
            } />
            <Route path="/trade/apis" element={
              <ProtectedRoute>
                <ApiPage />
              </ProtectedRoute>
            } />
            <Route path="/earn" element={
              <ProtectedRoute>
                <Earn />
              </ProtectedRoute>
            } />
            <Route path="/earn/simple-earn" element={
              <ProtectedRoute>
                <Earn />
              </ProtectedRoute>
            } />
            <Route path="/earn/advanced-earns" element={
              <ProtectedRoute>
                <Earn />
              </ProtectedRoute>
            } />
            <Route path="/earn/loans" element={
              <ProtectedRoute>
                <Earn />
              </ProtectedRoute>
            } />
            <Route path="/earn/simple-earn" element={
              <ProtectedRoute>
                <SimpleEarn />
              </ProtectedRoute>
            } />
            {/* Square Routes */}
            <Route path="/square" element={
              <ProtectedRoute>
                <Square />
              </ProtectedRoute>
            } />
            <Route path="/square/academy" element={
              <ProtectedRoute>
                <Academy />
              </ProtectedRoute>
            } />
            <Route path="/square/blog" element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            } />
            <Route path="/square/research" element={
              <ProtectedRoute>
                <Research />
              </ProtectedRoute>
            } />
            {/* More Routes */}
            <Route path="/vip-institutional" element={
              <ProtectedRoute>
                <VIPInstitutional />
              </ProtectedRoute>
            } />
            <Route path="/affiliate" element={
              <ProtectedRoute>
                <Affiliate />
              </ProtectedRoute>
            } />

            <Route path="/referral" element={
              <ProtectedRoute>
                <Referral />
              </ProtectedRoute>
            } />
            <Route path="/referrals" element={
              <ProtectedRoute>
                <Ref />
              </ProtectedRoute>
            } />
             <Route path="/launchpool" element={
              <ProtectedRoute>
                <Launchpool />
              </ProtectedRoute>
            } />
            <Route path="/megadrop" element={
              <ProtectedRoute>
                <Megadrop />
              </ProtectedRoute>
            } />
            <Route path="/miningpool" element={
              <ProtectedRoute>
                <Miningpool />
              </ProtectedRoute>
            } />
            <Route path="/nft" element={
              <ProtectedRoute>
                <Nft />
              </ProtectedRoute>
            } />
            <Route path="/pay" element={
              <ProtectedRoute>
                <Pay />
              </ProtectedRoute>
            } />
            <Route path="/fan-token" element={
              <ProtectedRoute>
                <FanToken/>
              </ProtectedRoute>
            } />
            <Route path="/finsocial-wallet" element={
              <ProtectedRoute>
                <FinsocialWallet/>
              </ProtectedRoute>
            } />
            <Route path="/chain" element={
              <ProtectedRoute>
                <BnbChain/>
              </ProtectedRoute>
            } />
             <Route path="/charity" element={
              <ProtectedRoute>
                <Charity/>
              </ProtectedRoute>
            } />
            <Route path="/markets" element={
              <ProtectedRoute>
                <Markets/>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings/>
              </ProtectedRoute>
            } />
            <Route path="/travel" element={
              <ProtectedRoute>
                <Travel/>
              </ProtectedRoute>
            } />
            <Route path="/verify" element={<Verify />} />
            <Route path="/funding" element={<Funding />} />
             <Route path="/transaction-history" element={<TransactionHistory />} />
             <Route path="/account-statement" element={<AccountStatement />} />
             <Route path="/verification" element={<Verification />} />
             {/* Charity related routes */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/commitments" element={<Commitments />} />
          </Routes>
        </div>
        
        {/* AI Assistant - Always visible */}
        <AIAssistant 
          chatbotUrl="https://new.hindai.finsocial.tech"
          position="bottom-right"
          showLabel={true}
          size="medium"
        />
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
