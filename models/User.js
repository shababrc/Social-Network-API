const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    //using regex to match if the email is an email address valid
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'email does not match']
    },

    //defining the thoughts model referencing the thought model
    thoughts:[
     
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            }
        ],
    
    //defining the friends model 
    friends:[
        {type: Schema.Types.ObjectId,
            ref: 'User',
        }
    
    ],
    
},
{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });

  // Initialize our User model
const User = model('User', userSchema);

module.exports = User;