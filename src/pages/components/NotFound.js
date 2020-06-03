import React, { PureComponent } from "react";

class NotFound extends PureComponent {
  handleBackClick = () => {
    this.props.history.goBack()
  }
  handleFowardClick = () => {
    this.props.history.goForward()
  }
  handleRandomClick = () => {
    const id = Math.round(Math.random () * (10 - 1) + 1)
    this.props.history.push(`/videos?id=${id}`)
  }
  render () {
    return (
      <div>
        <h1>404</h1>
        <h3>:(</h3>
        <h2>No hemos encontrado lo que buscabas.</h2>
        <button
          className="Button"
          onClick={this.handleForwardClick}
        >
          ir a la ruta siguiente 
        </button>
        <button
          className="Button"
          onClick={this.handleBackClick}
        >
          ir a la ruta Anterior
        </button>
        <button
          className="Button"
          onClick={this.handleRandomClick}
        >
          Video Random
        </button>
      </div>
    )
  }
}

export default NotFound