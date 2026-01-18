const Contact = () => {
  return (
    <div className="container my-5">
      <h2>Contact Us</h2>

      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>

        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
