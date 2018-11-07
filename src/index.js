console.log(JSON.stringify(items))

class SaleItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    console.log(JSON.stringify(props))
  }

  render() {
    if (this.props['prices'] === undefined) {
      return (<div></div>)
    }

    return (
      <div class='card'>
        <span class='font2'>{this.props.title}</span>
        <br/>
        <img src={this.props.image_url} crossOrigin=''/>
        <br/>
        <div class='right'>
          <span class='font3'>{this.props.prices[0]}</span>
          <span class='font1'>{this.props.prices[1]}</span>
        </div>
      </div>)
  }
}

class SaleList extends React.Component {
  constructor(props, context) {
    super(props, context)
    //    this.toggleChecked = this.toggleChecked.bind(this);
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