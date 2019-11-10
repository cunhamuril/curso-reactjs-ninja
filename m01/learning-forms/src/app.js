'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // value: 'Valor inicial',
      value: '2',
      checked: false,
      showContent: false
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={e => {
              console.log(e.target.value)
              this.setState({
                value: e.target.value
              })
            }}
          />
          {/* <input
            type="text"
            defaultValue='Valor inicial'
          /> */}
        </form>

        <br />





        <h1>CheckBox e Radio</h1>
        <label>
          {/* <input
            type="checkbox"            
            value='my-checkbox'
            checked={this.state.checked}
            onChange={e => this.setState({ checked: e.target.checked })}
          /> */}
          <input
            type="checkbox"
            value='my-checkbox'
            defaultChecked
          />
          Checkbox
        </label>
        <br />
        <label>
          <input
            type="radio"
            name='rd'
            value="1"
            defaultChecked
          />
          Radio 1
        </label>
        <label>
          <input
            type="radio"
            name='rd'
            value="2"
          />
          Radio 2
        </label>




        <h1>Select e Option</h1>
        <form>
          <select value={this.state.value} onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}>
            <option>op 1</option>
            <option>op 2</option>
            <option>op 3</option>
          </select>
        </form>




        <br /> <br />
        <h1>Textarea</h1>
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log('event', e)
          }}
          onChange={e => {
            console.log('name', e.target.name)
            console.log('name', e.target.value)
          }}

        >
          <textarea defaultValue={"default\nvalue"} />
          <input type="name" name="name" />
          <input type="email" name="email" />
          <button type="submit">Submit</button>
        </form>


        <h1>setState is Async</h1>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar Conteúdo
        </label>
        {this.state.showContent && <div>Olha eu aqui!</div>}
      </div>
    )
  }
}

export default App