import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Columns, Column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
const paginate = require("paginate-array")


class ListPage extends React.Component {
    state = {
        shipments: [],
        size: 20,
        page: 1,
        currPage: null
    }

    componentDidMount() {
      axios.get('/shipments')
        .then(response => {
            let data = [...response.data]; //use spread operator to copy the res into a new array
            const { page, size } = this.state;
            const currPage = paginate(data, page, size);

            this.setState({
              ...this.state,
              data,
              currPage
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    previousPage = () => {
      const { currPage, page, size, data } = this.state;
      if (page > 1) {
        const newPage = page - 1;
        const newCurrPage = paginate(data, newPage, size);
        this.setState({
          ...this.state,
          page: newPage,
          currPage: newCurrPage
        });
      }
    }

    nextPage = () => {
      const { currPage, page, size, data } = this.state;
      if (page < currPage.totalPages) {
        const newPage = page + 1;
        const newCurrPage = paginate(data, newPage, size);
        this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
      }
    }


    render() {
       const { page, size, currPage } = this.state;
        return (
          <div>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large notification">
                    <div className="firstsection">
                      <h3 className="title is-5">Shipment Database Table</h3>
                      <h3 className="title is-6">Page: {page} && Size: {size}</h3>
                        <div className="content">
                          <div className="columns">
                            <div className="column" id="tablelisttask">
                              <table className="table is-mobile">
                                <thead>
                                  <tr>
                                   <th><abbr title="id" className="is-3">id</abbr></th>
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
                                { currPage &&
                                  <tbody>
                                    {
                                      currPage.data.map(shipment => (
                                        <tr className="is-5" key={shipment.id}>
                                          <td className="is-6">{ shipment.id }</td>
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
                                              <button className="button is-info has-background-black-bis">View Details</button>
                                            </Link>
                                          </td>
                                          {/*<td><button onClick={() => {this.updateName(shipment.id)} } className="button is-danger">Update Name</button></td>*/}
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                }
                              </table>
                              <div className="columns">
                                <div className="column is-2 has-text-centered">
                                  <button
                                    onClick={this.previousPage}
                                    className="button is-info">
                                    Previous Page
                                  </button>
                                </div>
                                <div className="column is-1">
                                  <button
                                    onClick={this.nextPage}
                                    className="button is-info">
                                    Next Page
                                  </button>
                                </div>
                              </div>
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
