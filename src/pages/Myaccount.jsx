import "../assets/css/myaccount.css";

const MyAccount = () => {
  return (
    <div className="container my-5">

      <h4 className="mb-4">My Account</h4>

      {/* PROFILE CARD */}
      <div className="account-card mb-4">
        <h6 className="section-title">Personal Information</h6>
        <p><strong>Name:</strong> Shankar Das</p>
        <p><strong>Email:</strong> shankar@email.com</p>
        <p><strong>Mobile:</strong> 9876543210</p>
      </div>

      {/* ADDRESS CARD */}
      <div className="account-card mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="section-title">Saved Address</h6>
          <button className="btn btn-sm btn-outline-primary">
            Edit
          </button>
        </div>

        <div className="address-box mt-3">
          <p className="fw-bold mb-1">Home</p>
          <p className="mb-1">
            MG Road, Near Metro Station<br />
            Bangalore, Karnataka - 560001
          </p>
          <p className="text-muted mb-0">Mobile: 9876543210</p>
        </div>
      </div>

      {/* ACCOUNT ACTIONS */}
      <div className="account-card">
        <h6 className="section-title">Account Settings</h6>
        <ul className="account-links">
          <li>Change Password</li>
          <li>Manage Addresses</li>
          <li>Logout</li>
        </ul>
      </div>

    </div>
  );
};

export default MyAccount;
