const SignupModal = () => {
  return (
    <div className="modal fade" id="signupModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Account</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <input className="form-control mb-2" placeholder="Full Name" />
            <input className="form-control mb-2" placeholder="Email" />
            <input className="form-control mb-2" type="password" placeholder="Password" />
          </div>

          <div className="modal-footer">
            <button className="btn btn-dark w-100">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
