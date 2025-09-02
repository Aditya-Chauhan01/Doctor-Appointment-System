import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'
import userModel from '../models/userModel.js'

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file      //req.file : It’s added by Multer middleware when you upload a file with the field name "image"

        // checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success:false, message:"Missing Details"})
        } 

        // validating email format
        if(!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // validating strong password
        if(password.length < 8){
            return res.json({success:false, message:"Please enter a strong password"})
        }

        //hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})    // it returns a link
        const imageUrl = imageUpload.secure_url     //We store the Cloudinary secure_url in DB, not the file itself.

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address), // as a object
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        /*when we wrape the plain obj with model then It follows the schema you defined (doctorSchema). It automatically gets an _id. It has methods like .save(), .validate(), .remove(), etc. */

        res.json({success: true, message:"Doctor Addedd"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API for admin Login
const loginAdmin = async (req, res) => {
    try {
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})

        } else {
            res.json({success:false, message:"invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API for all Doctor list
const allDoctor = async (req, res) => {
    try {
        
        const doctors = await doctorModel.find({}).select('-password')  // exclude the password field
        res.json({success:true, doctors})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get all appointment list
const appointmentsAdmin = async (req, res) => {
    try {
        
        const appointments = await appointmentModel.find({})
        res.json({success: true, appointments})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to cancel the appointment for admin

const appointmentCancel = async (req, res) => {
    try {
        
        const {appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        // releasing doctor slot
        const {docId, slotDate, slotTime} = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked      // it is object and inside it sloteDate is an array
        // console.log({slots_booked});
        // console.log(typeof(slots_booked));
        

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)     // when we try to access the key(array) in object by this way then key automatically converted into string then it is valid 

        await doctorModel.findByIdAndUpdate(docId, {slots_booked})
        res.json({success:true, message: 'Appointment Cancelled'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {
        
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success: true, dashData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addDoctor, loginAdmin, allDoctor, appointmentsAdmin, appointmentCancel, adminDashboard}