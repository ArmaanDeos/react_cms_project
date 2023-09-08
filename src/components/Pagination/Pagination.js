import React from "react";
import { customerArr } from "../../BLL/CustomerBLL";


// Global Variable for current index
var curr_Index = 0;

const Pagination = ({ setId, setAddress, setMobile, setCustomers, setName, id }) => {

    const showCustomers = (index) => {
        let cus = customerArr[index];
        setId(cus.id);
        setName(cus.name);
        setAddress(cus.address);
        setMobile(cus.mobile)
    }

    // First Button Click
    const firstBtn = () => {
        let curr_Index = 0;
        showCustomers(curr_Index)
        alert(`Your current id:${id}`)
    }

    // Previous Button Click
    const previousBtn = () => {
        if (curr_Index > 0) {
            curr_Index--;
        }
        showCustomers(curr_Index)
        alert(`Your current id:${id}`)
    }

    // Next Button Click
    const nextBtn = () => {
        if (curr_Index < customerArr.length - 1) {
            curr_Index++;

        }
        showCustomers(curr_Index);
        alert(`Your current id:${id}`)
    }

    // Last Button Click
    const lastBtn = () => {
        curr_Index = customerArr.length - 1
        showCustomers(curr_Index)
        alert(`Your current id:${id}`)
    }

    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <button
                            type="button"
                            style={{ width: "100%" }}
                            class="btn btn-primary"
                            onClick={firstBtn}
                        >
                            First
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <button
                            type="button"
                            style={{ width: "100%" }}
                            class="btn btn-secondary"
                            onClick={previousBtn}
                        >
                            Previous
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <button
                            type="button"
                            style={{ width: "100%" }}
                            class="btn btn-secondary"
                            onClick={nextBtn}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <button
                            type="button"
                            style={{ width: "100%" }}
                            class="btn btn-primary"
                            onClick={lastBtn}
                        >
                            Last
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pagination;
