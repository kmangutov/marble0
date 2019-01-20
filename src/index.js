console.log(JSON.stringify(items))

class SaleItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    //  Hack to to avoid default visited <a href...> styling
    window.location.href = this.props.url
  }

  render() {
    if (this.props['prices'] === undefined) {
      return (<div></div>)
    }

    return (
      <div class='card' onClick={this.onClick}>
        <center><img src={this.props.image_url} crossOrigin=''/></center>
        <br/>
        <div>
          <span class='font2'>{this.props.title}</span><br /><br />
          <span class='font3'>Was: ${this.props.prices[1]}</span><br />
          <span class='font1'>Now: ${this.props.prices[0]}</span>
          <span class='font-highlight'>50% off</span>
        </div>
      </div>)
  }
}

class SaleList extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var rows = []
    for (var i = 0; i < items.length; i++) {
      rows.push(<SaleItem {...items[i]} />)
    }
    return (rows);
  }
};


ReactDOM.render(
  <SaleList items={items}/>,
  document.getElementById('app')
);