const ContactUs = ()=>{
    return(
        <div>
            <h1 className="font-bold  text-4xl text-center p-8">Contact us</h1>

            <p className="text-bold text-center  mb-11 text-5xl">SEND US A MESSAGE</p>
            <div className="form text-center flex justify-center ">
                <form className="w-6/12">
                    <label  >
                        <input className=" border-solid border-black  border-2 rounded-lg p-2 my-6 mx-6 text-2xl" type="text" placeholder="First Name*"></input>
                    </label>
                    <label >
                        <input className=" border-solid border-black  border-2 rounded-lg p-2 my-6 mx-6 text-2xl" type="email" placeholder="Email Address*"></input>
                    </label>
                    <label  >
                        <input className=" border-solid border-black  border-2 rounded-lg p-2 my-6 mx-6 text-2xl" type="text" placeholder="Phone No.*"></input>
                    </label>
                    <label  >
                        <textarea className=" border-solid border-black  border-2 rounded-lg p-2 my-6 mx-8 text-2xl w-auto " type="message" placeholder="Message"/>
                    </label>
                    <button className="p-3 m-2 text-xl  bg-teal-500 text-white"> Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactUs;