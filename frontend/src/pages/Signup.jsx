import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-split">
      {/* LEFT BRAND */}
      <motion.div
        className="signup-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Aari Works</h1>
        <p>
          Handcrafted elegance inspired by tradition.
          <br /> Join our journey of timeless embroidery.
        </p>
      </motion.div>

      {/* RIGHT FORM */}
      <motion.div
        className="signup-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Create Account</h2>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button>Create Account</button>
        </form>

        <p className="switch-auth">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
