import Container from '@/components/molecules/landing/container'
import React from 'react'
import Image from 'next/image'
import Meme from '@/public/assets/meme.jpeg'

function Certification() {
  return (
    <Container>
        <div className='m-auto flex justify-center'>
            <Image
                width={400}
                alt="Meme This is where i put my certification if i had one"
                src={Meme}
            />
        </div>
    </Container>
  );
}

export default Certification