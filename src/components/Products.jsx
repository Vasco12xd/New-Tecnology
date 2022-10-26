import React from "react";
import "../index.css"
const Products = () => {
    return (
      <>
        <h2 className="text-center my-4">List Products</h2>
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
            <tbody >
                <tr>
                    <td>Perro</td>
                    <td>$100</td>
                    <td>
                        <button type="button" className="btn btn-warning m-2">Add</button>
                        <button type="button" className="btn btn-warning ">Delete</button>
                    </td>
                </tr>
            </tbody>

        </table>
      </>
    );
};

export {Products};