import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function Buscar() {
  const [poke, setPoke] = useState({
    pokemon: "",
    img: "#",
    name: "",
  });

  const { pokemon } = poke;

  const LaApi = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await res.json();
    console.log(data);
    setPoke({
      img: data.sprites.front_default,
      name: data.name,
    });
  };

  const cargarDatos = (ev) => {
    setPoke({
      pokemon: ev.target.value,
    });
  };

  const buscarPokemon = (ev) => {
    ev.preventDefault();
    if (!pokemon) {
      alert("ingresa nombre de pokemon");
    } else {
      LaApi();
    }
  };

  return (
    <div>
      <h3>Buscar Pokemon</h3>
      <Form onSubmit={buscarPokemon}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pokemon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de Pokemon"
            name="pokemon"
            onChange={cargarDatos}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Buscar Pokemon
        </Button>
      </Form>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poke.img} />
        <Card.Body>
          <Card.Title> {poke.name} </Card.Title>
          {/* <Card.Text>{poke.height}</Card.Text> */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

////

// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";

// export default class Buscar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       img: "#",
//     };
//   }

//   LaApi = async () => {
//     let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
//     let data = await res.json();
//     console.log(data.sprites.front_default);
//     this.setState({
//         img: data.sprites.front_default
//     })
//   };

//   cargarDatos = ev => {
//       this.setState({
//           name: ev.target.value
//       })
//   }

//   buscarPokemon = ev => {
//       ev.preventDefault()
//       const poke = this.state.name
//       console.log(poke);
//       this.LaApi()

//   }

//   render() {
//     return (
//       <div>
//         <h3>Buscar Pokemon</h3>
//         <Form onSubmit={this.buscarPokemon} >
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Pokemon</Form.Label>
//             <Form.Control type="text" placeholder="Nombre de Pokemon"
//             value={this.state.name}
//             onChange={this.cargarDatos}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Buscar Pokemon
//           </Button>
//         </Form>

//         <img src={this.state.img} alt=""/>
//       </div>
//     );
//   }
// }
