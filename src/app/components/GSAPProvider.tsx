'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({
    ease: 'power3.inOut'
})

export default function GSAPProvider(){
    return null
}
