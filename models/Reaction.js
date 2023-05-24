const { ObjectId } = require('bson');
const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    { 
        reactionId:{
            type: ObjectId,
            required: true,
        },
        reactionBody:{
            type: String,
            required: true,
            maxLength: 280,
        },
       
        username:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: function(timeStamp) {
                return new Date(timeStamp)
            }
        },
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


module.exports = reactionSchema;