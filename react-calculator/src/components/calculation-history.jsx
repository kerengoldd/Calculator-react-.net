import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import agent from '../api/agent';

const CalculationHistory = () => {
  let history = useHistory();

  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    agent.Calculation.getHistory().then((response) => {
      console.log(response);
      setCalculations(response);
    });
  }, []);

  const onEdit = (id) => {
    history.push(`calculator/${id}`);
  };

  const onDelete = (id) => {
    var r = window.confirm('Are You Sure?');
    if (r == true) {
      agent.Calculation.delete(id).then(response => {
          console.log(response);
          window.location.reload();
      });
    }
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='col-6'>
        <table class='table table-bordered table-dark'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Values</th>
              <th scope='col'>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {calculations.map((cal, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{cal.values}</td>
                <td>{cal.total}</td>
                <td>
                  <button
                    className='btn btn-info mr-2'
                    onClick={() => onEdit(cal.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => onDelete(cal.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculationHistory;
