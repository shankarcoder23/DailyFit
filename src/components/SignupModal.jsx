import { useState, useEffect } from "react";
import "../assets/css/signup.css";

const SignupModal = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timer, setTimer] = useState(0);

  // OTP countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Send OTP
  const sendOtp = () => {
    if (!name || mobile.length !== 10) {
      alert("Enter valid name & 10 digit mobile number");
      return;
    }

    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    setOtp(["", "", "", ""]);
    setTimer(30);
    setStep(2);

    console.log("OTP (demo):", otpCode); // remove in production
  };

  // OTP input logic
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp.join("") === generatedOtp) {
      alert("Signup Successful");
      setStep(1);
      setName("");
      setMobile("");
      setOtp(["", "", "", ""]);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="modal fade" id="signupModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content signup-modal">

          {/* Header */}
          <div className="modal-header border-0">
            <h5 className="fw-bold mb-0">
              {step === 1 ? "Create Account" : "Verify OTP"}
            </h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          {/* Body */}
          <div className="modal-body pt-0">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Mobile Number</label>
                  <input
                    className="form-control"
                    placeholder="10 digit mobile number"
                    maxLength="10"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>

                <button className="btn btn-dark w-100 py-2" onClick={sendOtp}>
                  Send OTP
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <p className="text-muted small text-center mb-3">
                  OTP sent to <strong>+91 {mobile}</strong>
                </p>

                {/* OTP GRID */}
                <div className="otp-box-container mb-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      className="otp-box"
                      maxLength="1"
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(e.target.value, index)
                      }
                      onKeyDown={(e) =>
                        handleOtpKeyDown(e, index)
                      }
                    />
                  ))}
                </div>

                <button
                  className="btn btn-success w-100 py-2 mb-2"
                  onClick={verifyOtp}
                >
                  Verify OTP
                </button>

                <div className="text-center">
                  {timer > 0 ? (
                    <small className="text-muted">
                      Resend OTP in {timer}s
                    </small>
                  ) : (
                    <button
                      className="btn btn-link p-0"
                      onClick={sendOtp}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignupModal;
