import React from 'react'

const TableTop = ({ setSearch }) => {

    // const [search, setSearch] = useState('');
    // const keys = ["Customer ID", "Customer Name", "Customer Address", "Customer Mobile No."];

    // const searchInput = (customers) => {
    //     return customers.filter((item) =>
    //         keys.some((key) => item[key].toLowerCase().includes(search))
    //     );
    // }

    return (
        <>

            <div className="row">
                <div className="col-md-6">
                    <div class="input-group mb-3">
                        <input type="search" class="form-control" className='search' placeholder="Search ......" aria-label="Recipient's username" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableTop
