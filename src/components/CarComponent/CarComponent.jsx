import styles from './CarComponent.module.css'
import React from 'react';
import axios from 'axios';

class CarComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        cars: []
      }
    }

    componentDidMount() {
        axios.get('/cars.json')
          .then(response => {
            this.setState({ cars: response.data });
          })
          .catch(error => {
            console.error("There was an error fetching the cars!", error);
          });
      }


  render () {
    const { cars } = this.state;
    return (
        <ol className={styles.box}>
        <div className={styles.header}>Cars</div>
          {cars.map(car => (
            <li key={car.id}>
              {car.make} {car.model} ({car.year})
            </li>
          ))}
      </ol>
    )
 }
}

export default CarComponent;