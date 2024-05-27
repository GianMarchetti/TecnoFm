'use client'
import styles from './repair.module.css'
import Image from 'next/image'
import React, { useState } from 'react';
import { AlertCircle, CheckIcon } from 'lucide-react';

const RepairServices = () => {
    const [activeTab, setActiveTab] = useState("Celulares");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  }

    return (
        <section className={styles.repairServices}>

        <div className={styles.tab}>
            <button className={`${styles.tablinks} ${activeTab === 'Celulares' ? styles.active : ''}`} onClick={() => openTab('Celulares')}>Celulares</button>

            <button className={`${styles.tablinks} ${activeTab === 'Computadoras' ? styles.active : ''}`} onClick={() => openTab('Computadoras')} >Computadoras</button>

            <button className={`${styles.tablinks} ${activeTab === 'Tablet' ? styles.active : ''}`} onClick={()=> openTab('Tablet')} >Tablet</button>
        </div>

{/* ------------------- CELULARES--------------------------------------------- */}

            <div className={styles.service} id='Celulares' style={{ display: activeTab === 'Celulares' ? 'flex' : 'none' }}>
                <div className={styles.serviceDivImage}>
                    <Image src="https://i.ibb.co/FzkjgNp/celuRoto.png" alt="celuRoto" border="0" width={1200} height={1200} className={styles.serviceImage}/>
                    <Image src="https://i.ibb.co/b1vfyZ4/mano-Presentation.png" alt="celuRoto" border="0" width={1200} height={1200} className={styles.serviceImagePresentation}/>
                </div>

                <div className={styles.serviceText}>
                    <h2>Reparación de Celulares</h2>
                    <div className={styles.serviceTextBlock}>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Pantalla Rota</h3>
                            <p className={styles.textReparacion}>Uno de los problemas más comunes en los que se especializa CPR es la reparación de pantallas agrietadas.  Su teléfono se verá como nuevo después de nuestras reparaciones de pantalla asequibles y rápidas.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Daño por Agua</h3>
                            <p className={styles.textReparacion}>No dé por hecho que su Celular no tiene reparación después de sufrir daños por agua. Los técnicos de TecnoFm desmontan su teléfono, lo limpian y reparan desde el interior y lo vuelven a montar con cuidado. Puede estar tranquilo sabiendo que su teléfono está en buenas manos.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Parlante no funcionando</h3>
                            <p className={styles.textReparacion}>Si su Celular ya no suena alto y claro, es posible que tenga problemas con los altavoces. Tanto si solo necesitas una puesta a punto como si necesitas sustituir el altavoz por completo, TecnoFm te ayuda.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Sin Señal</h3>
                            <p className={styles.textReparacion}>Cuando su Celular está funcionando extra lento, puede haber una variedad de problemas que afectan a su señal. Los técnicos de TecnoFm examinarán su teléfono, encontrarán al culpable y realizarán las reparaciones o sustituciones necesarias para que su teléfono vuelva a funcionar correctamente.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Batería muerta</h3>
                            <p className={styles.textReparacion}>No dé por hecho que su Celular no tiene reparación después de sufrir daños por agua. Los técnicos de TecnoFm desmontan su teléfono, lo limpian y reparan desde el interior y lo vuelven a montar con cuidado. Puede estar tranquilo sabiendo que su teléfono está en buenas manos.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Botones Rotos</h3>
                            <p className={styles.textReparacion}>Un botón de inicio roto o que funciona mal puede echar por tierra toda tu experiencia con Celular. Puedes contar con TecnoFm para un servicio de reparación rápido, para que tu dispositivo vuelva a tus manos lo antes posible.</p>
                        </div>
                    </div>
                </div>
            </div>

{/* ------------------- PC--------------------------------------------- */}


            <div className={styles.service} id='Computadoras' style={{ display: activeTab === 'Computadoras' ? 'flex' : 'none' }}>
                <div className={styles.serviceDivImage}>
                    <Image src="https://i.ibb.co/6RSj6tz/laptop.png" alt="laptop" border="0" width={1200} height={1200} className={styles.serviceImage}/>
                    <Image src="https://i.ibb.co/b1vfyZ4/mano-Presentation.png" alt="celuRoto" border="0" width={1200} height={1200} className={styles.serviceImagePresentation}/>
                </div>
                <div className={styles.serviceText}>
                    <h2>Reparación de pc/Notebook</h2>
                    <div className={styles.serviceTextBlock}>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Pantalla Rota</h3>
                            <p className={styles.textReparacion}>Los técnicos expertos de TecnoFm están especializados en la reparación de pantallas rotas, y no sólo de teléfonos móviles. Reparamos de forma eficaz y asequible pantallas rotas de ordenadores de todas las marcas y modelos más comunes.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Daño por Agua</h3>
                            <p className={styles.textReparacion}>Si tiene un ordenador dañado por el agua, visite TecnoFm lo antes posible. Nuestros técnicos pueden diagnosticar el alcance del daño y repararlo rápidamente, para que no tenga que estar mucho tiempo sin su ordenador.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Parlante no funcionando</h3>
                            <p className={styles.textReparacion}>Un altavoz de ordenador dañado puede perjudicar su experiencia de usuario. Si su altavoz suena apagado, distorsionado o simplemente no produce audio, llévelo a TecnoFm para su reparación o sustitución.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Sin Señal</h3>
                            <p className={styles.textReparacion}>¿Ordenador lento? Podría estar experimentando problemas con su sistema operativo u otro software interno. TecnoFm puede localizar el problema y solucionarlo rápidamente para que su ordenador vuelva a funcionar.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Batería muerta</h3>
                            <p className={styles.textReparacion}>¿La batería de su ordenador ya no tiene carga? Si su ordenador no se carga o pierde batería continuamente, pase por TecnoFm y deje que nuestro experto equipo técnico diagnostique y solucione el problema.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Botones Rotos</h3>
                            <p className={styles.textReparacion}>Cuando se trata de sus dispositivos digitales, no hay nada peor que un fallo del sistema. Si estás experimentando la temida pantalla en blanco de un fallo del sistema, trae tu ordenador a TecnoFM para un diagnóstico y presupuesto de los servicios de reparación.</p>
                        </div>
                    </div>
                </div>
            </div>
{/* ------------------- Tablet--------------------------------------------- */}

            <div className={styles.service} id='Tablet' style={{ display: activeTab === 'Tablet' ? 'flex' : 'none' }}>
                <div className={styles.serviceDivImage}>
                    <Image src="https://i.ibb.co/28YHNRw/tablet.png" alt="tablet" border="0" width={1200} height={1200} className={styles.serviceImage}/>
                    <Image src="https://i.ibb.co/b1vfyZ4/mano-Presentation.png" alt="celuRoto" border="0" width={1200} height={1200} className={styles.serviceImagePresentation}/>
                </div>
                <div className={styles.serviceText}>
                    <h2>Reparación de Tablet</h2>
                    <div className={styles.serviceTextBlock}>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Pantalla Rota</h3>
                            <p className={styles.textReparacion}>Los técnicos de TecnoFM ofrecen reparaciones de pantalla de tablet asequibles que a menudo se pueden completar en el mismo día hábil. Visita nuestra tienda para devolver tu tablet a su estado adecuado.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Daño por Agua</h3>
                            <p className={styles.textReparacion}>Llevas tu tablet a todas partes, por lo que no es raro que el daño por agua arruine tu experiencia. TecnoFM tiene experiencia en reparaciones de daños por agua y puede restaurar tu tablet de manera rápida y asequible</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Parlante no funcionando</h3>
                            <p className={styles.textReparacion}>Si el audio de tu tablet suena amortiguado o no funciona en absoluto, visita TecnoFM. Tenemos las herramientas para reparar o reemplazar los altavoces de tu tablet y restaurar tu dispositivo a su estado original.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Sin Señal</h3>
                            <p className={styles.textReparacion}>Una tablet sin señal disminuye significativamente las capacidades de la tablet. Afortunadamente, TecnoFM se especializa en servicios de reparación de señal que no te dejarán sin tu tablet favorita por mucho tiempo.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Batería muerta</h3>
                            <p className={styles.textReparacion}>Si tu tablet no mantiene la carga tanto como solía hacerlo, es posible que tengas problemas con la batería. Sea cual sea la causa, TecnoFM puede diagnosticar el problema y completar una reparación exitosa de manera oportuna.</p>
                        </div>
                        <div >
                            <h3><AlertCircle color='red' className='inline' /> Botones Rotos</h3>
                            <p className={styles.textReparacion}>Si encuentras que los botones de tu tablet están fallando o no funcionan en absoluto, asegúrate de visitar TecnoFM. Nuestros técnicos de reparación pueden resolver el problema de manera rápida y asequible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RepairServices