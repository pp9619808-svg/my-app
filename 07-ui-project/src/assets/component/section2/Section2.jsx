import React from 'react'

const Section2 = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-br from-cyan-950 to-blue-900 py-20 px-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-white mb-16 text-center'>Features</h2>
        <div className='grid md:grid-cols-3 gap-12'>
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center hover:bg-white/20 transition-all duration-300'>
            <div className='w-24 h-24 bg-blue-400 rounded-2xl mx-auto mb-8 flex items-center justify-center'>
              <span className='text-3xl font-bold text-white'>💳</span>
            </div>
            <h3 className='text-2xl font-semibold text-white mb-4'>Digital Wallet</h3>
            <p className='text-gray-200 leading-relaxed'>Secure mobile payments and instant transfers with bank-grade encryption.</p>
          </div>
          
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center hover:bg-white/20 transition-all duration-300'>
            <div className='w-24 h-24 bg-green-400 rounded-2xl mx-auto mb-8 flex items-center justify-center'>
              <span className='text-3xl font-bold text-white'>📊</span>
            </div>
            <h3 className='text-2xl font-semibold text-white mb-4'>Real-time Analytics</h3>
            <p className='text-gray-200 leading-relaxed'>Track spending patterns and get personalized financial insights daily.</p>
          </div>
          
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center hover:bg-white/20 transition-all duration-300'>
            <div className='w-24 h-24 bg-purple-400 rounded-2xl mx-auto mb-8 flex items-center justify-center'>
              <span className='text-3xl font-bold text-white'>🛡️</span>
            </div>
            <h3 className='text-2xl font-semibold text-white mb-4'>Advanced Security</h3>
            <p className='text-gray-200 leading-relaxed'>Biometric authentication and AI fraud detection keeps your money safe.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
