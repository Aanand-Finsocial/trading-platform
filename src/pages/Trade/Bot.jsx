import React from 'react'
import TradingBotsPage from './TradingBotsPage'
import BotMarketplace from '../../components/Trading/BotMarketplace'
import HotCoinLeaderboard from '../../components/Trading/HotCoinLeaderboard'
import FeaturesPage from '../../components/Trading/FeaturesPage'
import FAQPage from '../../components/Trading/FAQPage'
import Footer from '../../components/Footer/Footer'

const Bot = () => {
  return (
    <div>
        <TradingBotsPage/>
        <BotMarketplace/>
        <HotCoinLeaderboard/>
        <FeaturesPage/>
        <FAQPage/>
        <Footer/>
    </div>
  )
}

export default Bot