const themeBtn1 = document.querySelector('#themeBtn1')
const themeBtn2 = document.querySelector('#themeBtn2')
const icon1 = document.querySelector('#themeBtn1 span')
const icon2 = document.querySelector('#themeBtn2 span')


themeBtn1.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        icon1.innerHTML='dark_mode'
    }else{
        icon1.innerHTML='light_mode'
    }
})
themeBtn2.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        icon2.innerHTML='dark_mode'
    }else{
        icon2.innerHTML='light_mode'
    }
})

const tl = gsap.timeline({ defaults: { ease: 'back' } })

tl.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#y-1', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: .8
}, '-=5').to('#y-2', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#y-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5').to('#r-1', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5')


const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })

tl2.from('.hero img', {
    opacity: 0,
    y: '-20%',
    duration: 2,
    dealy: 1
}).from('.blue', {
    opacity: 0,
    duration: 0.5,
    // delay:1
}, '-=1').from('.hero .heroTitle', {
    opacity: 0,
    y: '100%',
    duration: 1
}, '-=2').from('.navbar', {
    opacity: 0,
    duration: 2,
    delay: 1
}, '-=2').from('.hero .heroBtns #btn', {
    opacity: 0,
    y: '100%',
    duration: 0.2,
    stagger: .3
}, '-=2')


const scrollAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        scrub: true,
    }
})

scrollAbout.from('.about .title', {
    x: '-100%',
    opacity: 0,
    duration: 1
}).from('.about .aboutContent span', {
    y: '50%',
    opacity: 0,
    duration: 1,
    stagger: 0.2
}).from('.about .abtBtn', {
    y: '100%',
    opacity: 0,
    duration: 0.2,
})

const scrollSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        scrub: true,
    }
})

scrollSkills.from('.skills .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.skills .cardRow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')

const scrollProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        scrub: true,
    }
})

scrollProjects.from('.projects .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.projects .cardRow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')


const scrollContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        // markers: true,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
    }
})

scrollContact.from('.contact .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.contact .iconRow .icon', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')
