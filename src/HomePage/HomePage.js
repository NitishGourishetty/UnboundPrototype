import React from "react";

import './HomePage.css'
import {Fade, Roll, Flip, Hinge, Slide} from "react-awesome-reveal"
import {GiHeartBeats} from "react-icons/all";



const HomePage = () => {
    return (
        <div>
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id="headingGroup" className="text-white text-center d-none d-lg-block mt-5">
                            <Flip>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                                <h1 className="">MENTAL<span>/</span><span>/</span>HEALTH</h1>
                            </Flip>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wrapper" src="data:image/jpeg;base64,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" alt=''/>
                    </div>
                </div>
            </section>


            <section className="container-fluid px-0">
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <Fade>
                            <img src="https://npr.brightspotcdn.com/dims4/default/faf66be/2147483647/strip/true/crop/1024x719+0+0/resize/880x618!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkstx%2Ffiles%2F201808%2FMentalHealth_Flickr.jpg" alt="" className="img-fluid wrapper"/>
                        </Fade>
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>Awareness</h2>
                                <img src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/data-import/07c56abb/MHIllustration1.png" alt="" className="d-none d-lg-inline wrapper"/>
                                    <Slide>
                                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                        iste molestiae
                                        beatae, maiores deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic
                                        consequatur
                                        repellat eveniet quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum
                                        magnam
                                        autem nam ex deserunt debitis
                                        eaque ratione! Nobis, quidem assumenda.</p>
                                    </Slide>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center content">
                    <div className="col-md-6 text-center">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>Mental Health</h2>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIWFhUWFxkXGBYYFRcXFhsYGBcYFxgXFxkYHighGholHRgVIT4hJSkrLi4vGB80OTQsOCgvLisBCgoKDg0OGxAQGy0mHyYrKy8tLy0tLS0vLS8vLy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIALABHgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABLEAABAwIDBAYECgYIBgMAAAABAAIDBBESITEFBhNBIlFhcYGRBzKhsRQjNDVCcoKywdEzUmJzkqIkQ1N0s8LS8FSDlMPh8RUWJf/EABsBAQACAwEBAAAAAAAAAAAAAAADBQIEBgEH/8QAOREAAQMCAwUGBAQFBQAAAAAAAQACEQMhBBIxBUFRYYEiMnGRscEToeHwFDNC0QYVI2JyUpKy0vH/2gAMAwEAAhEDEQA/AO4oiIiIiIiIiIiIiIiIiIiIiIiItarqmRjE9waO3n3Dmq/W718omfaP+kfmpKdJ7+6FqYnHUMN+a6Dw1PkPeArSvD3gakDvNlznaG8UmXEnw4tBcNPk3OygKjbmYswuubZuBJztlhv71ts2e86n7+SrDtsv/JpE8yQPLWV2H4Uz9dv8Q/NemytOjge4grg20dvEAOEwvh9SK5GZ/rCb4T4qvbS23Uue6ziwZEWJvkxoOeWpIOnIqUbN/u+X1WxQx2Iq602gf5H/AKr9PXWF1UwavaO9wX5mh21WNOVTMRYnpSOfbouOj8gDlyCndk75Pa4NnaSy7em0YjYCzyW5nUjTqy5rB2znjfKuKD6FSz35T4SPOfUBd6FXHykZ/EPzWZjwdDdcrO043txx9Nn63LWwtr7baLLGQc23ab2t6rsrHTxC1/w3P5K0/lgLQQ/5fsV1JFzSLa9TF6szrdTumP5r+xStDvwRlPFl+sz/AEn81icO8aXUb9l1hdkO8Nfn7SVdkWjs7aUU7cUTw4c7ajscDmPFbyg0VcQWmCIKIiIvERERERERERERERERERERERERERERERERERERF8UDtnb4iuyOzn8zyb39Z7Fj3i21w7xRnpfScPog8h2+5U6WQNBc42A1JW7h8Nm7TtOHFc9tTa5pu+Dh+9vPDkOfp46Z6iodI7E9xces/h1BV7a+8UcUgixBrmlmO7XkAajMNIFwR5rBUbbeTkMA5Z52GuV87LQqpGNn2njIAMAHSOvxRsO03IVuynGv3cD3VNSwZDi6uCbTY3JzNbcwf9SSV4gLI5ntc4jiggvkxRvhEYdcMP8AWAu17VDV20gzocbFijYQ4GW4bc2J6OTi2179ul0bUSRS0pY9rH//AB8YvILixkdlqM7W8l4ZSSyVJax0Zc6mGJzrkEF1nEW53UxaArTDhje06NDv4OP9pjjYmdFqOIZ67mOJwS/TcCATc3DDl359a9/BmsYzE9mGThFjmlzgRGYsdgIybjCRmfBSUey5YqtsMLo+I2hzdI0kH4w3sAcje3WvFI0f/nmJwjJZP0pbOaCHOxXtbIm9u8L3w+7E+ymbiGvGYG3tlc4fpJHcEd6RK06yljDS5kl2vDgwFpx4REWF5AjuOkCOq3Je66FoDHgxuEjDYXLi4YZBkGRXaRcdIWyJBBU/WwkzRujqYjVtgde7f6PJFidlfMNOvO+XJadKWziB8BipqkMfhjwWp3MDnB1j9G5DjzOfivN3397lCzEktDjMAGTe3eIns6HL3gDpo2AtDZk0kUkckb2O4l8LM8MmHjZPsy2ICQZ2Gd1cNiVMcpHClGI3YR0h8YA1os7DhJIa7nyCq9ORM6jLWNjznZhjHxZc1ou5vYVj2TWmCGkcw5mpa1zRr6z+XWOioa9HMJGv/v7K/wBmbVdhCG1e4TBFjlvUE7xbL2tJueCvcVWAJMTg4MNnHpXab20w3Iv1L3UwKL2hGWxTStBLJZZGEjQWcyVh8sQ8VMVZcHWD4wABkXdLQGx9qrgYuu5c0CC3fPyj3J6Qoxk0kLw+Jxa4aEe49Y7Cuh7pb0Nqhw32bMBmOTgPpM/EclRKiO4vlmORuPA81Fue6N4ewlrgcQcNQQsn0hVHPcvK+Ep4xkOs4aH2PEemq7uih92tsNqoGyCwd6r2/qvGo7jkR2EKYVWQQYK5F7HU3FjhBGqIiLxYIiIiIiIiIiIiIiIiIiIiIiIiIiIiIo3bW0ODGXD1j6o/HuGqklRt6arHNg5MFh45n22HgpqFP4j4Om9V21MWcNhy5veNh4n9hKiHvvck9pJ8ySoTaO0JA8tYWFnQF7YzdxditY8rDlzW1tqoDWFt7Fw82BzRIAesgkeKrdFTF9gHNaQxxuI7A2thtpYC0h0HZ1q9Y0RJXJ4PDtINSppzk85+XNenzl0ZxC7w1paAwjMukD2mwzIAafFYqiIPc58lM1z883U3E9V/DBxWzOEZDnYEkBeQ3D0TbEbi2EC92MGWWuLEdO+/rD3JfUlo9R1y0kWFi4nK5uS3PM5nPNS6K2DINt/0sI3W4cY1hau8UDnvc+UNs0SNYZBHkNYgbt0z6/JbdBTP4eKnaMXqNkY1htHwScN7Wylwm34LSmjEtbSRPAcwx4y36BOF/LmPiwpDbOyvgdPVuifaOXCBG1tgy7w11jfmHEaBejc3efLWFG4tinRkZjEWOXvlvHqZsdNTKRVT5JXObgM+AsvGYnERiUHDoXW9YXzsLHCSvFVs9r7xsijLmXwx4adwZeK4AGovNYO5a6LW2tQRwRbPmiaGyF8IL2ixdiaHHERrofMrBTTmHaMk30PhXAf3SuNj3BzAvQJEtWGVrml9OAA1xFt7SBFjbUEXsTC3HUrS1oeynMTHkMNoeHdzw4tvy6JdcA3OAFZI6AzRNBbHI2MxDC1tO/AwsgMvDwDI3M2X7I1Vfl+b2/38/wCAVZaiiZTbSpuA0MbK3C9rcmnM3y/hP2UNvn8lnWGpBEg1IgW7AB1mQTy362hYqZ5AaX8BvCyje0RWjcWjHGLaHok5f2nZdeIaSN8uNroWyWc4utDe9nXILeyxv3r1uls+KaKqErA8CpkIB5HABdYN06GI0M8xYOIBOA/nbgjL2leGBPRY1HsptqRq0htmiO0CRqdOI+WquW7FOH07mulhMbH8QizSx1znnpe4IvfLJKm8rTIwBzha+E9EWxAi4P6oj58z4U/dd+ezoHepPLIHjkQJCLHzPmrrtKmbBWSNiaGMfTuJa3Jt7O5fZ9pVdiGZKh6n29QvomxKpdh8rnS5peNALMOW/MjXwhRQxCzhbDoc7tGeY1tfT2+OOsZfMLQpyWQSNJ6MjcTe9snDcO/o38FJhvxTPqj7oXjTBXSubkd1hSXo82pwaoRk9Cbo9gf9A+OY8QutL8/yuLHtc02IcHA9RBuD5ruuzaoSxRyDSRjX/wAQBstXGs7QeN/sqLbtAB7Kw/UIPiPp6LbREWkqBERERERERERERERERERERERERERERfFzWskxPe7rJPncrpDtD3LmLVvYEd4+C5n+I3GKbf8AI/8AEe5VS2xXsEzmzGFpB5y4Tgv0SQHg+pY2/NZaKMTtD4w04XjpRyAgkAk/T6+H4E6myqu/MZdXlo1cIwPEAKa9GNQbTRHIh7ZLdpGB3uarwsinmHJYVaBp4FtdhvDTF4gwOKVeGJwZK+JhyNnygG2gJGLTK2XUs8MXEDnxSMe1oN38UENcL2v0tMFj159RKrG98hmrJyNIxbuEdmn+YnzU/uF8jqu9/wDgNXrmwwO8Pms8Qx1LCtr2zHLIi3a6rBVVjOJTVMc1OJYhZ0bpA1pFiSGkZZXcPFfaSKKcVJmqacS1RAY1kmININ2AnnnhGXV2qv7qbJZV1Bje5zQGOfdtr3aWC2YOXSKudNuHDG9jxNMSxzXAHh2u0gi/Q0yRxay038OvqmKNDCvNL4jg4C0NGk5gJ073ATz4xlUJC6lp6uamibTljnHi3keGABuVsrge0nsUnFsR0ra03jLKj4yFwdcXu57HG2meH2qs+kIf00/UZ+Ksvo82hxKZ0RPSjJH2HdIe3GPBePBFMPH3v9VFiKdSlg2Ylh1DZAFhJDpF574EzPBQVLs4y0jYI5oHytqDUECa44YiwXvbrIUlRbQbLVsqaqqpGiJtmMilvnc5m/efIKG9HTb1Ug64JR5vjC3d5d0IqandKySVzmlos7BbpEDkB1rJ4aHlhOvLjqpazKYxTsPUeQXaENk/1LO5AabvBSO69bBTsqBJUQXkle9tpQciABftWzu7Qui2dM1zoziZM8ODrx2MQF8XVkVWt0N2Y6uN73ySNLXYRgwaWBzxAq0bzgUuzjEHF2ICFpNrnFcu0/ZDlhUAzZQbkiVrYxjDWNCm8l7ntzSLCAQI8xI36qK2XE0sohFUQGognxBvEuHYpC61x9j2rpEuy55JpaidrGOMRjY1rsVrg5n2+fZnwyGJ0Bpqj9Z4e3vjkA94X6Tq5Q9uJujm3HcRcLR2gMrgeM+t12myS+i1+U5g5xuRcEklwG4CRzOt7rmktC2WnjjZIwysc82D79FxJOf8KyztexrW4QbMaDmNQACovdX9P9l3uVhrSotCu1qyypkJnU+ZPBV2sC656P5S6ghvyDh4B7reyy5LWrrW4MBZQQg6uBd4OcSPZZYYv8seK0NuR+FbxzD0d9FZERFWLlERERERERERERERERERERERERERERF8K51t0NinkaXAZgC5A9YA2CvldUtiY57tGjzPL2rle3py+VjnPsXPzGedy3Sw5aLfwDSXE7lz+3XMeKdL9Uk9IPqY8lz/AHv+cWd8HvatzY7hTbVnYcmu4vdZx4w8gCFp73fOLe+H3tWf0jRmOpjkabY4iL9rS5rv5XAK9Fw1vFv1WLWirTo0D+uiR17JHoo3Z0JkgrqhwzIAv2ySiR3ub5qe3C+R1Xe//AasFFSYNjyu5yu4ngHsjH3L+K2NwvkdV3v/AMBqVTLHeI9lHjqgfh60aCqG/wC0NHsqjsN9Q2Y/Br8TCb2DScNxf1stcKt+xZNpmePj8ThYxju1gFu3K6rG6deyCoL5HYW4CL2JzL2HkOwroFNvdSus3i5kgDoP1OXUlcukgNnop9rOq/Fc1lAOBHeyknzHDcqlvt84M/5PvC26I/A9qPj0jmLgOq0jsUdu53RWpvr84s/5XvUt6SaI4YqhuTmO4ZI1tcvafAg/xICCGtO8R7qIOa6nh6DtKlMt69ktPQ6cyoX0bfLHfuH/AH4lcN//AJFJ3s++FT/Rt8rd+4f9+NXDf75E/vZ98LGr+eOigx19rMPOmov0X/oZv3g+41anpOrM4YQdAZSO+7G+562/Rh+hl/eD7jVW95JDVbQexp/rBC3qGE4b918RXrR/XJO5S0KYdtao92jZPyA+vRTO8Gz8NLRNtnG6IO+20F/8wXTN267i0cZ5tBjP2cx/KWrluyNzZi9zzI1wia95DS7PC3QdHXP2K27kVlhNETyDh913+VaGMgiAZi/mu12BhmnZjy1+b+pMwRrrrzJUPusfj/su9yn61yrGxKpscuJ5sLEXsTr3KTqdrRHR3sd+Si/VK6+vTca0gbv3WhVydNdo3QrmTUkJZboMbG5vU5jQCPce4hcRq39JTu4+8RpJhiJ4T7MeOrqcO0e6/YvMRRL2W1C19p4E4nD9jvNuBx4j9ua7cixxSBwBBuCLgjQg6ELIqlcSiIiIiIiIiIiIiIiIiIiIiIiIiIo3btWYoXPbqLWPeQFk1pcQAo6tVtJhqO0AJPRV3enaPEfw2nosOfadD5aearNbMGAElgzt0wT5WWytLbLLwu7LHyKu6VMMAaFwFSu7E4jPU3nyG4dPrvUHU7Kp6idkr5AXkssGYhm21rX8FqbW2hT1lUKSWOS7JXMDw9oF9OrTILZ2VGDLHysQfWbe4zIsG9/tVfpvng/3h/vK3GC5voLK3o0yXulzpZTcW3iItaI6qZ2vtOCIjZzo5Cy0UeIPAyJbbl1qf2XsOKnjfFHjwvve7rnMYMjbqVG3p+c2fWg97V0wKOp2WtjfcrTxzfhUKIYTD25nXJk2vfeua7wbOoqaXgmOdzi0ODhK0DpEgZYexblJu3TtcCeIHNP6w1B7lo+kL5az91H996s28EfDkDx6r/vjXzFj5qUk5W3MkKxdWqijRh7sz2kntG5EexKh966ilbUNkmjle8sa67JGtHRdYCxHYrMaiKtoy9zSY3Rklt+kCy5Iv1gt1XOt7ZsUsf1AP5nKS3V2gY2VFO45tDyPIsdbsyafFYub2ARqEr4KcJSe0nM2N5sJ3DdFtFK7kNpXPllgZKx0cdjxHtcCH3OWEfsLV2pvnT1ERikhlwusTZ7AciCM7di0dw6nAKjtY3/uKP3Rq4o5HmUtALCBjAIviGl/FSFozOJvEb1O/Bs/EVqjg5xZly9ozpxmdeKse6O3IGP4MMUo4hLiZHsdm1v7I7FE1tVS0094WyyStJuS8YMZuDoLk5nxU0zakDnWj4eL9hovbnyVR2I61WBJfNxa51rltz0nW7r+axtJNws8JhjVrPLWuBIAylxl5uLnUjculbi7wRlpbLGWPmuAb3ba9mtOQIuSfMLPXQ01E4ObjLyCA27Tcc75ZBZ63Z1PUObJG+wa1rQGWt0dL8wbWHgq/ve4mYOOhYLeBNx7faqpzs7i5fSdnYOjSayjTloy9oX1H7yVoGSH+yfbrx397Rde6iliDcTLnQjNb1VUx1DQAbWztoR2f+lHSgNbhzIWbWyrlsu4jqT6rXc+7rr0vLLclnpqd0j2sYCXOIaANSSbAKdtgtiwC6V6Mt5MY+CynMAmMnmBq38R2XHJdEVH3O3I+DPE0rg6QA2DdGkixJd9I2JHIZnVXhU2ILC8lmnuuC2m+g/EudQ0OvCd8cvsWRERQqvRERERERERERERERERERERYZoQ9pa4XBFiCsyIvCARBVZqd1WnON+HsLb+24/FVaohsXNPa02Nuw2K6VLJhaXHkCfYuaySYiXH6V/abqywlR75zGVyO3MLh8Pk+E3KTOnARu0F+EKuU0cgma10pID/AO2uDY3sW3uTfs5qqU/zwf7w73lX+ekaH8UvLQLEjllzKp0OzHDaHwkyRcIzudfitvY3IyVtTcIPgscFWYfiHSaZGkdrgtHer5zZ9aD3tXTAue70bKlmqzNE+G1mFpMrQbtNr2PU4HyWK+0v+NZ/1LOei9cwPa2+gUmIoMxNGjFRrS1gBzSL25bt6xekL5az91H996v+1qLjROZz1aep40/LxVJ3p2Y+omZJG+E2hY0kzMBxsuX+8Zo9m0xa9UwX0/pDc9NPMeaFuZjYIBC9dSbWoYcNqta5gNnE625crqr7ceTI2+RAsR1EONws+0JeHMJBo5pB8sJ9live9dMRMw42ue6GN8hDg4cUgtkzHW5pPitOskD22uLg3CAzJV9Rc2pTpuGhBB6/sQtvdubCJe0D/MtHZVOyRxD72Db5G2dwlA7BiuRnbn3/AJha0bXtzaQPEJmKly9qoQYmL+AU/BTRxHE297EZm6lt0IYKmaTFfEI7gi4ObrHUWPJVCOZ9xidcd4W/utK+Op+LcAXNIGY77G/cVHWJLCtvZlItxjHOdedfP3VsrYXUsowP5XDtMr6EeCkK+vieA1+ZIBtY5XHIqLmY+R2KVw8xp1ADRedoAOILSL6W7tLLQgxK+hZM0F2o3rHXUobm05dRXiF5IzzXiTG7VZY2WFlJTBzyBZbDQd6+rc2RWGKeOQasex1uuzrkeIuFpqW3Va01cIdGJGmVgLTexu618u/uyzyUz7NM8CvKpApuJEiDI420+u5d4hkxNDhzAOeueayr4F9XPr5oiIiIiIiIiIiIiIiIiIiIiIiIiIiIvhXOtrUxjle3DhF+iOVs9Oyy6MqnvnKLxt5gE+BsB7itrCOIqQN6pNvUWuw3xCYLSI5zAj74KskX1Vf2lE3EW8IsGQFhExp+25nebX1yVhXiVmIWuR3Gyt2ugrkqNX4Zn3Psqhtp5YKVsLY7zS8I8Ql7Rd9gfinAH9IfA2WCGpfC2qjfHEJqdhlY5mPhEZH1S7LVv+wt7fBuB9E60j2snD3EAvIAdGToFH1LHVBr6lsUgY6AxMxMLS71SSAc/o+1bAu0fe9XFIl1JrnaEcT3vixHPsza4IueWXZlLO6ITvFLwuC+UBvG4ovE4tFibWucxfrWnDVyhtLLMyGSKaUR2HFErTctuCXkH1b+AWXYjaVsRDIZ21TqeRrnFkmAv4JL9TbO3UpHdHYERhgmkY8yNJIDnOwtIkcARGRYHIH2r1xDZJ9OR5rOrVFJr3VC7UAWgwQ/TtG0gdqTwg6Ki7zVbnSuuGgMkmYLYr2a+9zdxzz5W5qJ4meVtFt7xNIqZrgj4yQ55ayOzUaSteo+HEeC6jDMAotHILO5+gy7/wDfcvjn5aZrESl14XqbKFlLyvdHUYJI3DLC4E92h9l1rIQsc0+H1WTSWODhqL+Sv0suWguDbsXkG5HaFqbOlxwMf12B+s3IraDbP7M1rtmRPJfRqb2vaHt0IBHW69YD1L21tl9RbLWgKVF030T0EZZJOQDIHBgJ1a0tBNuq97fZXMl0n0PuP9IH0egfHpfgoMXPwTHL1VXtoH8E+Dw63Aj5rpSIiplwqIiIiIiIiIiIiIiIiIiIiIiIiIiIiKp75UpuyT6IyPYb3Hnc+StixSxhwIcAQdQdCpKVT4bw5amNwoxNE0pidDzGn15LmaK9/wD16mvfhfzOt5XWwzZkLdIm+Iv71vHGs3Arm2/w9iJ7T2jwk+wXNqyIPY9hNg9hYSDnZwIy81W5tlyRuJs57cd8Wbnu5nGAPVNtO3wXdW07Ro1o7mhQ22tgiTpRgNfzGgd+R7VlTx4mCIC2BsjEYZhdScHf2xE+BnX71XKvg/Cp5ZXmSzY3yGPIEFhxAMNsh8W3UFRspmbGJJGXMogEbg8iPFKQ3A+9zdosbi11ctqUGJskMgLcTHRuA1AeCMlRd5aWSCmdxpS42hiiLbMAMRu12HE67yBcnLRWLHiL/Y5KuwlR9SqWTBJiN+osNNN87hJHCj7aqC+eRxId0nC4vYhptcXJyNr+K0V9Xxa8ldy1uVoaNyIERFkiL7ZAF6Gkop7daW4fFfTpjxyd+Hmu1ej/AHTppqUyTR4yXFo6TmgNaAMsJHPFmuDbDmwTxnkXYXdzuiv1jsCgEFPFFzYwA/W1d/MStXGOyNEG59lbnaDm7PbTa4hwcRYwcoE+8dFBTejqidoJG/VcP8wKiqn0YRn9HUOb9aMO9oIXRUWiMRVH6itVm1cYzSoet/WVy0ei+W/yhluuzr+X/lX3YOxY6SIRx363OPrOdbU/kpVF5Ur1HiHFYYnaOIxLQ2o63gB6BERFEtJERERERERERERERERERERERERERERERERERERERERRe2dmNnYRbpgdF3b1HsK/NfpB2xx6jhNPQhJb3vuQ93sw+B61+gt+tuCkpjY2kkuxnWMuk/wHtIX5m3ihwzkjR4D/ADyPtBVpgc2QzpuXv8oBH8wIuDl8Z39O6PE8FGIiLfgLJLIiJCIiIiKW3Wo+LVwM5cRrj3MOM/dX6s2PWcaJr+ZGffz/AD8V+avRnFerPZC8+JLG+5xXZdh7TMD7n1HZOH4jtWpi6XxG21CoMVtIYfaAa/u5QDyMkg9ND4+fQEWNjgQCDcHMHsWRU6vEREREREREREREREREREREREREREREREREREREREREREREWORwAucgM7rIqj6Rtq8CkLWmz5TgHXhtd58uj9pZMYXuDRvUtCi6vVbSbqTH16arm++G2jV1Dn36I6LB+wCc+86+PYqDvY3pRHseP4cP5qw3UBvVMPi2/SF3O7AbAfir5rQ0Bo0C7HatKnT2eabbAZY6EfPWfNV9ERZri0RERERERFZ/R3VcOta06SMdH4mzh7W28V1pcFoqgxSMkbqxzXD7Dg78F3WkqGyMa9jg5rhcEaWKxcuQ/iKhlrNq7iI6j6R5K47pV92mFxzbm3u5jwPvVlXONnVXClY/q18cvdddGVRi6eV8jf8AZVnsPFGth8jtW26bvcdF9REWqrpERERERERERERERERf/9k=" alt="" className="d-none d-lg-inline wrapper"/>

                                <slide>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                        iste molestiae
                                        beatae, maiores deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic
                                        consequatur
                                        repellat eveniet quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum
                                        magnam
                                        autem nam ex deserunt debitis
                                        eaque ratione! Nobis, quidem assumenda.
                                </p>
                                </slide>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/worldmentalhealthday_16x9.jpg?itok=f8Yz2JKv" alt="" className="img-fluid wrapper"/>
                    </div>
                </div>
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <Slide>
                            <img src="https://www.instituteofmusic.org/images/Mental%20health2.jpg" alt="" className="img-fluid wrapper"/>
                        </Slide>
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>Mental Health</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUOpKoQThB0ZsM2W9_RLY5Yj0dLxVtFiLag&usqp=CAU" alt="" className="d-none d-lg-inline wrapper"/>
                                <Slide>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                        iste molestiae
                                        beatae, maiores
                                        deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic
                                        consequatur
                                        repellat eveniet
                                        quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum
                                        magnam
                                        autem nam ex deserunt
                                        debitis
                                        eaque ratione! Nobis, quidem assumenda.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default HomePage;


