console.log(JSON.stringify(items))

class SaleList extends React.Component {
  constructor(props, context) {
    super(props, context)
    //    this.toggleChecked = this.toggleChecked.bind(this);
  }

  render() {
    var rows = []
    for (var i = 0; i < items.length; i++) {
      rows.push(<h1>Hello</h1>);
    }
    return (rows);
  }
};


ReactDOM.render(
  <SaleList items={items}/>,
  document.getElementById('app')
);
