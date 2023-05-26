const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    { 
        thoughtText:{
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: function(timeStamp) {
                return new Date(timeStamp)
            }
        },
        username:{
            type: String,
            required: true,
        },

        reactions:[
            reactionSchema
        ]
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: true,
      }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

  // Initialize our Thought model
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;