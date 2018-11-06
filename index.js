var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(JSON.stringify(items));

var SaleItem = function (_React$Component) {
  _inherits(SaleItem, _React$Component);

  function SaleItem(props, context) {
    _classCallCheck(this, SaleItem);

    var _this = _possibleConstructorReturn(this, (SaleItem.__proto__ || Object.getPrototypeOf(SaleItem)).call(this, props, context));

    console.log(JSON.stringify(props));
    return _this;
  }

  _createClass(SaleItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'card' },
        React.createElement(
          'span',
          { 'class': 'font2' },
          this.props.title
        ),
        React.createElement('br', null),
        React.createElement('img', { src: this.props.url, crossorigin: true })
      );
    }
  }]);

  return SaleItem;
}(React.Component);

var SaleList = function (_React$Component2) {
  _inherits(SaleList, _React$Component2);

  function SaleList(props, context) {
    _classCallCheck(this, SaleList);

    return _possibleConstructorReturn(this, (SaleList.__proto__ || Object.getPrototypeOf(SaleList)).call(this, props, context));
    //    this.toggleChecked = this.toggleChecked.bind(this);
  }

  _createClass(SaleList, [{
    key: 'render',
    value: function render() {
      var rows = [];
      for (var i = 0; i < items.length; i++) {
        rows.push(React.createElement(
          'h1',
          null,
          'Hello'
        ));
        rows.push(React.createElement(SaleItem, items[i]));
      }
      return rows;
    }
  }]);

  return SaleList;
}(React.Component);

;

ReactDOM.render(React.createElement(SaleList, { items: items }), document.getElementById('app'));