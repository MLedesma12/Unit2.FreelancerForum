const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// // Function to update the average price in the DOM
function updateAveragePrice() {
  const average = calculateAveragePrice();
  const averagePrice = document.querySelector("#average-price")
  averagePrice.innerText = average.toFixed(2);
}
//  Function to calculate the average starting price of freelancers
function calculateAveragePrice() {
  const total = freelancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  return total / freelancers.length;
}

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
];

const occupations = [
  "gardener",
  "programmer",
  "teacher",
  "teacher",
  "teacher",
  "programmer",
  "teacher",
  "driver",
];
// // Function to generate a random freelancer and add to the array
function addRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20; // Random price between 20 and 120
  const newFreelancer = {
    name: randomName,
    price: randomPrice,
    occupation: randomOccupation,
  };
  freelancers.push(newFreelancer);
  render();
}
// // Initial rendering of freelancers
render();
// // Set interval to add a freelancer and rerender every 3 seconds
setInterval(addRandomFreelancer, 3000);

function render() {
  // doc query for the ul on the HTML file
  const memberlist = document.querySelector("#freelancer-list");
  const frl = freelancers.map((freelancers) => {
    const element = document.createElement("li");
    element.textContent = ` ${freelancers.name}  ${freelancers.occupation} ${freelancers.price} `;
    return element;
  });
  memberlist.replaceChildren(...frl);
  updateAveragePrice()
}
// render();
