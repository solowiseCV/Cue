import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
        trim: true,
    },
    flightNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    departure: {
        type: String,
        required: true,
        trim: true,
    },
    destination: {
        type: String,
        required: true,
        trim: true,
    },
    departureTime: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > Date.now();
            },
            message: 'Departure time must be in the future',
        },
    },
    arrivalTime: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > this.departureTime;
            },
            message: 'Arrival time must be after departure time',
        },
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number'],
    },
    status: {
        type: String,
        required: true,
        enum: ['scheduled', 'delayed', 'cancelled'],
        default: 'scheduled',
    },
    seatsAvailable: {
        type: Number,
        required: true,
        min: [0, 'Seats available cannot be less than 0'],
    },
    aircraftType: {
        type: String,
        required: true,
        trim: true,
    },
    gate: {
        type: String,
        required: true,
        trim: true,
    },
    terminal: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Flight', FlightSchema);
