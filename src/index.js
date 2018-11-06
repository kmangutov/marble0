console.log(JSON.stringify(items))

class SaleItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    console.log(JSON.stringify(props))
  }

  render() {
    return (<div class='card'><span class='font2'>{this.props.title}</span><br/><img src={this.props.url} crossorigin/></div>)
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
      rows.push(<h1>Hello</h1>);
      rows.push(<SaleItem {...items[i]} />)
    }
    return (rows);
  }
};


ReactDOM.render(
  <SaleList items={items}/>,
  document.getElementById('app')
);
