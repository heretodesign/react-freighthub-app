import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Columns, Column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
    state = {
        shipments: [],
    }

    componentDidMount() {
      axios.get('http://localhost:3000/shipments')
        .then(response => {
          console.log(response.data);
            let data = [...response.data]; //use spread to copy the res object into array
            console.log(data);
            this.setState({
                shipments: data
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    // updateName = (shipmentId) => {
    //   axios.put(`http://localhost:3000/shipments/${shipmentId}`)
    //   .then(response => {
    //     this.setState({
    //       shipments: this.state.shipments.filter(shipment => shipment.id != shipmentId)
    //     })
    //   })
    //   .catch(error => {
    //     alert('Cannnot Mark it as Complete')
    //   })
    // }

    render() {
        return (
          <div>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large notification">
                    <div className="firstsection">
                      <h3 className="title is-5">Shipment Database Table</h3>
                        <div className="content">
                          <div className="columns">
                            <div className="column" id="tablelisttask">
                              <table className="table is-mobile">
                                <thead>
                                  <tr>
                                    <th><abbr title="id" className="is-3">Name</abbr></th>
                                    <th><abbr title="task">Cargo</abbr></th>
                                    <th><abbr title="completed">Mode</abbr></th>
                                    <th><abbr title="completed">Type</abbr></th>
                                    <th><abbr title="due">Origin</abbr></th>
                                    <th><abbr title="done">Destination</abbr></th>
                                    <th><abbr title="completed">Total</abbr></th>
                                    <th><abbr title="completed">Status</abbr></th>
                                    <th><abbr title="action">Action</abbr></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    this.state.shipments.map(shipment => (
                                      <tr className="is-5" key={shipment.id}>
                                        <td className="is-6">{ shipment.name }</td>
                                        <td className="is-5">{ shipment.cargo[0].type } / { shipment.cargo[0].description }/ { shipment.cargo[0].volume }</td>
                                        <td className="is-5">{ shipment.mode }</td>
                                        <td className="is-5">{ shipment.type }</td>
                                        <td className="is-5">{ shipment.origin }</td>
                                        <td className="is-5">{ shipment.destination }</td>
                                        <td className="is-5">{ shipment.total }</td>
                                        <td className="is-5">{ shipment.status }</td>
                                        <td className="is-5">
                                          <Link to={`/pages/viewpage/${shipment.id}`}>
                                            <button className="button is-info">View Detials</button>
                                          </Link>
                                        </td>
                                        {/*<td><button onClick={() => {this.updateName(shipment.id)} } className="button is-danger">Update Name</button></td>*/}
                                      </tr>
                                    ))
                                  }
                                </tbody>
                              </table>
                             </div>
                          </div>
                        </div>
                     </div>
                </div>
            </section>
        </div>
    );
  }
}


export default ListPage
