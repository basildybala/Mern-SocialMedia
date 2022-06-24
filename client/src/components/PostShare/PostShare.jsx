import {useState,useRef } from 'react'
import './PostShare.css'
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


export const PostShare = () => {
    const [image,setImage] =useState(null)
    const imageRef=useRef()
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage({
            image: URL.createObjectURL(img),
          });
          
        }
      };
      console.log(image);
  return (
    <div className='PostShare'>
        <img src={ProfileImage} alt="" />
        <div>
            <input type="text" placeholder="Whats Happening" />
            <div className="PostOptions">
                    <div className="Option" style={{ color: "var(--photo)"}} onClick={()=>imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="Option" style={{ color: "var(--video)"}}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="Option" style={{ color: "var(--location)"}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="Option" style={{ color: "var(--shedule)"}}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className='button ps-button'>
                        Share 
                    </button>
                    <div style={{display:"none"}}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
            </div>
            {image && (
                <div className="previewImage">
                    <UilTimes onClick={()=>setImage(null)} />
                    <img src={image.image} alt="" />
                </div>
            )}
        </div>
    </div>
  )
}
