function Book(props) {
  const image = React.createElement("img", { src: props.image || "https://via.placeholder.com/100", width: "100", height: "100" });
  const title = React.createElement("h2", { style: { color: "red" } }, props.title || "No title");
  const price = React.createElement("div", null, "Price: " + (props.price || 0));
  const btn = React.createElement("button", { style: { color: "blue" }, onClick: function() { alert((props.title || "Book") + " added to cart"); } }, "Add To Cart");

  return React.createElement("div", { className: "book" }, [image, title, price, btn]);
}

const bookdata = [
  { image: "", title: "ReactJS", price: 465 },
  { image: "", title: "ReactJS", price: 570 },
  { image: "", title: "ExpressJS", price: 555 },
  { image: "", title: "Python", price: 765 },
  { image: "", title: "ReactJS", price: 570 },
  { image: "", title: "ExpressJS", price: 555 },
  { image: "", title: "Python", price: 765 },
];

function App() {
  var bookstore = bookdata.map(function(b, i) {
    return React.createElement(Book, Object.assign({ key: i }, b));
  });
  return React.createElement("div", { className: "bookstore" }, bookstore);
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));