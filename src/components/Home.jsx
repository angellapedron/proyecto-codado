import React from 'react';
import MainSlider from './MainSlider';
import image from '../images/foto_portada.jpg'
import image2 from '../images/hero.jpg'
import image3 from '../images/circulo_1.jpg'
import image4 from '../images/circulo_2.jpg'
import image5 from '../images/circulo_3.jpg'
import image6 from '../images/circulo_4.jpg'
import Section from './Section';
import styles from './Home.module.css'
import Information from './Information';
import InformativeFlayer from './InformativeFlayer';
import ImageBanner from './ImageBanner';

export default function Home() {
  return (
    <>
        <MainSlider 
          image={image} 
          title={"INSTITUTO CODADO"} 
          text={"Desde la formación de oficios hasta la especialización en nuestros diplomados"}
          width={"1200px"}
          height={"254px"}
        />
        <div className={styles.sections}>
            <Section 
            title={"PARTICIPANTES"} 
            image={image3} 
            direction={"right"}
            titleHover={"Lorem Ipsum 1"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
            <Section 
            title={"FACILITADORES"} 
            image={image4}
            direction={"right"}
            titleHover={"Lorem Ipsum 2"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
            <Section 
            title={"EL PROCESO"} 
            image={image5}
            direction={"left"}
            titleHover={"Lorem Ipsum 3"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
            <Section 
            title={"COMUNIDADES"} 
            image={image6}
            direction={"left"}
            titleHover={"Lorem Ipsum 4"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
        </div>
        <ImageBanner image={image2} direction={"flex-end"}>
            <InformativeFlayer title={"CURSOS"} button={"Ver cursos"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} marginRight={"120px"} link={"cursos"}/>
        </ImageBanner>
        <div className={styles.importantInfo}>
            <Information title={'MISIÓN'} text={'Permanecer en el tiempo como la solución de nuestros clientes en el desarrollo y fortalecimiento de su recurso humano, a través de la alta calidad de nuestros programas; garantizando un sistema de trabajo que provea conocimiento y bienestar profesional.'}/>
            <Information title={'VISIÓN'} text={'Ser reconocidos internacionalmente como la Empresa Líder en consultoría y capacitación de personal, contribuyendo al crecimiento y cambio organizacional de nuestros clientes.'}/>
            <Information title={'VALOR AGREGADO'} text={'Ofrecemos soluciones para la formación, a nivel Nacional, de grandes grupos de personas de las empresas y/o trabajadores temporales que se desempeñen en proyectos especiales.'}/>
        </div>
    </>
  )
}
