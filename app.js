const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 Heading"),
    React.createElement("h1", {}, "I'm an h2 Heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 Heading"),
    React.createElement("h1", {}, "I'm an h2 Heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);
