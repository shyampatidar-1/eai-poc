

const PasswordPolicy = () => {
  const policies = [
    {
      id: 1,
      name: 'Policy 16072025',
      minLength: 8,
      uppercase: true,
      lowercase: true,
      specialChar: true,
      number: true,
      expireDays: 5,
      warningDays: 1,
      maxInvalidAttempts: 5,
      lockoutDuration: '5 mins',
      passwordHistory: 5,
    },
    {
      id: 2,
      name: 'FinalTest',
      minLength: 8,
      uppercase: true,
      lowercase: true,
      specialChar: true,
      number: true,
      expireDays: 60,
      warningDays: 10,
      maxInvalidAttempts: 3,
      lockoutDuration: '7 mins',
      passwordHistory: 2,
    },
    {
      id: 3,
      name: 'policy-007',
      minLength: 8,
      uppercase: true,
      lowercase: true,
      specialChar: true,
      number: true,
      expireDays: 90,
      warningDays: 10,
      maxInvalidAttempts: 5,
      lockoutDuration: '3 mins',
      passwordHistory: 5,
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Password Policy</h3>
          {/* <button className="btn btn-primary">Add Policy</button> */}
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#passwordPolicyModal">
            Add Policy
          </button>
        </div>

        <div className="row">
          {policies.map((policy, index) => (
            <div className="col-md-4 mb-4" key={policy.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Policy #{index + 1}</h5>
                  <ul className="list-unstyled small mb-3">
                    <li><strong>Policy Name:</strong> {policy.name}</li>
                    <li><strong>Min Length:</strong> {policy.minLength}</li>
                    <li><strong>Uppercase:</strong> {policy.uppercase.toString()}</li>
                    <li><strong>Lowercase:</strong> {policy.lowercase.toString()}</li>
                    <li><strong>Special Char:</strong> {policy.specialChar.toString()}</li>
                    <li><strong>Number:</strong> {policy.number.toString()}</li>
                    <li><strong>Expire (Days):</strong> {policy.expireDays}</li>
                    <li><strong>Warning (Days):</strong> {policy.warningDays}</li>
                    <li><strong>Max Invalid Attempts:</strong> {policy.maxInvalidAttempts}</li>
                    <li><strong>Lockout Duration:</strong> {policy.lockoutDuration}</li>
                    <li><strong>Password History:</strong> {policy.passwordHistory}</li>
                  </ul>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="modal fade" id="passwordPolicyModal" tabIndex="-1" aria-labelledby="passwordPolicyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="passwordPolicyModalLabel">Password Policy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <h6><strong>Enforcement</strong></h6>

                <div className="mb-3">
                  <label className="form-label">Policy Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Minimum Length</label>
                    <select className="form-select">
                      <option>Select</option>
                      {[...Array(21).keys()].slice(1).map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Require Uppercase</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Require Lowercase</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Require SpecialChar</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Require Number</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expire (in Days)</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Password Expiration Warning (in Days)</label>
                  <input type="number" className="form-control" />
                </div>

                <h6><strong>History Requirement</strong></h6>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Maximum Invalid Login Attempt</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Lockout Duration (in Minutes)</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Password in History</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save Policy</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default PasswordPolicy;
