import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-box'>
          <h3>Mortgage calculator</h3>
          <div id='App-options-list'>
            <div className='App-list-item'>
              <p className='title'>
                Purchase price: <span className='price'>$450,000</span>
              </p>
              <input
                className='input-range'
                type='range'
                name='purchase_price'
                min='0'
                max='100'
                step='5'
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>
                Down payment: <span className='price'>$135,000</span>
              </p>
              <input
                className='input-range'
                type='range'
                name='down_payment'
                min='0'
                max='100'
                step='5'
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>
                Repayment time: <span className='price'>25 years</span>
              </p>
              <input
                className='input-range'
                type='range'
                name='repayment_time'
                min='0'
                max='100'
                step='5'
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>
                Interest rate: <span className='price'>3%</span>
              </p>
              <input
                className='input-range'
                type='range'
                name='interest_rate'
                min='0'
                max='100'
                step='5'
              />
            </div>
            <div className='App-list-item'>
              <p className='title'>Loan amount</p>
              <p className='loan-amount-value'>$315,000</p>
            </div>
            <div className='App-list-item'>
              <p className='title'>Estimated pr. month:</p>
              <p className='loan-amount-value'>$1,300</p>
            </div>
          </div>
          <button type='button' className='btn btn-submit'>Get a mortgage quote</button>
        </div>
      </div>
    )
  }
}

export default App
