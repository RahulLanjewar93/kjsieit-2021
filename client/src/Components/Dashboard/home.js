import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { Table, Button } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <div className='divider grey'></div>
                <h4>Update Inventory</h4>
                <div className='divider grey'></div>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <Table className='striped centered' striped border hover>
                                <thead>
                                    <tr style={{ fontSize: '2.5vmin' }}>
                                        <th>Title</th>
                                        <th>Company</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <input type="text" value={value.title} onChange={(e) => { value.updateValue(e, "title") }} /></td>
                                        <td><input type="text" value={value.company} onChange={(e) => { value.updateValue(e, "company") }} /></td>
                                        <td><input type="number" value={value.price} onChange={(e) => { value.updateValue(e, "price") }} /></td>
                                        <td><Button size="sm" onClick={() => { value.onSave(value.id) }}>{value.id ? "Save" : "Add new row"}</Button></td>
                                    </tr>
                                    {value.Alldata.map(product => {
                                        return (
                                            <tr>
                                                <td>{product.title}</td>
                                                <td>{product.company}</td>
                                                <td>{product.price}</td>
                                                <td><Button size="sm" variant="primary" onClick={() => { value.onEdit(product.id) }}>Edit</Button> &nbsp;
                                       <Button size="sm" variant="danger" onClick={() => { value.onDelete(product.id) }}>Delete</Button></td>
                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </Table>
                        )

                    }}</ProductConsumer>
            </div>
        );
    }
}

