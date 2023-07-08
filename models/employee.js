import {Schema, model, models} from 'mongoose';

const EmployeeSchema = new Schema({
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

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;