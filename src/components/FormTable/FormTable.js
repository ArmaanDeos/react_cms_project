import React from 'react'

const FormTable = ({ customers }) => {
    return (
        <>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Customer Mobile No.</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(el => (
                            <tr key={el.id}>
                                <th scope="row">{el.id}</th>
                                <td>{el.name}</td>
                                <td>{el.address}</td>
                                <td>{el.mobile}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default FormTable
