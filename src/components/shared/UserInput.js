import React from 'react'
const UserForm = ({ earthObjects, handleSubmit, handleChange }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Start Date: </label>
            <input
              required="required"
              type="date"
              className="form-control"
              name="startDate"
              value={earthObjects.startDate || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>End Date: </label>
            <input
              required="required"
              type="date"
              className="form-control"
              name="endDate"
              value={earthObjects.endDate || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Submit"
            />
          </div>
      </form>
    </div>
  </div>
)
export default UserForm
