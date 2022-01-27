import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const useScrollTrigger= ({name})=> {
    useEffect(()=>{
        if(process.browser){
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    },[])

    const setAnimation =() =>{
        gsap.fromTo(
            `#${name}`,{
                autoAlpha:0,
                backgroundColor:"white",
                color:'gray'
            },
            {
                autoAlpha:1,
                backgroundColor:"orange",
                color:"white",
                scrollTrigger: {
                    trigger: `#${name}`,
                    start:'top 80%',
                    end:'top 10%',
                    scrub:true
                }
            }
        )
        gsap.from(
            `#${name}`,{
                backgroundColor:"orange",
                color:"white",
                scrollTrigger: {
                    trigger: `#${name}`,
                    start:'bottom 60%',
                    end:'bottom 30%',
                    scrub:true
                }
            }
        )
    }
}