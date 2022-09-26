// import React, { useEffect, useRef, useState } from "react"
// import { useSelector } from "react-redux"


// //material ui 
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import "../style/vediocall.css"



// import Peer from "simple-peer"

// import io from "socket.io-client"
// const socket = io.connect(process.env.REACT_APP_API)


// let mydata
// if(window.localStorage.mydata){
//     mydata=JSON.parse(window.localStorage.mydata)
// }



// const Vedio_Caall_Page=()=>{
// 	const [ me, setMe ] = useState("")
// 	const [ stream, setStream ] = useState()
// 	const [ receivingCall, setReceivingCall ] = useState(false)
// 	const [ caller, setCaller ] = useState("")
// 	const [ callerSignal, setCallerSignal ] = useState()
// 	const [ callAccepted, setCallAccepted ] = useState(false)
// 	const [ callEnded, setCallEnded] = useState(false)
// 	const [ name, setName ] = useState("")
// 	const myVideo = useRef()
// 	const userVideo = useRef()
// 	const connectionRef= useRef()

// 	const select =useSelector((state)=>(state))
// 	console.log(select)


// 	useEffect(() => {
// 		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
// 			setStream(stream)
// 				myVideo.current.srcObject = stream
// 		})

// 	socket.on("soketio-id", (id) => {
// 			setMe(id)
// 		})

// 		socket.on("callUser", (data) => {
// 			setReceivingCall(true)
// 			setCaller(data.from)
// 			setName(data.name)
// 			setCallerSignal(data.signal)
// 		})
// 	}, [])


// 	const callUser = (id) => {
// 		const peer = new Peer({
// 			initiator: true,
// 			trickle: false,
// 			stream: stream
// 		})
// 		peer.on("signal", (data) => {
// 			socket.emit("callUser", {
// 				userToCall: id,
// 				signalData: data,
// 				from: me,
// 				name: mydata.fullName
// 			})
// 		})
// 		peer.on("stream", (stream) => {
// 				userVideo.current.srcObject = stream
// 		})
// 		socket.on("callAccepted", (signal) => {
// 			setCallAccepted(true)
// 			peer.signal(signal)
// 		})

// 		connectionRef.current = peer
// 	}



// 	const answerCall =() =>  {
// 		setCallAccepted(true)
// 		const peer = new Peer({
// 			initiator: false,
// 			trickle: false,
// 			stream: stream
// 		})
// 		peer.on("signal", (data) => {
// 			socket.emit("answerCall", { signal: data, to: caller })
// 		})
// 		peer.on("stream", (stream) => {
// 			userVideo.current.srcObject = stream
// 		})

// 		peer.signal(callerSignal)
// 		connectionRef.current = peer
// 	}



// 	const leaveCall = () => {
// 		setCallEnded(true)
// 		connectionRef.current.destroy()
// 	}

// 	return (
// 		<>
// 		<div className="container">


// 			<div className="video-container">
// 				<div  >
// 					 <video playsInline muted ref={myVideo} autoPlay  className="video-plear-section" />
// 				</div>
// 				<div  >
// 					{callAccepted && !callEnded ?
// 					<video playsInline ref={userVideo} autoPlay className="video-plear-section"  />:
// 					null}
// 				</div>
// 			</div>



// 			<div className="call-endcall-button">
// 				<div className="call-button">
// 					{callAccepted && !callEnded ? (
// 						<Button variant="contained" color="secondary" onClick={leaveCall}>
// 							End Call 
// 						</Button>
// 					) : (
// 						<IconButton color="primary" aria-label="call" onClick={() => callUser()}>
// 							<p className="endcall">call Frend</p>
// 							<PhoneEnabledIcon fontSize="large" style={{color:'blue'}} />
// 						</IconButton>
// 					)}
// 				</div>
// 			</div>



// 			<div>
// 				{receivingCall && !callAccepted ? (
// 					<div className="have-call-section">
// 						<h1 >{name} is calling...</h1>
// 						<Button variant="contained" color="primary" onClick={answerCall}>
// 							Answer
// 						</Button>
// 					</div>
// 				) : null}
// 			</div>



// 		</div>
// 		</>
// 	)

// }



// export default Vedio_Caall_Page