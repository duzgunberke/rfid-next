import {Schema, model, models} from 'mongoose';

const CompanySchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    password:{
        type: String,
        required: true
    }
  },
);

const Company = models.Company || model("Company", CompanySchema);

export default Company;