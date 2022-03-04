import Joi from "joi";
import { toast } from "react-toastify";
import usersService from "../services/userService";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import withRouter from "./common/withRouter";
import { Navigate } from "react-router-dom";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: ""
    }
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6)
  };

  async doSubmit() {
    const { email, password } = this.state.form;

    try {
      await usersService.login(email, password);

      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
        toast.error(response.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <PageHeader title="Sign In with Real App" />
        <div className="row">
          <div className="col-12">
            <p>Log in to your account!!!</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          {this.renderInput({
            name: "email",
            label: "Email",
            type: "email",
            required: true
          })}
          {this.renderInput({
            name: "password",
            label: "Password",
            type: "password",
            required: true
          })}

          <div className="my-2">{this.renderButton("Sign In")}</div>
        </form>
      </>
    );
  }
}

export default withRouter(SignIn);
