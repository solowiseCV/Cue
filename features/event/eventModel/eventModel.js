import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"please fill event name fielld"],
    trim: true,
    trim : true,
  },
  location: {
    type: String,
    required: [true, "please the event location is required"],
    trim: true,
  },
  date: {
    type: Date,
    required: [true,"The event date is required"],
  },
  time: {
    type: String,
    required: [true,"The time is required"],
  },
  description: {
    type: String,
    required: [true,"Please the descrition is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
