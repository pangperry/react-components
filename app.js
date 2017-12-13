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


var GroceryItem = (props) => (
  <li>{props.item}</li>
);


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
}
ReactDOM.render(<GroceryListItems items={['apple', 'broccoli', 'steak']} />, document.getElementById("app"));