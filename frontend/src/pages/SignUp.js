import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Lottie from 'lottie-react'
import registerLottie from '../assest/lottie/register.json' 
import loginIcons from '../assest/signin.gif'
import imageTobase64 from '../helpers/imageTobase64'
import SummaryApi from '../common'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    profilePic: '',
  })

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]
    const imagePic = await imageTobase64(file)
    setData((prev) => ({
      ...prev,
      profilePic: imagePic,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const dataApi = await dataResponse.json()

      if (dataApi.success) {
        toast.success(dataApi.message)
        navigate('/login')
      }

      if (dataApi.error) {
        toast.error(dataApi.message)
      }
    } else {
      toast.error('Please check password and confirm password')
    }
  }

  return (
    <section id='signup'>
      <div className='mx-auto container py-6 flex flex-col md:flex-row items-center justify-center md:gap-6'>
        {/* -------- Left Side: Lottie -------- */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <Lottie animationData={registerLottie} loop={true} className='w-80 h-80 md:w-[400px]' />
        </div>

        {/* -------- Right Side: Form -------- */}
        <div className='bg-white p-6 w-full max-w-sm rounded-lg shadow-md pb-0'>
          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
              <img src={data.profilePic || loginIcons} alt='login icons' />
            </div>
            <form>
              <label>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Upload Photo
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic} />
              </label>
            </form>
          </div>

          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Name :</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='text'
                  placeholder='enter your name'
                  name='name'
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='grid'>
              <label>Email :</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='enter email'
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'
                />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='enter password'
                  value={data.password}
                  name='password'
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'
                />
                <div
                  className='cursor-pointer text-xl'
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='enter confirm password'
                  value={data.confirmPassword}
                  name='confirmPassword'
                  onChange={handleOnChange}
                  required
                  className='w-full h-full outline-none bg-transparent'
                />
                <div
                  className='cursor-pointer text-xl'
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>
              Sign Up
            </button>
          </form>

          <p className='my-4 text-center'>
            Already have account?{' '}
            <Link to={'/login'} className='text-green-600 hover:text-green-700 hover:underline'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp
