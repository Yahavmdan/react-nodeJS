import Joi from "joi";
import { toast } from "react-toastify";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import withRouter from "./common/withRouter";
import cardsService from "../services/cardsService";

class CreateCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: ""
    }
  };

  schema = {
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).allow("")
  };

  async doSubmit() {
    const {
      form: { bizImage, ...body }
    } = this.state;

    if (bizImage) {
      body.bizImage = bizImage;
    }

    try {
      await cardsService.createCard(body);
      toast.success("Card Created!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      this.props.navigate("/my-cards");
    } catch ({ response }) {
      if (response && response === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <>
        <PageHeader title="Create a new card" />
        <div className="row">
          <div className="col-12">
            <p>Create a new business Card</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          {this.renderInput({ name: "bizName", label: "Business Name:" })}
          {this.renderInput({
            name: "bizDescription",
            label: "Business Description:"
          })}
          {this.renderInput({ name: "bizAddress", label: "Business Address:" })}
          {this.renderInput({ name: "bizPhone", label: "Business Phone:" })}
          {this.renderInput({
            name: "bizImage",
            label: "Business Image(URL):"
          })}

          <div className="my-2">{this.renderButton("Create Card")}</div>
        </form>
      </>
    );
  }
}

export default withRouter(CreateCard);
