import React from "react";
import {
    addCustomer,
    customerArr,
    deleteCustomer,
    searchCustomer,
} from "../../BLL/CustomerBLL";

const ControllsBtn = ({
    id,
    name,
    mobile,
    address,
    setCustomers,
    setName,
    setMobile,
    setAddress,
}) => {


    //   AddClick
    function addClick() {
        addCustomer(id, name, address, mobile);
        setCustomers([...customerArr]);
        alert("Customer Added Successfully!");
    }

    //   ModifyClick
    function modifyClick() {
        // let cus = modifyCustomer(id);
        // // setAddress(cus.address);
        // setMobile(cus.mobile)
        // setName(cus.name);
        alert('Modify Clicked')
    }

    //  DeleteClick
    function deleteClick() {
        let msg = deleteCustomer(id)
        alert(msg);
        // after delete details customerArr is re-render
        setCustomers([...customerArr])
    }

    //   SearchClick
    function searchClick() {
        let cus = searchCustomer(id);
        if (cus) {
            setName(cus.name);
            setAddress(cus.address);
            setMobile(cus.mobile);
            alert("Data Matched!");
        } else {
            alert("Data not Matched!");
        }
    }
    return (
        <>
            <div className="row">
                <div className="mb-3 col-md-6">
                    <button
                        type="button"
                        style={{ width: "100%" }}
                        class="btn btn-primary"
                        onClick={addClick}
                    >
                        ADD DETAILS
                    </button>
                </div>
                <div className="mb-3 col-md-6">
                    <button
                        type="button"
                        style={{ width: "100%" }}
                        class="btn btn-danger"
                        onClick={deleteClick}
                    >
                        DELETE DETAILS
                    </button>
                </div>
                <div className="mb-3 col-md-6">
                    <button
                        type="button"
                        style={{ width: "100%" }}
                        class="btn btn-warning"
                        onClick={searchClick}
                    >
                        SEARCH DETAILS
                    </button>
                </div>
                <div className="mb-3 col-md-6">
                    <button
                        type="button"
                        style={{ width: "100%" }}
                        class="btn btn-secondary"
                        onClick={modifyClick}
                    >
                        MODIFY DETAILS
                    </button>
                </div>
            </div>
        </>
    );
};

export default ControllsBtn;
