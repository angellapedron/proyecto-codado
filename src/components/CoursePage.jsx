import React, {useState} from 'react';
import MainSlider from './MainSlider';
import image from '../images/cursos.jpg'
import Courses from './Courses';
import styles from './CoursePage.module.css';
import image2 from '../images/hero.jpg';
import image3 from '../images/1297016224_0.jpg';
import image4 from '../images/asesor-financiero-personal.jpg';
import image5 from '../images/55c6fa787c63f7b7bf94dd959fa3f24d5365fbbe.jpeg';
import image6 from '../images/600x300_asistcont.jpg';
import image7 from '../images/c8586436ab9e949fb8964b78cd404eb9.jpg'
import InformativeFlayer from './InformativeFlayer';
import ImageBanner from './ImageBanner';
import Portal from './Portal';
import ModalInfo from './ModalInfo';

export default function CoursePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({titulo:'', parrafo:''})
  
  function modalInfo(text){
    setIsOpen(true);
    setModalContent(text);
  }

  return (
    <>
        <MainSlider 
        image={image} 
        title={"PROGRAMACIÓN DE CURSOS 2022"} 
        text={"Formatos prediseñados atendiendo a las tendecias del mercado, con posibilidad de ajustes y rediseños según sus requerimientos."}
        width={"1272px"}
        height={"520px"}
        />

        <div className={styles.divCourses}>
            <Courses title={"Asistente de Informática"} image={image3} onClick={() => modalInfo({titulo:'Asistente de Informática', parrafo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'})}/>
            <Courses title={"Asistente Financiero"} image={image4} onClick={() => modalInfo({titulo:'Asistente Financiero', parrafo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'})}/>
            <Courses title={"Asistente Administrativo"} image={image5} onClick={() => modalInfo({titulo:'Asistente Administrativo', parrafo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'})}/>
            <Courses title={"Asistente Contable"} image={image6} onClick={() => modalInfo({titulo:'Asistente Contable', parrafo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'})}/>
            <Courses title={"Asistente de Ventas"} image={image7} onClick={() => modalInfo({titulo:'Asistente de Ventas', parrafo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'})}/>
        </div> 

        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalInfo title={modalContent.titulo } text={modalContent.parrafo}/>
        </Portal>

        <ImageBanner image={image2} direction={"left"}>
            <InformativeFlayer  title={"FORMULARIO"} button={"Ir al formulario"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} marginLeft={"120px"} link={"formulario"}/>
        </ImageBanner>
    </>
  )
}
