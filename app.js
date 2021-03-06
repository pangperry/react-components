// TODO
// var GroceryListItems = (props) => (
//   <ul>
//     {props.items.map((item,i) =>
//       <li key={i}>{item}</li>)}
//   </ul>
// );
// class GroceryListItems extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <ul>
//         {this.props.items.map((item, i) =>
//           <li key={i}>{item}</li>)}
//       </ul>
//     )
//   }
// }
// ReactDOM.render(<GroceryListItems items={['apple', 'broccoli', 'steak']} />, document.getElementById("app"));


class GroceryItem extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      bought: false,
    };
  }

  onListItemHover() {
    this.setState({
      bought: !this.state.bought
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bought ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
};


class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, i) =>
          <GroceryItem item={item} />
          )}
      </ul>
    )
  }
};

ReactDOM.render(<GroceryListItems items={['apple', 'broccoli', 'steak']} />, document.getElementById("app"));