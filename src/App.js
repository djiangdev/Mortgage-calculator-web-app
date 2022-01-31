import React, { Component } from 'react'
import './App.css'
import NumberFormat from 'react-number-format'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      purchase_price: 0,
      down_payment: 0,
      repayment_time: 0,
      interest_rate: 0,
      loan_amount: 0,
      estimated_per_month: 0
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-box'>
          <h3>Mortgage calculator</h3>

          <div id='App-options-list'>
            <div className='App-list-item'>
              <p className='title'>
                Purchase price:
                <span className='price'>
                  <NumberFormat
                    value={this.state.purchase_price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </span>
              </p>
              <input
                className='input-range'
                type='range'
                name='purchase_price'
                min='0'
                max='1000000'
                step='1000'
                value={this.state.purchase_price}
                onChange={this.onChange}
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>
                Down payment:{' '}
                <span className='price'>
                  <NumberFormat
                    value={this.state.down_payment}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </span>
              </p>
              <input
                className='input-range'
                type='range'
                name='down_payment'
                min='0'
                max='500000'
                step='1000'
                value={this.state.down_payment}
                onChange={this.onChange}
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>
                Repayment time:{' '}
                <span className='price'>
                  {this.state.repayment_time} year(s)
                </span>
              </p>
              <input
                className='input-range'
                type='range'
                name='repayment_time'
                min='0'
                max='30'
                step='1'
                value={this.state.repayment_time}
                onChange={this.onChange}
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>
                Interest rate:{' '}
                <span className='price'>{this.state.interest_rate}%</span>
              </p>
              <input
                className='input-range'
                type='range'
                name='interest_rate'
                min='0'
                max='10'
                step='1'
                value={this.state.interest_rate}
                onChange={this.onChange}
              />
            </div>

            <div className='App-list-item'>
              <p className='title'>Loan amount</p>
              <p className='loan-amount-value'>
                <NumberFormat
                  value={this.state.loan_amount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </p>
            </div>

            <div className='App-list-item'>
              <p className='title'>Estimated pr. month:</p>
              <p className='est-per-month-value'>
                <NumberFormat
                  value={this.state.estimated_per_month}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </p>
            </div>
          </div>

          <button type='button' className='btn btn-submit'>
            Get a mortgage quote
          </button>
        </div>
      </div>
    )
  }
}

export default App
