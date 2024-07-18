import React from 'react';
import Image from 'next/image';
import aws from '../../public/icons8-aws-96.png';
import css from '../../public/icons8-css-96.png';
import docker from '../../public/icons8-docker-96.png';
import git from '../../public/icons8-git-96.png';
import github from '../../public/icons8-github-100.png';
import html from '../../public/icons8-html-100.png';
import java from '../../public/icons8-java-96.png';
import js from '../../public/icons8-javascript-100.png';
import k8s from '../../public/icons8-kubernetes-96.png';
import linux from '../../public/icons8-linux-96.png';
import maven from '../../public/icons8-maven-ios-100.png';
import mongo from '../../public/icons8-mongo-db-96.png';
import nextJS from '../../public/icons8-nextjs-96.png';
import nodeJS from '../../public/icons8-nodejs-96.png';
import php from '../../public/icons8-php-100.png';
import postgres from '../../public/icons8-postgres-96.png';
import python from '../../public/icons8-python-96.png';
import reactLogo from '../../public/icons8-react-native-68.png';
import spring from '../../public/icons8-spring-boot-96.png';

const ImageSlider = () => {
  return (
    <div className='flex flex-row flex-wrap p-14 gap-12 lg:gap-16 justify-center '>
        <Image src={aws} alt="AWS Image" width={96} height={96} />
        <Image src={docker} alt="Docker Image" width={96} height={96} />
        <Image src={git} alt="Git Image" width={96} height={96} />
        <Image src={github} alt="GitHub Image" width={96} height={96} />
        <Image src={html} alt="HTML Image" width={96} height={96} />
        <Image src={css} alt="CSS Image" width={96} height={96} />
        <Image src={java} alt="Java Image" width={96} height={96} />
        <Image src={js} alt="JavaScript Image" width={96} height={96} />
        <Image src={k8s} alt="Kubernetes Image" width={96} height={96} />
        <Image src={linux} alt="Linux Image" width={96} height={96} />
        <Image src={maven} alt="Maven Image" width={96} height={96} />
        <Image src={mongo} alt="MongoDB Image" width={96} height={96} />
        <Image src={nextJS} alt="Next.js Image" width={96} height={96} />
        <Image src={nodeJS} alt="Node.js Image" width={96} height={96} />
        <Image src={php} alt="PHP Image" width={96} height={96} />
        <Image src={postgres} alt="PostgreSQL Image" width={96} height={96} />
        <Image src={python} alt="Python Image" width={96} height={96} />
        <Image src={reactLogo} alt="React Logo Image" width={96} height={96} />
        <Image src={spring} alt="Spring Boot Image" width={96} height={96} />
    </div>
  );
}

export default ImageSlider;
