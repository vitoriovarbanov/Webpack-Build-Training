import React from 'react';
import crossBike from '../../assets/img/featured-bikes/cross.jpg'
import trekBike from '../../assets/img/featured-bikes/trek.jpg'
import cubeBike from '../../assets/img/featured-bikes/cube.jpg'
import giantBike from '../../assets/img/featured-bikes/giant.jpg'
import specializedBike from '../../assets/img/featured-bikes/specialized.jpg'
import ultraBike from '../../assets/img/featured-bikes/ultra.jpg'
import dartMoor from '../../assets/img/featured-bikes/dartmoor.jpg'

export const FeaturedBikes = () => {
    const imageSources = [
        { imgSrc: crossBike },
        { imgSrc: cubeBike },
        { imgSrc: giantBike },
        { imgSrc: trekBike },
        { imgSrc: specializedBike },
        { imgSrc: ultraBike },
        { imgSrc: dartMoor },
    ]

    return (
        <>
            <section className='featured-bikes'>
                <h2 className='heading-secondary black pt-20 text-shadow'>
                    <span>Featured bicycles</span>
                </h2>
                <ul className='card--container'>
                    {
                        imageSources.map(x => (
                            <>
                                <li className='card--slide'>
                                    <div className='card--slide-back'>
                                        <img
                                            src={x.imgSrc}
                                            alt='Cross bicycle'
                                            height={300}
                                            width={300}
                                            className='card--img' />
                                        <h4 className='heading-h4'>Cross GRX-7</h4>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, eveniet recusandae? Vel natus voluptas libero ipsam, temporibus, cumque provident voluptatum,
                                            consequuntur modi sit dolorem. Voluptatum dolores doloribus natus nulla facilis?</p>
                                    </div>
                                </li>

                            </>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}
