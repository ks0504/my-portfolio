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
                backgroundColor:"#f6ad55",
                color:"white",
                scrollTrigger: {
                    trigger: `#${name}`,
                    start:'top 80%',
                    end:'top 10%',
                    scrub:true
                }
            }
        )
        gsap.fromTo(
                `#${name} h1`,{
                autoAlpha:0,
                color:'gray'
            },
            {
                autoAlpha:1,
                color:"white",
                scrollTrigger: {
                    trigger: `#${name}`,
                    start:'top 85%',
                    end:'top 15%',
                    scrub:true
                }
            }
        )
        gsap.fromTo(
            `#${name} p`,{
            autoAlpha:0,
            color:'gray'
        },
        {
            autoAlpha:1,
            color:"white",
            scrollTrigger: {
                trigger: `#${name}`,
                start:'top 85%',
                end:'top 15%',
                scrub:true
            }
        }
        )
        gsap.fromTo(
            `#${name} h2`,{
            autoAlpha:0,
            color:'gray'
        },
        {
            autoAlpha:1,
            color:"white",
            scrollTrigger: {
                trigger: `#${name}`,
                start:'top 85%',
                end:'top 15%',
                scrub:true
            }
        }
        )

        gsap.from(
            `#${name}`,{
                backgroundColor:"#f6ad55",
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